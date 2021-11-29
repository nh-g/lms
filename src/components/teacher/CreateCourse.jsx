// NPM packages
import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";

// Project files
import fields from "assets/fields/fields-create.json";
import { createDoc } from "scripts/fireStore";
import InputEditable from "./InputEditable";
import ImageUploader from "components/shared/ImageUploader";
import { useCourses } from "state/CoursesProvider";

export default function Create() {
  const { dispatch } = useCourses();

  const [imageURL, setImageURL] = useState("");

  const [form, setForm] = useState({
    title: "",
    description: "",
    imageURL: "",
    links: [{}],
  });

  async function onSubmit(e) {
    e.preventDefault();
    let courseInfo = { ...form };
    courseInfo.imageURL = imageURL;
    const id = await createDoc("courses", courseInfo);
    const newCourse = { ...courseInfo, id: id };

    dispatch({ type: "CREATE_COURSE", payload: newCourse });
    alert(`${form.title} course created`);
    setForm("");
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
    <table id="admin-table">
      <tbody>
        <tr>
          {Fields}
          <td className="custom-file-chooser">
            <ImageUploader
              imageURL={imageURL}
              setImageURL={setImageURL}
              title={form.title}
            />
          </td>
          <td className="admin-options">
            <button onClick={onSubmit}>
              <h4>
                <AiFillPlusCircle />
                Create
              </h4>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
