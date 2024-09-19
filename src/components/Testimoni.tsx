import { TestimonialCard } from './TestimoniCard';

const Testimoni = () => {
  return (
    <section id="testimoni" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-blue-gray-800">
            Apa yang mereka katakan tentang BBC
          </h2>
          <p className="mt-4 text-blue-gray-600">
            We value our clients and their feedback. Here’s what they have to say about our services.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
