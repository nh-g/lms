//@ts-nocheck
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
// Project files
import fields from "assets/fields/fields-recover.json";
import InputField from "./shared/InputField";

export default function Recover() {
  //Local states
  const [form, setForm] = useState({ email: "" });
  const history = useHistory();

  // Methods
  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }

  async function onSubmit(e) {
    e.preventDefault();
    setMessage("");
    //const account = await createAccount(form.email, form.password);
    //account.isCreated ? onSuccess(account.payload) : onFailure(account.payload);
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
    <main className="page-login recover">
      <h2>Password Reset</h2>
      <br />
      <p>
        Enter the <span>email address </span> that you used to register. We'll
        send you an email with a link to reset your password
      </p>
      <br />
      <form onSubmit={onSubmit}>
        {Fields}
        <button className="btn btn-main">
          <h4>send</h4>
        </button>
      </form>
    </main>
  );
}
