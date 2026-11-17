import { useId } from "react";
import { useTranslation } from "react-i18next";
import Toggle from "@/components/lib/Toggle";
import { ModalInput, ModalSelect } from "@/components/lib/Modal";
import { blurOnWheel } from "@/components/ProviderFields";

/** Higher number, more privileges. */
export const ROLE_RANK = { default: 0, manager: 1, admin: 2, superadmin: 3 };

/** Roles each role may assign or edit. */
export const MANAGEABLE_ROLES = {
  superadmin: ["superadmin", "admin", "manager", "default"],
  admin: ["admin", "manager", "default"],
  manager: ["manager", "default"],
  default: [],
};

const ROLE_HINT_KEYS = {
  default: ["default-1", "default-2"],
  manager: ["manager-1", "manager-2", "manager-3"],
  admin: ["admin-1", "admin-2", "admin-3"],
  superadmin: ["superadmin-1", "superadmin-2", "superadmin-3"],
};

export function useRoleLabel() {
  const { t } = useTranslation();
  return (role) =>
    t(`profile_settings.roles.${role || "default"}`, {
      defaultValue: role || "default",
    });
}

/**
 * Role <select> with the permissions of the chosen role linked as its
 * description. Only the roles `actorRole` may assign are offered.
 */
export function RoleSelect({ actorRole, value, onChange }) {
  const { t } = useTranslation();
  const roleLabel = useRoleLabel();
  const hintId = useId();
  const options = [...(MANAGEABLE_ROLES[actorRole] ?? [])].reverse();
  // Keep the current role selectable even if the actor could not assign it.
  if (value && !options.includes(value)) options.push(value);

  return (
    <div className="flex flex-col gap-y-2 w-full">
      <ModalSelect
        label={t("admin-pages.users.role")}
        name="role"
        required={true}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-describedby={hintId}
      >
        {options.map((role) => (
          <option key={role} value={role}>
            {roleLabel(role)}
          </option>
        ))}
      </ModalSelect>
      <RoleHintDisplay id={hintId} role={value} />
    </div>
  );
}

export function RoleHintDisplay({ id, role }) {
  const { t } = useTranslation();
  const keys = ROLE_HINT_KEYS[role] ?? ROLE_HINT_KEYS.default;
  return (
    <div id={id} className="flex flex-col gap-y-1 pb-2">
      <p className="text-sm font-medium text-theme-text-primary">
        {t("admin-pages.users.permissions")}
      </p>
      <ul className="flex flex-col gap-y-1 list-disc px-4">
        {keys.map((key) => (
          <li key={key} className="text-xs text-theme-text-secondary">
            {t(`admin-pages.role-hints.${key}`)}
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Daily message limit: a switch plus the number field. `limit` is kept as
 * typed (string) so the field can be emptied; the form validates it.
 */
export function MessageLimitInput({ enabled, limit, updateState, role }) {
  const { t } = useTranslation();
  if (["admin", "superadmin"].includes(role)) return null;
  return (
    <div className="flex flex-col gap-y-4">
      <Toggle
        size="md"
        variant="horizontal"
        label={t("admin-pages.users.limit-toggle")}
        description={t("admin-pages.users.limit-toggle-help")}
        enabled={enabled}
        onChange={(checked) => {
          updateState((prev) => ({
            ...prev,
            enabled: checked,
          }));
        }}
      />
      {enabled && (
        <ModalInput
          label={t("admin-pages.users.limit-label")}
          type="number"
          inputMode="numeric"
          min={1}
          step={1}
          required={true}
          value={limit}
          onWheel={blurOnWheel}
          onChange={(e) => {
            const next = e.target.value;
            updateState((prev) => ({ ...prev, enabled: true, limit: next }));
          }}
          hint={t("admin-pages.users.limit-hint")}
        />
      )}
    </div>
  );
}

/**
 * Parses the limit typed in MessageLimitInput. Returns the number to send,
 * null when the limit is off, or undefined when it is not a valid value.
 * Admins never have a limit applied (and the field is hidden for them), so
 * an invalid leftover value is dropped instead of blocking the form.
 */
export function parseMessageLimit({ enabled, limit }, role) {
  if (!enabled) return null;
  const value = Number(limit);
  if (String(limit).trim() === "" || !Number.isInteger(value) || value < 1)
    return ["admin", "superadmin"].includes(role) ? null : undefined;
  return value;
}
