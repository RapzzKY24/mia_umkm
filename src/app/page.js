import Carousel from "@/components/Carousel";
import UmkmCard from "@/components/UmkmCard";
import umkm from "@/data/umkm.json";
import slides from "@/data/slides.json";

export default function HomePage() {
  return (
    <main className="pt-20 md:pt-24">
      <section className="px-4 sm:px-6 lg:px-8">
        <Carousel slides={slides} />
      </section>

      <section className="mt-4">
        <div className="mx-auto w-[95%] max-w-7xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {umkm.slice(0, 5).map((item) => (
              <UmkmCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-10"></section>
    </main>
  );
}
