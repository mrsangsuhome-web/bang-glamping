export default function Hero() {
return (

<div
className="absolute inset-0"
style={{
backgroundImage:
"url('/images/hero/hero.jpg')",
backgroundSize: "cover",
backgroundPosition: "center",
}}
/>

  <div className="absolute inset-0 bg-black/50" />

  <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
    <div className="max-w-4xl text-white">
      <p className="uppercase tracking-[8px] text-sm mb-5 text-amber-200">
        Rustic Luxury Retreat
      </p>

      <h1 className="text-6xl md:text-8xl font-bold mb-6">
        BÂNG GLAMPING
      </h1>

      <p className="text-xl md:text-2xl max-w-2xl mx-auto text-white/90 mb-10">
        Trốn phố một chút.
        <br />
        Tìm lại bình yên giữa núi rừng Nam Đông.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-[#B79B73] hover:bg-[#a88b66] text-white px-8 py-4 rounded-full font-semibold transition">
          Đặt Phòng
        </button>

        <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
          Khám Phá
        </button>
      </div>
    </div>
  </div>
</section>

);
}