export default function Footer() {
  return (
    <footer className="bg-[#3D2B1F] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Bâng Glamping
            </h3>

            <p className="text-white/70">
              Rustic Luxury Retreat giữa thiên nhiên Nam Đông.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Khám phá
            </h4>

            <ul className="space-y-2 text-white/70">
              <li>Trang chủ</li>
              <li>Lưu trú</li>
              <li>Trải nghiệm</li>
              <li>Thư viện</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Liên hệ
            </h4>

            <ul className="space-y-2 text-white/70">
              <li>Nam Đông, Huế</li>
              <li>Booking.com</li>
              <li>Facebook</li>
              <li>Zalo</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-white/50 text-sm">
          © 2026 Bâng Glamping. All rights reserved.
        </div>
      </div>
    </footer>
  );
}