import { useRef } from "react";
import Editable from "./Editable";
export default function InputEditable({ onChange, options, state }) {
  // const inputRef = useRef();
  const textareaRef = useRef();
  const { key, placeholder, type, mode, rows } = options;

  return (
    <td>
      <Editable
        text={state}
        placeholder={mode === "edit" ? state : placeholder}
        childRef={textareaRef}
        type={type}
      >
        <textarea
          ref={textareaRef}
          name={key}
          className={key}
          placeholder={mode === "edit" ? state : placeholder}
          rows={rows}
          value={state}
          onChange={() => onChange(key, textareaRef.current.value)}
        />
      </Editable>
    </td>
  );
}
