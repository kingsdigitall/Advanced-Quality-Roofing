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
        "Affordable Roofing provided us with excellent service! The team was professional and reliable, and our roof looked fantastic. We highly recommend them to anyone in York County.",
    },
    {
      name: "Mark T",
      content:
        "I had a leaking roof, and Affordable Roofing fixed it quickly and at a great price. Their service was top-notch, and the crew was very friendly!",
    },
    {
      name: "Samantha Brown",
      content:
        "Highly recommend! The team was prompt, efficient, and very knowledgeable. They listened to our needs, and we couldn’t be happier with the results",
    },
    {
      name: "Karen M",
      content:
        "Fast and professional! Affordable Roofing fixed a major leak in our commercial building, and we haven't had any issues since. They truly live up to their name.",
    },
    {
      name: "Mark Jose",
      content:
        "Affordable Roofing saved us in an emergency! A major leak started during a rainstorm, and they responded immediately. The repair was fast, and we haven’t had any issues since. Highly recommend!",
    },
    {
      name: "Emily Rose",
      content:
        "From the initial consultation to the final cleanup, everything was handled professionally. They explained all our options and worked within our budget. Our new roof looks amazing!",
    },
    {
      name: "Lisa ",
      content:
        "We had our roof replaced by Affordable Roofing, and they did a fantastic job. They were respectful of our property and cleaned up thoroughly after the project. A+ service!",
    },
    {
      name: "Chris Witch",
      content:
        "I was impressed with their honesty and transparency. They provided a thorough inspection and recommended only what we needed. No upselling, just straightforward service!",
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
