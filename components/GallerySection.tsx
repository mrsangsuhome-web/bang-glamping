export default function GallerySection() {
  return (
    <section className="py-24 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Thư Viện Hình Ảnh
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="h-[400px] bg-neutral-300 rounded-3xl" />
          <div className="h-[300px] bg-neutral-300 rounded-3xl" />
          <div className="h-[500px] bg-neutral-300 rounded-3xl" />

          <div className="h-[350px] bg-neutral-300 rounded-3xl" />
          <div className="h-[450px] bg-neutral-300 rounded-3xl" />
          <div className="h-[300px] bg-neutral-300 rounded-3xl" />
        </div>
      </div>
    </section>
  );
}