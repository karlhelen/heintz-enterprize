import Link from 'next/link';

export default function Navigation() {

  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
      <Link href="/news">News</Link>
      <Link href="/contact-us">Contact Us</Link>
    </div>
  );
}
