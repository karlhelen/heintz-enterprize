"use client";

import Form from "next/form";
import Link from "next/link";
import { useState } from "react";

export default function ContactUs() {
  
  const { fullname, setFullname } = useState("");
  const { email, setEmail } = useState("");
  const { cellphone, setCellphone } = useState("");
  const { subject, setSubject } = useState("");
  const { message, setMessage } = useState("");

  return (
    <main className="ContactUs">
      <div>
        <h1>Contact Us</h1>
      </div>

      <div className="ContactUs_Details_Section">
        <h2>Basic Details</h2><br />
        <div>
          <p>Email</p>
          <Link href="email:info@heintzenterprize"><p>info@heintzenterprize.co.za</p></Link>

          <p>Cellphone</p>
          <Link href="tel:+27724644598"><p>072 464 4598</p></Link>
        </div>
      </div>

      <div className="ContactUs_Form_Section">
        <h2>Talk to us</h2><br />
        <div>
          <Form className="ContactUs_Form">
            <input type="text" name="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder="FullName" required />
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="telephone" name="cellphone" value={cellphone} onChange={(e) => setCellphone(e.target.value)} placeholder="Cellphone" required />
            <input type="text" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" required />
            <input type="text" name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="message" required />
            <button type="submit">Send</button>
          </Form>
        </div>
      </div>  
    </main>
  );
}