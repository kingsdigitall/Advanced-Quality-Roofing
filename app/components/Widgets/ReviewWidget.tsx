"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface Review {
  id: number;
  name: string;
  content: string;
}

const ReviewWidget: React.FC = () => {
  // console.log(data)

  const testimonials = [
    {
      name: "Sarah Jose",
      content:
        "Exceptional service! Ben Franklin Plumbing came to our rescue when our water heater stopped working. The technician was professional, friendly, and had the problem fixed quickly. I highly recommend them for any plumbing issues!",
    },
    {
      name: "Mark T",
      content:
        "I’ve used Ben Franklin Plumbing for multiple projects over the years, and I’m always impressed with their efficiency and customer care. From drain cleaning to pipe repairs, they’ve handled it all with ease!",
    },
    {
      name: "Samantha Brown",
      content:
        "The team at Ben Franklin Plumbing is outstanding! I had a leak in my kitchen, and they were able to come out the same day to fix it. Great work and very affordable pricing!",
    },
    {
      name: "Karen M",
      content:
        "Our sewer line had issues, and Ben Franklin Plumbing handled the entire process with professionalism. They explained everything thoroughly and even offered helpful maintenance tips for the future.",
    },
    {
      name: "Mark Jose",
      content:
        "I called Ben Franklin Plumbing for an emergency water leak, and they arrived within the hour! They fixed the problem efficiently and provided a fair quote. I will call them again.",
    },
    {
      name: "Emily Rose",
      content:
        "I was impressed with how quickly Ben Franklin Plumbing responded to my emergency. Their technician was knowledgeable and took care of everything without a hitch. I can’t recommend them enough!",
    },
    {
      name: "Lisa ",
      content:
        "Ben Franklin Plumbing is my go-to for all plumbing needs! They’ve done everything from routine maintenance to emergency repairs. Always friendly, reliable, and on time!",
    },
    {
      name: "Chris T.",
      content:
        "I had a burst pipe in my basement, and Ben Franklin Plumbing handled it expertly. The team was on time, very professional, and fixed the problem right away. I’m really happy with the service!",
    },
    {
      name: "Steven",
      content:
        "Our bathroom renovation wouldn’t have been the same without Ben Franklin Plumbing. They helped with the plumbing installation, and everything turned out perfectly. Highly recommended!",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="relative  pb-10">
      <h2 className="text-first mb-10 mt-20 text-center text-3xl font-bold text-main">
        Testimonials
      </h2>
      <Slider {...settings}>
        {testimonials.map((item: any, index: number) => (
          <div
            className="relative mb-10 p-5  lg:h-80 lg:bg-main lg:text-white"
            key={index + 1}
          >
            <div className="flex items-center justify-center">
              <Image
                src="/5Star.png"
                alt="review"
                width={1000}
                height={500}
                className="w-40 "
              />
            </div>

            <h3 className="mt-4 text-center text-xl  font-semibold">
              {item.name}
            </h3>
            <p className="mt-4 ">{item.content}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewWidget;
