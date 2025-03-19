import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="Home">
      <div className="Banner_Section">
        <h1>Connecting all of us with the world</h1><br />
        <p>The leading product and service provider for the past 7 years.</p>
      </div>

      <div className="Pride_Section">
        <h5>We pride ourselves in creating the best working environment.</h5><br />
        <p>We create systematic solutions to solve current problems.</p>
      </div>

      <div className="Business_Section">
        <h1>Business Management Tools</h1>
        <div>
          <div>
            <h1>Company Registration</h1>
            <Link href="/services/business-management/registration">Read</Link>
          </div>
          <div>
            <h1>Marketing</h1>
            <Link href="/services/business-management/marketing">Read</Link>
          </div>
          <div>
            <h1>Branding</h1>
            <Link href="/services/business-management/branding">Read</Link>
          </div>
        </div>
      </div>

      <div className="Sports_Section">
        <h1>Sports Management</h1>
        <div>
          <div>
            <h1>Organising</h1>
          </div>
          <div>
            <h1>Activity Management</h1>
          </div>
          <div>
            <h1>Training</h1>
          </div>
        </div>
      </div>

      <div>
        <h1>Music Project Management</h1>
        <div>
          <div><h1>Record Deal</h1></div>
          <div><h1>PR Campaigns</h1></div>
        </div>
      </div>

      <div className="Shop_Section">
        <h1>Shop</h1><br />
        <div></div>
      </div>
    </main>
  );
}
