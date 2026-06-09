export default function StaySection() {
  const stays = [
    {
      title: "Nhà Gỗ Gia Đình",
      desc: "Không gian riêng tư cho gia đình và nhóm nhỏ.",
    },
    {
      title: "Phòng Tập Thể",
      desc: "Phù hợp nhóm bạn và team building.",
    },
    {
      title: "Khu Cắm Trại",
      desc: "Trải nghiệm thiên nhiên giữa núi rừng.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Không Gian Lưu Trú
          </h2>

          <p className="section-subtitle mt-4">
            Mộc mạc nhưng tinh tế, gần gũi nhưng đầy cảm xúc.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stays.map((stay) => (
            <div
              key={stay.title}
              className="bg-white rounded-3xl overflow-hidden shadow-sm"
            >
              <div className="h-72 bg-neutral-200" />

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">
                  {stay.title}
                </h3>

                <p className="text-gray-600">
                  {stay.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}