import PengajarCard from "./PengajarCard";

const Pengajar = () => {
  const teamMembers = [
    {
      name: "Miss Silvy",
      role: "Baca, Prisma, Bahasa Inggris",
      description: "Mengajar merupakan skill dan passion saya",
      imgSrc: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
      socialLinks: [
        {
          platform: "Facebook",
          url: "#",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {/* SVG content */}
            </svg>
          ),
        },
      ],
    },
    {
      name: "Miss Alma",
      role: "Baca, Prisma",
      description: "Mengajar merupakan skill dan passion saya.",
      imgSrc: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      socialLinks: [
        {
          platform: "Twitter",
          url: "#",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {/* SVG content */}
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <section className="flex justify-center items-center bg-white max-w-[400px] md:max-w-full dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Tim Pengajar BBC</h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            {/* Add a description here if needed */}
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 sm:grid-cols-1">
          {teamMembers.map((member, index) => (
            <PengajarCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pengajar;
