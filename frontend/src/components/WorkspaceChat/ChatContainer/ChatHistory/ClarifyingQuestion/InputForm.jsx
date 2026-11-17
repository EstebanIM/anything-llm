const SHARED_CLASS =
  "w-full border border-solid border-zinc-700 light:border-slate-500 bg-zinc-800 light:bg-white text-white light:text-slate-900 placeholder:text-zinc-400 light:placeholder:text-slate-600 text-base md:text-sm leading-5 rounded-lg px-[14px] py-[10px]";

function TextareaInput({ label, value, placeholder, onChange }) {
  return (
    <textarea
      autoFocus
      aria-label={label}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className={`${SHARED_CLASS} min-h-[128px] resize-y`}
    />
  );
}

function TextInput({ label, type, value, placeholder, onChange, onSubmit }) {
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit?.();
    }
  }

  return (
    <input
      autoFocus
      aria-label={label}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={handleKeyDown}
      className={SHARED_CLASS}
    />
  );
}

/**
 * Free-form text/url/number/date/email/textarea input. The server's
 * normalizeQuestion has already constrained `inputType` to a known value
 * before sending, so we just trust it here and fall back to "text" if missing.
 */
export default function InputForm({ question, draft, onChange, onSubmit }) {
  const inputType = question.inputType || "text";
  const value = draft.value || "";
  const placeholder = question.placeholder || "";

  if (inputType === "textarea") {
    return (
      <TextareaInput
        label={question.question}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  }

  return (
    <TextInput
      label={question.question}
      type={inputType}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}
