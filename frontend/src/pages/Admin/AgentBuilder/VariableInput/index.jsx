import React, { forwardRef, useId, useRef } from "react";
import { flushSync } from "react-dom";
import { useTranslation } from "react-i18next";
import { FIELD_ERROR } from "@/components/ProviderFields";
import { useAvailableVariables } from "../useAvailableVariables";
import InsertVariableMenu from "./InsertVariableMenu";

/**
 * Matches a ${variableName} reference, e.g. ${userId} or ${data.user.name}.
 * @type {string}
 */
const VARIABLE_PATTERN = "\\$\\{[^}]+\\}";

/**
 * The highlight box drawn around a ${variableName}. A 30% tint (composited over
 * whatever is behind it) instead of a solid fill, so the text stays readable
 * against both the light and dark themes. sky-300 matches the cta blue but,
 * being a standard palette color, supports the /30 opacity modifier (the
 * var-based theme colors don't). Shared with the "Variables" hint chips so the
 * two always look the same.
 * @type {string}
 */
export const VARIABLE_HIGHLIGHT_CLASS =
  "rounded-[3px] bg-sky-300/30 light:bg-sky-500/30";

/**
 * Highlight for ${...} tokens that don't match any defined variable: a red tint
 * plus a dashed outline (an outline does not shift the text, a border would),
 * so the state does not rely on color alone. The field also gets a linked
 * "Undefined variable" message.
 * @type {string}
 */
export const VARIABLE_INVALID_CLASS =
  "rounded-[3px] bg-red-500/30 outline-dashed outline-1 outline-red-500 light:outline-red-700";

/**
 * Shared text metrics so the backdrop and the real field line up exactly.
 * Includes the 16px phone size: if only the field had it, the highlight boxes
 * would drift away from the text.
 * @type {string}
 */
const FIELD_TEXT = "block w-full p-2.5 text-base md:text-sm";

/**
 * Name of the variable a ${...} token points at. Paths such as
 * ${response.data[0].id} resolve against their first segment at runtime.
 * @param {string} token - the text between ${ and }
 */
