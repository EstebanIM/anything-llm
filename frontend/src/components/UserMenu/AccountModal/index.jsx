import { useContext, useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ImagePlus, LoaderCircle, Trash2, UserRound } from "lucide-react";
import { AuthContext } from "@/AuthContext";
import usePfp from "@/hooks/usePfp";
import System from "@/models/system";
import { AUTH_TOKEN } from "@/utils/constants";
import showToast from "@/utils/toast";
import { rawMessage, serverErrorMessage } from "@/utils/serverErrors";
import Modal, {
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalInput,
  ModalTextarea,
  ModalPrimaryButton,
  ModalSecondaryButton,
} from "@/components/lib/Modal";
import ThemePreference from "@/pages/GeneralSettings/Settings/components/ThemePreference";
import LanguagePreference from "@/pages/GeneralSettings/Settings/components/LanguagePreference";
import AutoSubmit from "@/pages/GeneralSettings/Settings/components/AutoSubmit";
import AutoSpeak from "@/pages/GeneralSettings/Settings/components/AutoSpeak";
import {
  USERNAME_MIN_LENGTH,
  USERNAME_MAX_LENGTH,
  USERNAME_PATTERN,
} from "@/utils/username";

const SECTION_TITLE =
  "text-sm font-semibold text-slate-50 light:text-slate-900";
const SECTION_HINT = "text-xs text-zinc-400 light:text-slate-600";

/**
 * Errors from POST /system/user that belong to one field (English from the
 * server) → `{ field: translated message }`, or null for anything else.
 */
function fieldErrorFor(error, t) {
  const raw = rawMessage(error);
  if (/current password is incorrect/i.test(raw))
    return { currentPassword: t("auth-errors.invalid-password") };
  if (/username/i.test(raw) && /already exists/i.test(raw))
    return { username: t("auth-pages.invite.username-taken") };
  if (/^username /i.test(raw))
    return { username: t("auth-pages.errors.username-invalid") };
  // Password complexity rules (configurable on the server) name "password".
  if (/password/i.test(raw))
    return { password: t("auth-pages.errors.password-rejected") };
  return null;
}

/**
 * The signed-in user's account: profile (photo, name, bio), password, and
 * the preferences kept in this browser, which apply at once and are not part
 * of the form.
 */
