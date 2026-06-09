import Link from "next/link";

const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Lưu trú", href: "/stay" },
  { label: "Trải nghiệm", href: "/experiences" },
  { label: "Thư viện", href: "/gallery" },
  { label: "Liên hệ", href: "/contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-white font-bold text-2xl tracking-wide"
        >
          Bâng Glamping
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-white">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-amber-200 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button className="bg-white text-black px-5 py-2 rounded-full font-medium hover:scale-105 transition">
          Đặt Phòng
        </button>
      </div>
    </header>
  );
}