//@ts-nocheck
// NPM Packages
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

// Project files
import fields from "assets/fields/fields-signup.json";
import InputField from "../shared/InputField";
import { createAccount } from "scripts/auth";
import { useAuth } from "state/AuthProvider";
import { createDocumentWithId } from "scripts/fireStore";
import logo from "../../assets/brand/logo.png";
import { useUser } from "state/UserProvider";

export default function Signup() {
  //Local states
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const history = useHistory();
  const { setLoggedIn } = useAuth();
  const {setUser} = useUser(); 

  // Methods
  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }

  async function onSubmit(e) {
    e.preventDefault();
    setMessage("");
    const account = await createAccount(form.email, form.password);
    account.isCreated ? onSuccess(account.payload) : onFailure(account.payload);
  }

  async function onSuccess(uid) {
    const newUser = { username: form.username, role: "student" };
    await createDocumentWithId("users", uid, newUser);
    setLoggedIn(true);
    setUser(newUser);
    history.push("/");
  }

  function onFailure(code) {
    setMessage(code);
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
    <main className="page-login signup ">
      <form onSubmit={onSubmit}>
        <img src={logo} className="logo" alt="circle with text" />
        <h3>Start becoming a empowering parent today</h3>
        {Fields}
        <p>{message}</p>

        <button className="btn btn-main">
          <h4>sign up</h4>
        </button>
      </form>
      <p className="optional-action">
        <Link to="/login">
          <strong>
            Do you have an account? <span>Log in</span>
          </strong>
        </Link>
      </p>
    </main>
  );
}
