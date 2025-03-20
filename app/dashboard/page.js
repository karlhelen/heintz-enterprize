import { getSession } from "../../../lib/actions.js";

export default async function Dashboard() {

  const session = await getSession();

  return (
    <main>
      <h1>Hello,</h1>
    </main>
  )
}
