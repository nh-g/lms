// @ts-nocheck
// NPM packages
import { useState } from "react";
import { useHistory } from "react-router-dom";

// Project files

import Placeholder from "assets/brand/holder.png";
import Delete from "components/shared/Delete";
import ButtonEdit from "components/shared/ButtonEdit";
import { updateDocument } from "scripts/fireStore";
import InputEditable from "./InputEditable";
import fields from "assets/fields/fields-edit.json";
import ImageUploader from "components/shared/ImageUploader";

interface iProps {
  item: object;
}
export default function Card({ item }: iProps) {
  
  const Image = item.imageURL === "" ? Placeholder : item.imageURL;

  const history = useHistory();

  const [form, setForm] = useState(item);
  const [courseImageURL, setCourseImageURL] = useState(item.imageURL);


  async function onSubmit(event) {
    if (window.confirm("Are you sure to update content?")) {
      event.preventDefault();
      const updatedCourse = {...form}
      updatedCourse.imageURL = courseImageURL;
      await updateDocument("courses", item.id, { ...item, ...updatedCourse });
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
      <td className="custom-file-chooser">
        <ImageUploader
          imageURL={courseImageURL}
          setImageURL={setCourseImageURL}
          title={form.title}
        />
      </td>
      <td className="admin-options">
        <Delete path="courses" dataSelected={item} />
      </td>
      <td className="admin-options">
        <ButtonEdit handleClick={onSubmit} />
      </td>
    </tr>
  );
}
