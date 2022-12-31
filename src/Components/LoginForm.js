import React, { useState } from "react";
import './LoginForm.css';

function LoginForm({ error, login }) {
  const [details, setDetails] = useState({email: "", password: "" });
  const [showPass, setShowPass] = useState(false);

  function submitHandler(e) {
    e.preventDefault();
    login(details);
  }
  function showHandler() {
    setShowPass(!showPass);
  }

  return (
    <form onSubmit={submitHandler} className="form-login">
      <div className="form-inner">
        <h2>Login Form</h2>
        {error !== "" ? (
          <div className="popUp">{error}</div>
        ) : (
          <div className="popUp hide">{error}</div>
        )}

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="yourname@email.com"
            name="email"
            id="email"
            value={details.email}
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          {showPass ? (
            <>
              <input
                type="text"
                name="password"
                id="password"
                value={details.password}
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                required
              />

            </>
          ) : (
            <>
              <input
                type="password"
                placeholder="********"
                name="password"
                id="password"
                value={details.password}
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                required
              />
              
            </>
          )}
        </div>
        <input type="submit" value="SUBMIT" />
      </div>
    </form>
  );
}

export default LoginForm;