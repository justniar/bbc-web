const Footer = () => {
  const whatsappNumber = "+6281212565078";
  const message = "Halo, saya tertarik untuk mengetahui lebih lanjut tentang Bimbel Bumi Cerdas.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer id="tentang" className="bg-orange-200 text-gray-800 py-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="space-y-5">
            <h1 className="text-2xl font-bold text-gray-900">Bimbel Bumi Cerdas</h1>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
              mollitia dolorum voluptas! Beatae voluptate, sint praesentium
              inventore nisi ipsum doloremque.
            </p>
          </div>
          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-gray-900">Tentang</h2>
            <div className="flex flex-col gap-3 text-sm text-gray-700">
              <a href="/" className="hover:text-orange-600 transition">Tentang</a>
              <a href="/" className="hover:text-orange-600 transition">Program</a>
              <a href="/" className="hover:text-orange-600 transition">Prestasi</a>
              <a href="/" className="hover:text-orange-600 transition">Update</a>
            </div>
          </div>
          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-gray-900">Hubungi Kami</h2>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
              veritatis nam maiores. Accusantium, veniam quo.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded-full text-white bg-orange-500 font-semibold transition"
            >
              Hubungi Kami lewat Whatsapp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
