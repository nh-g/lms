//@ts-nocheck

import Editable from "./Editable";

export default function Input(){
    return (
      <td>
        <Editable
          text={title}
          placeholder="Write a course name"
          childRef={inputRef}
          type="textarea"
        >
          <textarea
            ref={inputRef}
            // type="text"
            // name="task"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
            placeholder="Write a course name"
            value={title}
            onChange={(e) => setTask(e.target.value)}
          />
        </Editable>
      </td>
    );
}
