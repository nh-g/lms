//@ts-nocheck
// NPM Packages
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

// Project files
import fields from "assets/fields/fields-login.json";
import InputField from "./shared/InputField";
import { signIn } from "scripts/auth";
import { getDocument } from "scripts/fireStore";
import { useAuth } from "state/AuthProvider";
import { useUser } from "state/UserProvider";
import logo from '../assets/brand/logo.png';

export default function Login() {
  // Global state
  const { setUser } = useUser();
  const { setLoggedIn } = useAuth();
  const history = useHistory();

  //Local states
  const [form, setForm] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  // Methods
  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }

  async function onSubmit(e) {
    e.preventDefault();
    setErrorMessage("");
    const account = await signIn(form.email, form.password);
    account.isLogged ? onSuccess(account.payload) : onFailure(account.payload);
  }

  async function onSuccess(uid) {
    const document = await getDocument("users", uid);
    setUser(document);
    setLoggedIn(true);

    history.push("/");
  }

  function onFailure(code) {
    setErrorMessage(code);
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
    <main className="page-login">
      <form onSubmit={onSubmit}>
        <img src={logo} className="logo" alt="circle with text" />

        <h3>Welcome back. Please login to your account</h3>

        {Fields}
        <p>{errorMessage}</p>
        <button className="btn btn-main">
          <h4>Log in</h4>
        </button>
      </form>
      
      <p className="optional-action">
        <Link to="/password-reset">
          <strong> Forgot your password? </strong>{" "}
        </Link>
      </p>
      <p className="optional-action">
        <Link to="/signup">
          <strong> Create a new account</strong>
        </Link>
      </p>
    </main>
  );
}
