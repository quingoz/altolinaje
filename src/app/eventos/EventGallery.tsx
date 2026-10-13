import Image from "next/image";

const IMAGES = [
  "/images/catering/catering-1.JPG",
  "/images/catering/catering-2.JPG",
  "/images/catering/catering-3.jpg",
  "/images/catering/catering-4.jpg",
  "/images/catering/catering-5.jpg",
  "/images/catering/catering-6.jpg",
  "/images/catering/catering-7.JPG",
  "/images/catering/catering-8.jpg",
  "/images/catering/catering-9.jpg",
  "/images/catering/catering-10.jpg",
  "/images/catering/catering-11.jpg",
  "/images/catering/catering-12.jpg",
  "/images/catering/catering-13.jpg",
  "/images/catering/catering-14.jpg",
  "/images/catering/catering-15.JPG",
  "/images/catering/catering-16.jpg",
  "/images/catering/catering-17.jpg",
  "/images/catering/catering-18.jpg",
  "/images/catering/catering-19.jpg",
  "/images/catering/catering-20.PNG",
  "/images/catering/catering-21.jpg",
  "/images/catering/catering-22.jpg",
  "/images/catering/catering-23.jpg",
  "/images/catering/catering-24.jpg",
  "/images/catering/catering-25.jpg",
  "/images/catering/catering-26.jpg",
];

export default function EventGallery() {
  return (
    <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {IMAGES.map((src, index) => (
        <figure
          key={src}
          className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-[#16181d]"
        >
          <Image
            src={src}
            alt={`Experiencia de catering Alto Linaje ${index + 1}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </figure>
      ))}
    </div>
  );
}
