import Link from 'next/link';

export default function Navigation() {

  return (
    <div className="Navigation">
      <div><Link href="/"></Link></div>
      <div><Link href="/about-us">About Us</Link></div>
      <div><Link href="/services">Services</Link></div>
      <div><Link href="/products">Products</Link></div>
      <div><Link href="/news">News</Link></div>
      <div><Link href="/contact-us">Contact Us</Link></div>
    </div>
  );
}
