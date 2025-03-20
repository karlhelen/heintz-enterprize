"use client";

import redirect from "next/navigation";
import { useState } from "react";
import { login } from "../../../lib/actions.js";

export default function Login() {

  const [ user, setUser ] = useState({
    email: "",
    password: ""
  });

  return (
    <main>
      <h1>Login</h1>
      <div>
        <form action={async (formData) => {
          "use server";
          await login(formData);
          redirect('/dashboard');
        }}>
          <input type="email" name="email" value={user.email} onChange={(e) => setUser.email(e.target.value)} placeholder="Email" />
          <input type="password" name="password" value={user.password} onChange={(e) => setUser.password(e.target.value)} placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </main>
  )
}