function rootName(token) {
  return token.split(/[.[]/)[0];
}

/**
 * ${...} tokens in `value` whose variable is not defined, without repeats.
 * @param {string} value
 * @param {Set<string>} validNames
 * @returns {string[]}
 */
function findUnknownTokens(value, validNames) {
  if (!value) return [];
  const tokens = value.match(new RegExp(VARIABLE_PATTERN, "g")) || [];
  return [
    ...new Set(
      tokens.filter((token) => !validNames.has(rootName(token.slice(2, -1))))
    ),
  ];
}

/**
 * A text input / textarea that live-highlights ${variable} references the same
 * way system prompt variables are highlighted, so it's obvious which parts of
 * the field will be swapped for a flow variable at runtime. Next to it, a menu
 * button inserts a variable at the cursor.
 *
 * How it works: a read-only "backdrop" sits behind a transparent-background
 * field. The backdrop renders the same text but draws a box around any ${...}
 * token. The real field renders on top, so the visible characters line up over
 * the highlight boxes while the field stays fully editable. The border lives on
 * the wrapper so both layers share the same box.
 *
 * `id`, `aria-*` and other props go to the underlying input/textarea, as does
 * the forwarded ref. `onChange` receives the event (or `{ target: { value } }`
 * when a variable is inserted from the menu).
 *
 * @param {object} props
 * @param {string} [props.label] - Visible name of the field, for the insert button
 * @param {string} [props.describedBy] - ids of help or error text for the field
 */
const VariableInput = forwardRef(function VariableInput(
  {
    value = "",
    onChange,
    multiline = false,
    mono = false,
    className = "",
    label,
    describedBy,
    ...props
  },
  ref
) {
  const { t } = useTranslation();
  const backdropRef = useRef(null);
  const fieldRef = useRef(null);
  const wasFocusedRef = useRef(false);
  const unknownId = useId();
  const availableVariables = useAvailableVariables();
  const validNames = new Set(availableVariables.map((v) => v.name));
  const unknownTokens = findUnknownTokens(value, validNames);

  const setRefs = (node) => {
    fieldRef.current = node;
    if (typeof ref === "function") ref(node);
    else if (ref) ref.current = node;
  };

  // Keep the highlight backdrop scrolled in lockstep with the field so the
  // boxes stay aligned once the text overflows the visible area.
  const handleScroll = (e) => {
    if (!backdropRef.current) return;
    backdropRef.current.scrollTop = e.target.scrollTop;
    backdropRef.current.scrollLeft = e.target.scrollLeft;
  };

  const insertVariable = (name) => {
    const field = fieldRef.current;
    const current = value || "";
    // A field that was never focused has no meaningful caret: append.
    const start = wasFocusedRef.current
      ? (field?.selectionStart ?? current.length)
      : current.length;
    const end = wasFocusedRef.current
      ? (field?.selectionEnd ?? current.length)
      : current.length;
    const token = "${" + name + "}";
    const next = current.slice(0, start) + token + current.slice(end);
    // Render the new value first so the caret can be placed after the token.
    flushSync(() => onChange?.({ target: { value: next } }));
    if (!field) return;
    field.focus();
    const caret = start + token.length;
    field.setSelectionRange(caret, caret);
  };

  const fontClass = mono ? "!font-mono" : "";
  const wrapClass = multiline
    ? "whitespace-pre-wrap break-words"
    : "whitespace-pre";
  const ariaDescribedBy =
    [describedBy, unknownTokens.length > 0 ? unknownId : null]
      .filter(Boolean)
      .join(" ") || undefined;

  // input and textarea behave identically here except for the tag, the resize
  // handle, and the text type, so render whichever one through a single path.
  const Field = multiline ? "textarea" : "input";

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-start gap-2">
        <div className="relative flex-1 min-w-0 rounded-lg border border-zinc-500 light:border-slate-500 bg-theme-settings-input-bg">
          <div
            ref={backdropRef}
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 overflow-hidden rounded-lg text-transparent ${wrapClass} ${FIELD_TEXT} ${fontClass}`}
          >
            {renderHighlightedParts(value, validNames)}
          </div>

          <Field
            ref={setRefs}
            type={multiline ? undefined : "text"}
            value={value}
            onChange={onChange}
            onScroll={handleScroll}
            onFocus={() => {
              wasFocusedRef.current = true;
            }}
            autoComplete="off"
            spellCheck={false}
            aria-describedby={ariaDescribedBy}
            className={`relative bg-transparent text-white placeholder:text-theme-settings-input-placeholder rounded-lg ${
              multiline ? "resize-y" : ""
            } ${FIELD_TEXT} ${fontClass}`}
            {...props}
          />
        </div>
        <InsertVariableMenu
          variables={availableVariables}
          onInsert={insertVariable}
          fieldLabel={label}
        />
      </div>
      {unknownTokens.length > 0 && (
        <p id={unknownId} className={FIELD_ERROR}>
          {t("agent-builder.variables.unknown", {
            count: unknownTokens.length,
            names: unknownTokens.join(", "),
          })}
        </p>
      )}
    </div>
  );
});

/**
 * Split the value into plain text and ${...} tokens, wrapping each token in a
 * highlight box. Valid variables (defined in the start block) get a blue
 * highlight; unrecognized ones get a red, dashed highlight so the user knows
 * they won't resolve at runtime.
 * @param {string} value
 * @param {Set<string>} validNames
 * @returns {React.ReactNode[]}
 */
function renderHighlightedParts(value, validNames) {
  if (!value) return null;

  const parts = value.split(new RegExp(`(${VARIABLE_PATTERN})`, "g"));
  const isVariable = new RegExp(`^${VARIABLE_PATTERN}$`);
  return parts.map((part, index) => {
    if (!isVariable.test(part))
      return <React.Fragment key={index}>{part}</React.Fragment>;

    const highlight = validNames.has(rootName(part.slice(2, -1)))
      ? VARIABLE_HIGHLIGHT_CLASS
      : VARIABLE_INVALID_CLASS;

    return (
      <span key={index} className={highlight}>
        {part}
      </span>
    );
  });
}

export default VariableInput;
