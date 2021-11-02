//@ts-nocheck

// NPM packages
import { useState } from "react";

// Project files
import fields from "assets/fields/fields-recover.json";
import InputField from "./shared/InputField";
import { reset } from "scripts/auth";

export default function ResetPassword() {
  //Local states
  const [form, setForm] = useState({ email: "" });
  const [message, setMessage] = useState("");

  // Methods
  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }

  async function onSubmit(event) {
    event.preventDefault();
    setMessage("");
    const account = await reset(form.email);
    account.isReset ? onSuccess(account.payload) : onFailure(account.payload);
  }

  async function onSuccess(message) {
    setMessage(message);
  }

  function onFailure(errorMessage) {
    setMessage(errorMessage);
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
    <main className="page-login reset">
      <h2>Password Reset</h2>
      <br />
      <p>
        Enter the <span>email address </span> that you used to register. We'll
        send you an email with a link to reset your password
      </p>
      <br />
      <form onSubmit={onSubmit}>
        {Fields}
        <p>{message}</p>
        <button className="btn btn-main">
          <h4>send</h4>
        </button>
      </form>
    </main>
  );
}
