//@ts-nocheck
// NPM packages
import { useState } from "react";

// Project files
import ButtonEdit from "components/shared/ButtonEdit";
import { updateDocument } from "scripts/fireStore";
import InputEditable from "../InputEditable";
import fields from "assets/fields/fields-edit-document.json";

export default function CardResource({ item }) {
  const [form, setForm] = useState(item);

  async function onSubmit(event) {
    if (window.confirm("Are you sure to update content?")) {
      event.preventDefault();
      const updatedLink = { ...form };

      await updateDocument("courses", item.id, {
        ...item,
        ...updatedLink,
      });
      alert("Document successfully updated");
      window.location.reload(false);
    }
  }

  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }

  // async function removeItem(id) {
  //   const afterRemoveArray = [...item].filter((link) => link.id !== id);

  //   console.log("afterRemoveArray", afterRemoveArray);
  //   await updateDocument("courses", item.id, {
  //     ...item,
  //     ...afterRemoveArray,
  //   });
  //   alert("Document successfully deleted");
  //   window.location.reload(false);

  // }

  const TitleDescription = fields.map((inputField) => (
    <InputEditable
      key={inputField.key}
      options={inputField}
      state={form[inputField.key]}
      onChange={onChange}
    />
  ));

  return (
    <tbody>
      <tr>
        <td>{item.id}</td>
        {TitleDescription}
        <td className="admin-options">
          {/* <button onClick={removeItem(id)}>Delete</button> */}
          {/* <Delete path="courses" dataSelected={item} /> */}
        </td>
        <td className="admin-options">
          <ButtonEdit handleClick={onSubmit} />
        </td>
      </tr>
    </tbody>
  );
}
