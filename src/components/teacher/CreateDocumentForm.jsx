// NPM packages
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";

// Project files
import fields from "assets/fields/fields-addDocument.json";
import { updateDocument } from "scripts/fireStore";
import InputEditable from "./InputEditable";

export default function CreateDocumentForm({ item }) {
  const history = useHistory();

  const [form, setForm] = useState({
    title: "",
    linkURL: "",
  });

  async function onSubmit(e) {
    e.preventDefault();
    const newCourse = { ...item };
    const clonedLinks = [...newCourse.links];
    clonedLinks.push(form);
    newCourse.links = clonedLinks;

    await updateDocument("courses", item.id, { ...item, ...newCourse });
    alert(`${form.title} document created`);
    history.push("/");
  }

  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }

  const Fields = fields.map((item) => (
    <InputEditable
      key={item.key}
      options={item}
      state={form[item.key]}
      onChange={onChange}
    />
  ));


  return (
    <table className="create">
      <tr>
        {Fields}
        <td className="admin-options">
          <button onClick={onSubmit}>
            <h4>
              <AiFillPlusCircle />
              Create
            </h4>
          </button>
        </td>
      </tr>
    </table>
  );
}
