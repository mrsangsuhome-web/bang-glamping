import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bang-glamping.vercel.app"),

  title: {
    default: "Bâng Glamping | Homestay & Glamping Nam Đông",
    template: "%s | Bâng Glamping",
  },

  description:
    "Bâng Glamping là không gian nghỉ dưỡng giữa thiên nhiên Nam Đông, Huế. Nhà gỗ, hồ bơi, BBQ ngoài trời và trải nghiệm sống chậm giữa núi rừng.",

  keywords: [
    "Bâng Glamping",
    "Glamping Nam Đông",
    "Homestay Nam Đông",
    "Du lịch Nam Đông",
    "Camping Huế",
    "Homestay Huế",
    "Nghỉ dưỡng Nam Đông",
    "Glamping Huế",
  ],

  openGraph: {
    title: "Bâng Glamping",
    description:
      "Sống chậm giữa núi rừng Nam Đông. Không gian nghỉ dưỡng mộc mạc nhưng tinh tế.",
    url: "https://bang-glamping.vercel.app",
    siteName: "Bâng Glamping",
    locale: "vi_VN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}