import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full">
      {banners.map((banner, index) => (
        <div
          style={{
            backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7),rgba(0,0,0,0.3)),url(/assets/images/banner/${
              index + 1
            }.jpg)`,
          }}
          key={index}
          id={`slide${index + 1}`}
          className="carousel-item relative w-full h-[400px] md:h-screen bg-cover"
        >
          <div className="flex items-center h-full md:w-1/3 pl-20 md:pl-36 text-white">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-6">
                {banner.title}
              </h2>
              <p className="mb-6">{banner.description}</p>
              <div>
                <button className="btn btn-primary mr-3">Discover More</button>
                <button className="btn btn-outline btn-primary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-5 md:bottom-10 right-10 flex space-x-5">
            <a href={banner.prev} className="btn btn-circle">
              ❮
            </a>
            <a href={banner.next} className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

const banners = [
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide2",
    prev: "#slide4",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide3",
    prev: "#slide1",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide4",
    prev: "#slide2",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide1",
    prev: "#slide3",
  },
];
export default Banner;
