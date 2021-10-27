//NPM Packages
import { useState } from "react";
import { useHistory } from "react-router-dom";

//Local imports
import fields from "assets/fields-edit.json";
import InputField from "./shared/InputField";
import { createDoc } from "scripts/fireStore";

export default function CreateForm({ onClose, data }) {
  //Local states
  const [form, setForm] = useState({
    title: "",
    description: "",
    link: "",
    imageURL: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  console.log(data);

  // Methods
  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }
  async function onSubmit(e) {
    e.preventDefault();
    setErrorMessage("");
    const newCourse = { ...form };
    //await createDoc("courses", newCourse);
    alert("Course updated");
    onClose();
    history.push("/");
  }

  //Components
  const Fields = fields.map((item) => (
    <InputField
      key={item.key}
      options={item}
      state={data[item.key]}
      onChange={onChange}
    />
  ));

  return (
    <form onSubmit={onSubmit}>
      {Fields}
      <p>{errorMessage}</p>
      <button className="btn btn-main btn-140">
        <h4>Submit</h4>
      </button>
    </form>
  );
}
