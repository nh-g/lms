//@ts-nocheck
import { useRef } from "react";
export default function InputField({ onChange, options, state }) {
  const { key, label, placeholder, type, mode } = options;

  // Properties
  const inputReference = useRef(null);
  return (
    <label className={key}>
      {label}
      <input
        ref={inputReference}
        value={state}
        type={type}
        placeholder={mode === "edit" ? state : placeholder}
        required
        onChange={() => onChange(key, inputReference.current.value)}
      ></input>
    </label>
  );
}
