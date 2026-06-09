const stays = [
{
title: "Nhà Gỗ Gia Đình",
desc: "Không gian riêng tư dành cho gia đình.",
},
{
title: "Phòng Tập Thể",
desc: "Lý tưởng cho nhóm bạn và team building.",
},
{
title: "Khu Cắm Trại",
desc: "Hòa mình vào thiên nhiên Nam Đông.",
},
];

export default function StaySection() {
return (




    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-[#3D2B1F]">
        Không Gian Lưu Trú
      </h2>

      <p className="mt-4 text-gray-600">
        Mộc mạc nhưng tinh tế, gần gũi nhưng đầy cảm xúc.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {stays.map((stay) => (
        <div
          key={stay.title}
          className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300"
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