import Image from 'next/image';

export const ShopItemCard = ({ image, name, price }) => {

  return (
    <div className="ShopItemCard">
      <div style={{ textAlign: "center" }}><Image src={image} alt="Item Image" width={100} height={100} /></div>
      <h6>{name}</h6>
      <p>{price}</p>
    </div>
  );
}