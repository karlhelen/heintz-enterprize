import Image from "next/image";
import styles from "./page.module.css";
import ShopItemCard from "./components/shopItem";

export default function Home() {

  const shopItems = [
    {
      "image": "./cap.png",
      "name": "MoBNB Cap",
      "price": "R50"
    }
  ];

  return (
    <main>
      <div className="Header_Section">
        <h1>Providing exceptional value for your needs</h1><br />

      </div>

      <div className="Shop_Section">
        <h1>Shop</h1><br />
        <div>
          {shopItems.map((item) => {<ShopItemCard image={item.image} name={item.name} price={item.price} />})}
        </div>
      </div>

    </main>
  );
}
