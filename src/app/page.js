import Carousel from "@/components/Carousel";
import slides from "@/data/slides.json"; // import JSON langsung

export default function HomePage() {
  return (
    <main className="pt-20 md:pt-24">
      <section className="px-4 sm:px-6 lg:px-8">
        <Carousel slides={slides} />
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-10"></section>
    </main>
  );
}
