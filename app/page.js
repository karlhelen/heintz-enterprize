import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { ShopItemCard } from "./components/shopItemCard";
import ReactPlayer from "react-player";

export default function Home() {

  const shopItems = [
    {
      "id": 1,
      "image": "/Unisex-blockchain-tshirt.png",
      "name": "Unisex Blockchain T-Shirt",
      "price": "R179.99"
    },
    {
      "id": 2,
      "image": "/Mens-metaverse-tshirt.png",
      "name": "Mens Metaverse T-Shirt",
      "price": "R179.99"
    },
    {
      "id": 3,
      "image": "/Unisex-tether-tshirt.png",
      "name": "Tether T-Shirt",
      "price": "R179.99"
    },
    {
      "id": 4,
      "image": "/Unisex-phalaborwa-tshirt.png",
      "name": "Phalaborwa T-Shirt",
      "price": "R179.99"      
    },
    {
      "id": 5,
      "image": "/Womens-metaverse-tshirt.png",
      "name": "Womens Metaverse T-Shirt",
      "price": "R179.99"
    }
  ];

  return (
    <main className="Home">
      <div className="Banner1_Section">
        <h1>Connecting all of us<span><br /></span> with the world</h1><br />
        <p>We create systematic solutions to solve problems.</p>
      </div>

      <div className="Business_Section">
        <h1>Business Management Tools</h1>
        <div className="Business_Sect_Tools">
          <div className="Comp_Reg">
            <h4>Company Registration</h4><br />
            <p>[Insert text here]</p>
            <Link href="/services/business-management/registration">Read</Link>
          </div>
          <div className="Marketing">
            <h4>Marketing</h4><br />
            <p>[Insert text here]</p>
            <Link href="/services/business-management/marketing">Read</Link>
          </div>
          <div className="Branding">
            <h4>Branding</h4><br />
            <p>[Insert text here]</p>
            <Link href="/services/business-management/branding">Read</Link>
          </div>
        </div>
      </div>

      <div className="Sports_Section">
        <h1>Sports Management</h1>
        <div>
          <div>
            <h4>Organising</h4><br />
            <p>[Insert text here]</p>
          </div>
          <div>
            <h4>Activity Management</h4><br />
            <p>[Insert text here]</p>
          </div>
          <div>
            <h4>Training</h4><br />
            <p>[Insert text here]</p>
          </div>
        </div>
      </div>

      <div className="Artist_Section">
        <h1>Artist Management</h1>
        <div>
          <div>
            <h4>Record Deal</h4><br />
            <p>[Insert text here]</p>
          </div>
          <div>
            <h4>PR Campaigns</h4><br />
            <p>[Insert text here]</p>
          </div>
        </div>
        <div style={{ width: "100%" }}><iframe src="https://www.youtube.com/embed/wBq5E-VtOJ4?si=QYn4PmpT0sqwGFW9" allowFullScreen /></div>
      </div>

      <div className="Shop_Section">
        <h1 style={{ textAlign: "center" }}>Shop</h1><br />
        <div className="Shop_Sect_Items">{shopItems.map((item) => (<ShopItemCard key={item.id} image={item.image} name={item.name} price={item.price} />))}</div>
      </div>
    </main>
  );
}
