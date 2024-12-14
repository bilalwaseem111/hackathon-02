import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const images = [
    { src: "/Pick - Up.png", alt: "Pick Up", width: 582, height: 132 },
    { src: "/Switch.png", alt: "Switch", width: 60, height: 60 },
    { src: "/Drop - Off.png", alt: "Drop Off", width: 582, height: 132 },
  ];



  const cards = [
    {
      title: "Kele",
      description: "Sport",
      images: [
        { src: "/car.png", alt: "Car", width: 220, height: 68 },
        {
          src: "/Spesification.png",
          alt: "Specification",
          width: 256,
          height: 24,
        },
      ],
      price: "$99.00",
      buttonText: "For Rent Click",
    },
    {
      title: "NissanGT - RR",
      description: "Sports Car",
      images: [
        { src: "/car (1).png", alt: "Car", width: 220, height: 68 },
        {
          src: "/Spesification.png",
          alt: "Specification",
          width: 256,
          height: 24,
        },
      ],
      price: "$99.00",
      buttonText: "Rent Now",
      link: "/payment",
    },
    {
      title: "Rolls-Royce",
      description: "Sedan",
      images: [
        { src: "/car.png", alt: "Car", width: 220, height: 68 },
        {
          src: "/Spesification.png",
          alt: "Specification",
          width: 256,
          height: 24,
        },
      ],
      price: "$99.00",
      buttonText: "Rent Now",
    },
    {
      title: "Rolls-Royce",
      description: "Sedan",
      images: [
        { src: "/car.png", alt: "Car", width: 220, height: 68 },
        {
          src: "/Spesification.png",
          alt: "Specification",
          width: 256,
          height: 24,
        },
      ],
      price: "$99.00",
      buttonText: "Rent Now",
    },
  ];
  const cards2 = [
    {
      title: "All New Rush",
      description: "SUV",
      image: "/suv.png",
      heartImage: "/heart.png",
      specificationImage: "/Spesification.png",
      price: "$99.00/day",
    },
    {
      title: "CR - V",
      description: "SUV",
      image: "/suv (4).png",
      heartImage: "/heart 2.png",
      specificationImage: "/Spesification.png",
      price: "$99.00/day",
    },
    {
      title: "All New Terios",
      description: "SUV",
      image: "/suv (4).png",
      heartImage: "/heart.png",
      specificationImage: "/Spesification.png",
      price: "$99.00/day",
    },
    {
      title: "CR - V",
      description: "SUV",
      image: "/suv (4).png",
      heartImage: "/heart 2.png",
      specificationImage: "/Spesification.png",
      price: "$99.00/day",
    },
  ];
  const cards3 = [
    {
      title: "All New Rush",
      description: "SUV",
      image: "/suv.png",
      heartImage: "/heart.png",
      specificationImage: "/Spesification.png",
      price: "$99.00/day",
    },
    {
      title: "CR - V",
      description: "SUV",
      image: "/suv (4).png",
      heartImage: "/heart 2.png",
      specificationImage: "/Spesification.png",
      price: "$99.00/day",
    },
    {
      title: "All New Terios",
      description: "SUV",
      image: "/suv (4).png",
      heartImage: "/heart.png",
      specificationImage: "/Spesification.png",
      price: "$99.00/day",
    },
    {
      title: "CR - V",
      description: "SUV",
      image: "/suv (4).png",
      heartImage: "/heart 2.png",
      specificationImage: "/Spesification.png",
      price: "$99.00/day",
    },
  ];
  return (
    <div className="bg-[#f6f7f9] min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
      <section className="first w-full flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 justify-center">
        <Image
          src={"/Ads 1.png"}
          alt=""
          width={640}
          height={360}
          className="max-w-full"
        />
        <Image
          src={"/Ads 2.png"}
          alt=""
          width={640}
          height={360}
          className="max-w-full"
        />
      </section>

      <section className="w-full flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-4 sm:gap-8">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="max-w-full"
          />
        ))}
      </section>

      <section className="popular w-full flex flex-col gap-4">
        <div className="first w-full flex items-center justify-between">
          <h1 className="text-gray-500 text-lg sm:text-xl">Our Best Car</h1>
          <Link href={"/categories"}>
            <h1 className="text-[#3263b3] font-bold hover:underline decoration-[#3563e9]">
              View All
            </h1>
          </Link>
        </div>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between"
            >
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between">
                  {card.title}{" "}
                  <Image src="/heart.png" alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                {card.images.map((image, idx) => (
                  <Image
                    key={idx}
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="max-w-full"
                  />
                ))}
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p>
                  {card.price}/<span className="text-gray-500">day</span>
                </p>
                {card.link ? (
                  <Link href={card.link}>
                    <button className="bg-[#3563e9] p-2 text-white rounded-md">
                      {card.buttonText}
                    </button>
                  </Link>
                ) : (
                  <button className="bg-[#3563e9] p-2 text-white rounded-md">
                    {card.buttonText}
                  </button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="popular w-full flex flex-col gap-4">
        <h1 className="text-gray-500 text-lg sm:text-xl">Recommendation Car</h1>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards2.map((card, index) => (
            <Card
              key={index}
              className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between"
            >
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between">
                  {card.title}{" "}
                  <Image
                    src={card.heartImage}
                    alt="Heart"
                    width={20}
                    height={20}
                  />
                </CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={220}
                  height={68}
                />
                <Image
                  src={card.specificationImage}
                  alt="Specification"
                  width={256}
                  height={24}
                />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p>{card.price}</p>
                <button className="bg-[#3563e9] p-2 text-white rounded-md">
                  Rent Now
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards3.map((card, index) => (
            <Card
              key={index}
              className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between"
            >
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between">
                  {card.title}{" "}
                  <img
                    src={card.heartImage}
                    alt="Heart"
                    width={20}
                    height={20}
                  />
                </CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <img
                  src={card.image}
                  alt={card.title}
                  width={220}
                  height={68}
                />
                <img
                  src={card.specificationImage}
                  alt="Specification"
                  width={256}
                  height={24}
                />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p>{card.price}</p>
                <button className="bg-[#3563e9] p-2 text-white rounded-md">
                  Rent Now
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="button w-full text-center">
        <Link href={"/categories"}>
          <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5">
            Show More Cars
          </button>
        </Link>
      </section>
    </div>
  );
}
