//@ts-nocheck
//NPM Packages
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

//Local imports
import fields from "assets/fields-login.json";
import InputField from "./shared/InputField";
import { signIn } from "scripts/auth";
import { getDocument } from "scripts/fireStore";
import { useAuth } from "state/AuthProvider";

export default function Login() {
  // Global states
  const { setLoggedIn, setUser } = useAuth();
  const history = useHistory();

  //Local states
  const [form, setForm] = useState({ email: "", password: "" });
  const [remember, setRemember] = useState(false);
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
    if (remember) localStorage.setItem("uid", uid);
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
        {Fields}
        <p>{errorMessage}</p>
        <label className="remember">
          <input
            type="checkbox"
            checked={remember}
            onChange={() => setRemember(!remember)}
          />
          <h4>Remember me</h4>
        </label>
        <button className="btn btn-main">
          <h4>Login</h4>
        </button>
      </form>
      <p className="optional-action">
        Not registered ?
        <Link to="/signup">
          <strong> Create an account</strong>
        </Link>
      </p>
    </main>
  );
}
