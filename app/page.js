import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { ShopItemCard } from "./components/shopItemCard";

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
      <div className="Banner_Section">
        <h1>Connecting all of us<span><br /></span> with the world</h1><br />
        <p>We create systematic solutions to solve problems.</p>
      </div>

      <div className="Business_Section">
        <h1>Business Management Tools</h1>
        <div className="Business_Sect_Tools">
          <div className="Comp_Reg">
            <h1>Company Registration</h1>
            <Link href="/services/business-management/registration">Read</Link>
          </div>
          <div className="Marketing">
            <h1>Marketing</h1>
            <Link href="/services/business-management/marketing">Read</Link>
          </div>
          <div className="Branding">
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
        <div>{shopItems.map((item) => (<ShopItemCard key={item.id} image={item.image} name={item.name} price={item.price} />))}</div>
      </div>
    </main>
  );
}