export default function AccountModal({ user, hideModal }) {
  const { t } = useTranslation();
  const auth = useContext(AuthContext);
  const formId = useId();
  const fieldId = useId();
  const ids = {
    username: `${fieldId}-username`,
    currentPassword: `${fieldId}-current-password`,
    password: `${fieldId}-password`,
  };
  const profileId = useId();
  const passwordId = useId();
  const preferencesId = useId();
  const isDefaultUser = user?.role === "default";
  const [newPassword, setNewPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (busy) return;
    const form = new FormData(e.target);
    const data = { bio: String(form.get("bio") ?? "") };
    // Default users do not submit a username, so it must not be overwritten.
    if (!isDefaultUser) data.username = String(form.get("username") ?? "");
    const password = String(form.get("password") ?? "");
    if (password) {
      data.password = password;
      data.currentPassword = String(form.get("currentPassword") ?? "");
    }

    setErrors({});
    setBusy(true);
    const { success, error } = await System.updateUser(data);
    setBusy(false);

    if (!success) {
      const fieldErrors = fieldErrorFor(error, t);
      if (fieldErrors) {
        setErrors(fieldErrors);
        const [field] = Object.keys(fieldErrors);
        document.getElementById(ids[field])?.focus();
        return;
      }
      showToast(
        serverErrorMessage(error, t, "dialogs.account.save-failed"),
        "error"
      );
      return;
    }

    // Update the session in place: the sidebar shows the new name and a
    // second save starts from it instead of the old one.
    const current = auth?.store?.user || user;
    auth?.actions?.updateUser(
      {
        ...current,
        ...(data.username ? { username: data.username } : {}),
        bio: data.bio,
      },
      auth?.store?.authToken || window.localStorage.getItem(AUTH_TOKEN) || ""
    );
    showToast(t("profile_settings.profile_updated"), "success", {
      clear: true,
    });
    hideModal();
  };

  const close = busy ? undefined : hideModal;

  return (
    <Modal isOpen={true} onClose={close} size="lg">
      <ModalHeader title={t("profile_settings.edit_account")} onClose={close} />
      <ModalBody className="gap-y-6">
        <form
          id={formId}
          onSubmit={handleUpdate}
          className="flex flex-col gap-y-6"
        >
          <section
            aria-labelledby={profileId}
            className="flex flex-col gap-y-4"
          >
            <h3 id={profileId} className={SECTION_TITLE}>
              {t("dialogs.account.profile")}
            </h3>
            <ProfilePhoto user={user} isDefaultUser={isDefaultUser} />
            {isDefaultUser ? (
              <p className={SECTION_HINT}>
                {t("dialogs.account.managed-by-admin")}
              </p>
            ) : (
              <ModalInput
                id={ids.username}
                label={t("profile_settings.username")}
                name="username"
                type="text"
                minLength={USERNAME_MIN_LENGTH}
                maxLength={USERNAME_MAX_LENGTH}
                pattern={USERNAME_PATTERN}
                defaultValue={user.username}
                required
                autoComplete="username"
                autoCapitalize="none"
                spellCheck={false}
                hint={t("common.username_requirements")}
                error={errors.username}
              />
            )}
            <ModalTextarea
              label={t("dialogs.account.bio")}
              optional
              name="bio"
              defaultValue={user.bio}
              rows={3}
            />
          </section>
          <section
            aria-labelledby={passwordId}
            className="flex flex-col gap-y-4"
          >
            <h3 id={passwordId} className={SECTION_TITLE}>
              {t("dialogs.account.password-section")}
            </h3>
            <ModalInput
              id={ids.currentPassword}
              label={t("profile_settings.current_password")}
              name="currentPassword"
              type="password"
              autoComplete="current-password"
              required={!!newPassword}
              hint={t("profile_settings.current_password_hint")}
              error={errors.currentPassword}
            />
            <ModalInput
              id={ids.password}
              label={t("profile_settings.new_password")}
              name="password"
              type="password"
              minLength={8}
              autoComplete="new-password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              hint={t("profile_settings.password_description")}
              error={errors.password}
            />
          </section>
        </form>
        <section
          aria-labelledby={preferencesId}
          className="flex flex-col border-t border-zinc-700 light:border-slate-300 pt-5"
        >
          <h3 id={preferencesId} className={SECTION_TITLE}>
            {t("dialogs.account.preferences")}
          </h3>
          <p className={`${SECTION_HINT} mt-1`}>
            {t("dialogs.account.preferences-hint")}
          </p>
          <ThemePreference />
          <LanguagePreference />
          <AutoSubmit />
          <AutoSpeak />
        </section>
      </ModalBody>
      <ModalFooter>
        <ModalSecondaryButton type="button" onClick={hideModal}>
          {t("profile_settings.cancel")}
        </ModalSecondaryButton>
        <ModalPrimaryButton
          type="submit"
          form={formId}
          busy={busy}
          className="gap-x-2"
        >
          {busy && (
            <LoaderCircle
              strokeWidth={1.5}
              className="h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          {t("profile_settings.update_account")}
        </ModalPrimaryButton>
      </ModalFooter>
    </Modal>
  );
}

/**
 * Profile photo with real buttons: "Upload/Change photo" opens the file
 * picker, "Remove photo" deletes it. Both save at once and say so.
 */
function ProfilePhoto({ user, isDefaultUser }) {
  const { t } = useTranslation();
  const { pfp, setPfp } = usePfp();
  const inputRef = useRef(null);
  const changeRef = useRef(null);
  const hintId = useId();
  const [busy, setBusy] = useState(null); // "upload" | "remove" | null

  const handleFile = async (event) => {
    const input = event.target;
    const file = input.files?.[0];
    if (!file) return;
    setBusy("upload");
    const formData = new FormData();
    formData.append("file", file);
    const { success, error } = await System.uploadPfp(formData);
    // Cleared so picking the same file again still fires a change.
    input.value = "";
    if (!success) {
      setBusy(null);
      showToast(
        serverErrorMessage(error, t, "dialogs.account.photo-upload-failed"),
        "error"
      );
      return;
    }
    setPfp(await System.fetchPfp(user.id));
    setBusy(null);
    showToast(t("profile_settings.upload_success"), "success");
  };

  const handleRemove = async () => {
    if (busy) return;
    setBusy("remove");
    const { success, error } = await System.removePfp();
    setBusy(null);
    if (!success) {
      showToast(
        serverErrorMessage(error, t, "dialogs.account.photo-remove-failed"),
        "error"
      );
      return;
    }
    // The remove button goes away with the photo: keep focus nearby.
    changeRef.current?.focus();
    setPfp(null);
    showToast(t("dialogs.account.photo-removed"), "success");
  };

  const busyProps = (kind) =>
    busy
      ? {
          "aria-disabled": true,
          "aria-busy": busy === kind || undefined,
          className:
            "gap-x-2 aria-disabled:opacity-60 aria-disabled:cursor-wait",
        }
      : { className: "gap-x-2" };

  return (
    <div className="flex items-center gap-x-4">
      <div className="w-20 h-20 shrink-0 rounded-full overflow-hidden flex items-center justify-center bg-zinc-800 light:bg-slate-100 border border-zinc-600 light:border-slate-400">
        {pfp ? (
          <img
            src={pfp}
            alt={t("dialogs.account.photo-alt")}
            className="w-full h-full object-cover bg-white"
          />
        ) : (
          <UserRound
            strokeWidth={1.5}
            size={36}
            aria-hidden="true"
            className="text-zinc-400 light:text-slate-600"
          />
        )}
      </div>
      {!isDefaultUser && (
        <div className="flex flex-col gap-y-2 min-w-0">
          <div className="flex flex-wrap gap-2">
            <ModalSecondaryButton
              ref={changeRef}
              type="button"
              onClick={() => !busy && inputRef.current?.click()}
              aria-describedby={hintId}
              {...busyProps("upload")}
            >
              {busy === "upload" ? (
                <LoaderCircle
                  strokeWidth={1.5}
                  size={16}
                  aria-hidden="true"
                  className="animate-spin"
                />
              ) : (
                <ImagePlus strokeWidth={1.5} size={16} aria-hidden="true" />
              )}
              {pfp
                ? t("dialogs.account.photo-change")
                : t("dialogs.account.photo-upload")}
            </ModalSecondaryButton>
            {pfp && (
              <ModalSecondaryButton
                type="button"
                onClick={handleRemove}
                {...busyProps("remove")}
              >
                {busy === "remove" ? (
                  <LoaderCircle
                    strokeWidth={1.5}
                    size={16}
                    aria-hidden="true"
                    className="animate-spin"
                  />
                ) : (
                  <Trash2 strokeWidth={1.5} size={16} aria-hidden="true" />
                )}
                {t("profile_settings.remove_profile_picture")}
              </ModalSecondaryButton>
            )}
          </div>
          <p id={hintId} className={SECTION_HINT}>
            {t("dialogs.account.photo-hint")}
          </p>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            tabIndex={-1}
            aria-hidden="true"
            className="hidden"
            onChange={handleFile}
          />
        </div>
      )}
    </div>
  );
}
