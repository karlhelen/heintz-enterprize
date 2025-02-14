import Link from "next/link";

export default function Footer() {

  return (
    <div className="Footer">
      <div><h3>Heintz Enterprize</h3></div>
      <div className="Footer_Sections">
        <div className="Footer_Details">
          <div><Link href="email:info@heintzenterprize"><p>info@heintzenterprize.co.za</p></Link></div>
          <div><Link href="tel:+27724644598"><p>072 464 4598</p></Link></div>
        </div>
        <div><p>Copyright 2025 Heintz Enterprize (Pty) Ltd</p></div>
      </div>
    </div>
  );
}