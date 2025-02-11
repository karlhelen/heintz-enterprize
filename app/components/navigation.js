import Link from 'next/link';

export default function Navigation() {

  return (
    <div className="Navigation">
      <Link href="/">Home</Link>
      <Link href="about-us">About Us</Link>
      <Link href="/products">Products</Link>
      <Link href="/news">News</Link>
      <Link href="/contact-us">Contact Us</Link>
    </div>
  );
}
