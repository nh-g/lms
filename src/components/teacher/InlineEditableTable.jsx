// NPM packages
import { useState } from "react";
import { useHistory } from "react-router-dom";

// Project files
import fields from 'assets/fields/fields-create.json'
import { createDoc } from "scripts/fireStore";
import InputEditable from "./InputEditable";

export default function Create() {
  const history = useHistory();

  const [form, setForm] = useState({
    title: "",
    description: "",
    imageURL: "",
  });

  async function onSubmit(e) {
    e.preventDefault();
    const newCourse = { ...form };
    await createDoc("courses", newCourse);
    alert(`${form.title} course created`);
    history.push("/");
  }

  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }

  //Components
  const Fields = fields.map((item) => (
    <InputEditable
      key={item.key}
      options={item}
      state={form[item.key]}
      onChange={onChange}
    />
  ));

  return (
    <table style={{ width: "100%" }}>
      <tr>
        {Fields}
        <td>
          <button className="btn btn-main btn-80" onClick={onSubmit}>
            <h4>Add</h4>
          </button>
        </td>
      </tr>
    </table>
  );
}
