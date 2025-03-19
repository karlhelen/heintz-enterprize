import Image from 'next/image';

export const ShopItemCard = ({ image, name, price }) => {

  return (
    <div className="ShopItemCard">
      <div><Image src={image} alt="Item Image" width="50" height="60" /></div>
      <h6>{name}</h6>
      <p>{price}</p>
    </div>
  );
}