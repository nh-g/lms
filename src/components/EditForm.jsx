// NPM Packages
import { useState } from "react";
import { useHistory } from "react-router-dom";

// Project files
import fields from "assets/fields-edit.json";
import InputField from "./shared/InputField";
import { createDoc } from "scripts/fireStore";

export default function EditForm({ onClose, data }) {
  //Local states
  const [form, setForm] = useState(data);
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  console.log(form);
  // Methods
  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }
  async function onSubmit(e) {
    if (window.confirm("Do you confirm the changes ?")) {
      e.preventDefault();
      setErrorMessage("");
      await updateDocument("courses", data.id, { ...data, ...form });
      alert("Course successfully updated");
      onClose();
      history.push("/");
    }
  }

  //Components
  const Fields = fields.map((item) => (
    <InputField
      key={item.key}
      options={item}
      state={form[item.key]}
      onChange={onChange}
    />
  ));

  return (
    <form onSubmit={onSubmit}>
      {Fields}
      <InputLinks state={form} setForm={setForm} />
      <InputFiles state={form} setForm={setForm} />
      <p>{errorMessage}</p>
      <button className="btn btn-main btn-140">
        <h4>Submit</h4>
      </button>
    </form>
  );
}
