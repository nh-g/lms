// @ts-nocheck
// NPM packages
import { useState } from "react";
import { useHistory } from "react-router-dom";

import Placeholder from "assets/brand/holder.png";
import Delete from "components/shared/Delete";
import ButtonEdit from "components/shared/ButtonEdit";
import { updateDocument } from "scripts/fireStore";
import InputEditable from "./InputEditable";
import fields from "assets/fields/fields-edit.json";

interface iProps {
  item: object;
}
export default function Card({ item }: iProps) {
  
  const Image = item.imageURL === "" ? Placeholder : item.imageURL;

  const history = useHistory();

  const [form, setForm] = useState(item);

  async function onSubmit(event) {
    if (window.confirm("Are you sure to update content?")) {
      event.preventDefault();
      await updateDocument("courses", item.id, { ...item, ...form });
      alert("Course successfully updated");
      history.push("/");
    }
  }

  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }

  //Components
  const TitleDescription = fields.map((inputField) => (
    <InputEditable
      key={inputField.key}
      options={inputField}
      state={form[inputField.key]}
      onChange={onChange}
    />
  ));

  return (
    <tr>
      {TitleDescription}
      <td>
        <img
          src={Image}
          alt="user generated content"
          className="custom-file-chooser"
        />
      </td>
      <td className="admin-options">
        <Delete path="courses" dataSelected={item} />
      </td>
      <td className="admin-options">
        <ButtonEdit handleClick={onSubmit}/>
      </td>
    </tr>
  );
}
