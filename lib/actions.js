import { redirect } from "next/navigation";
import { cookies } from "next/header";
import { SignJWT, jwtVerify } from "jose";
import { getAdminUser, getCustomerUser, postCustomerUser } from "firebase.js";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function login(formData) {

  try {
    const user = {
      email: formData.get("email"),
      password: formData.get("password")
    }

    const expires =new Date(Date.now() + 10 * 1000);
    const session = await encrypt({ user });

    cookies().set('session', session, {
      expires,
      httpOnly: true
    });
  } catch(error) {
    console.error(alert("Failed to login user."));
  }

  redirect('/dashboard');
}

export async function signup(formData) {

  try {
    const user = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      cellphone: formData.get("cellphone"),
      password: formData.get("password")
    }

    const expires =new Date(Date.now() + 10 * 1000);
    const session = await encrypt({ user });

    cookies().set('session', session, {
      expires,
      httpOnly: true
    });
  } catch(error) {
    console.error(alert("Failed to create user."));
  }

  redirect('/dashboard');
}

export async function logout() {

  cookies().clear();

  redirec('/logout');
}

export async function getSession() {

  const session = cookies().get('session')?.value;

  if (!session) return null;

  return await decrypt(session);
}

export async function encrypt(payload) {

  return await new signJWT()
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("Expires 10 sec from now.")
    .sign(key);
}

export async function decrypt(input) {

  const { payload } = await jwtVerify(input, key, { alg: "HS256" });
  return payload;
}


    
  
