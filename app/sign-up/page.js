"use client";

import redirect from "next/navigation";
import { useState } from "react";
import { signup } from "../../../lib/actions.js";

export default function Signup() {

  const [ user, setUser ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cellphone: "",
    password: ""
  })

  return (
    <main>
      <h1>Sign Up</h1>
      <div>
        <form action={signup}>
          <input type="text" name="firstName" placeholder="First Name" value={user.firstName} onChange={(e) => setUser.firstName(e.target.value)} required />
          <input type="text" name="lastName" placeholder="Surname" value={user.lastName} onChange={(e) => setUser.lastName(e.target.value)} required />
          <input type="email" name="email" placeholder="Email" value={user.email} onChange={(e) => setUser.email(e.target.value)} required />
          <input type="telephone" name="cellphone" placeholder="Cellphone" value={user.cellphone} onChange={(e) => setUser.cellphone(e.target.value)} required />
          <input type="password" name="password" placeholder="Password" value={user.password} onChange={(e) => setUser.password(e.target.value)} required />
          <input type="password" name="confirmMethod" placeholder="Confirm Password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </main>
  )
}
