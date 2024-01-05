"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// Import Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

// Import Required Modules
import { Pagination } from "swiper/modules";

// Components
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    image: "/work/4.png",
    category: "React.js",
    name: "Example Web",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, pariatur.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "React.js",
    name: "Example Web",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, pariatur.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "React.js",
    name: "Example Web",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, pariatur.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "React.js",
    name: "Example Web",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, pariatur.",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* Text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Project</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
            alias.
          </p>
          <Link href="/projects">
            <Button>All Project</Button>
          </Link>
        </div>
        {/* Slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* Show only the first 4 project for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
