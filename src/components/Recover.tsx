//@ts-nocheck
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
//Local imports
import fields from "assets/fields-recover.json";
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
      <form onSubmit={onSubmit}>
        {Fields}
        <button className="btn btn-main">
          <h4>recover password</h4>
        </button>
      </form>
    </main>
  );
}
