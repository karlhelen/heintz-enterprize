export default async funtion Signup() {

  return (
    <main>
      <h1>Sign Up</h1>
      <div>
        <form action={async (formData) => {
          "use server";
          await signup(formData);
          redirect('/dashboard);
        }}>
          <input type="text" name="firstName" placeholder="First Name" onChange={} required />
          <input type="text" name="lastName" placeholder="Surname" onChange={} required />
          <input type="email" name="email" placeholder="Email" onChange={} required />
          <input type="telephone" name="cellphone" placeholder="Cellphone" onChange={} required />
          <input type="password" name="password" placeholder="Password" onChange={} required />
          <input type="password" name="confirmMethod" placeholder="Confirm Password" onChange={} />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </main>
  )
}
