export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl text-white">
          <p className="uppercase tracking-[8px] text-sm mb-5">
            Rustic Luxury Retreat
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            BÂNG GLAMPING
          </h1>

          <p className="text-lg md:text-2xl max-w-2xl mx-auto text-white/90 mb-10">
            Trốn phố một chút.
            <br />
            Tìm lại bình yên giữa núi rừng Nam Đông.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
              Đặt Phòng Ngay
            </button>

            <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
              Khám Phá
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
        ↓
      </div>
    </section>
  );
}