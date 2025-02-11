"use client";

import Form from "next/form";
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
        <h2>Contact Details</h2><br />
        <div>
          <p>Email</p>
          <p>info@heintzenterprize.co.za</p>

          <p>Cellphone</p>
          <p></p>
        </div>
      </div>

      <div className="ContactUs_Form_Section">
        <h2>Talk to us</h2><br />
        <div>
          <Form className="ContactUs_Form">
            <input type="text" name="fullname" value={fullname} onChange={() => {setFullname()}} placeholder="Full Name" required />
            <input type="email" name="email" value={email} onChange={() => {setEmail()}} placeholder="Email" required />
            <input type="telephone" name="cellphone" value={cellphone} onChange={() => {setCellphone()}} placeholder="Cellphone" required />
            <input type="text" name="subject" value={subject} onChange={() => {setSubject()}} placeholder="Subject" required />
            <input type="text" name="message" value={message} onChange={() => {setMessage()}} placeholder="message" required />
          </Form>
        </div>
      </div>  
    </main>
  );
}