import Image from 'next/image';

export default function ShopItemCard({ image, name, price }) {

  return (
    <div className="ShopItem_Card">
      <div><Image src={image} alt="Shop Item Image" width={50} height={65} /></div>
      <h5>{name}</h5>
      <p>{price}</p>
    </div>
  );
}