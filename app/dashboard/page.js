import { getSession } from "../../../lib/actions.js";

export defualt async function() {

  const session = await getSession();

  return (
    <main>
      <h1>Hello,</h1>
    </main>
  )
}
