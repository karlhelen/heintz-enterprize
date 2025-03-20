"use client";

import { useState } from "react";

export default function Login() {

  const [ user, setUser ] = useState({
    email: "",
    password: ""
  });

  return (
    <main>
      <h1>Login</h1>
      <div>
        <form>
          <input type="email" name="email" value={user.email} onChange={(e) => setUser.email(e.target.value)} placeholder="Email" />
          <input type="password" name="password" value={user.password} onChange={(e) => setUser.password(e.target.value)} placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </main>
  )
}
