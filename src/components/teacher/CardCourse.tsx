// @ts-nocheck
// NPM packages
import { useState } from "react";
import {Link } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";

// Project files
import Delete from "components/shared/Delete";
import ButtonEdit from "components/shared/ButtonEdit";
import { updateDocument } from "scripts/fireStore";
import InputEditable from "./InputEditable";
import fields from "assets/fields/fields-edit.json";
import ImageUploader from "components/shared/ImageUploader";
import { useCourses } from "state/CoursesProvider";

interface iProps {
  item: object;
}
export default function Card({ item }: iProps) {
  const { dispatch } = useCourses();

  const [form, setForm] = useState(item);
  const [courseImageURL, setCourseImageURL] = useState(item.imageURL);

  async function onSubmit(event) {
    if (window.confirm("Are you sure to update content?")) {
      event.preventDefault();
      const updatedCourse = { ...form };
      updatedCourse.imageURL = courseImageURL;
      await updateDocument("courses", item.id, { ...item, ...updatedCourse });
      alert("Course successfully updated");
      dispatch({ type: "UPDATE_COURSE", payload: updatedCourse });
    }
  }

  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }

  const TitleDescription = fields.map((inputField) => (
    <InputEditable
      key={inputField.key}
      options={inputField}
      state={form[inputField.key]}
      onChange={onChange}
    />
  ));

  return (
    // <tbody>
    //   <tr>
    <>
      {/* <td>{item.stt}</td> */}
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
      <td className="admin-options">
        <Link to={"/course-edit/" + item.id}>
          <button>
            <h4>
              <AiFillPlusCircle />
              Add
            </h4>
          </button>
        </Link>
      </td>
      {/* </tr>
    </tbody> */}
    </>
  );
}
