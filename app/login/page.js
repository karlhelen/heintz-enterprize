import redirect from "next/navigation";
import { login } from "../../../lib/actions.js";

export default function Login() {

  return (
    <main>
      <h1>Login</h1>
      <div>
        <form action={async (formData) => {
          "use server";
          await login(formData);
          redirect('/dashboard');
        }}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </main>
  )
}
