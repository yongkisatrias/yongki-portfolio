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
    image: "/work/portfolio-yongki.png",
    category: "Front-End",
    tools: ["Next.js", "Tailwind CSS", "Framer Motion"],
    name: "My Portfolio",
    description: "my personal portfolio page, created with ❤",
    link: "https://yongki-portfolio.vercel.app/",
    github: "https://github.com/yongkisatrias/yongki-portfolio",
  },
  {
    image: "/work/peworld.png",
    category: "Front-End",
    tools: ["Next.js", "Tailwind CSS"],
    name: "Peworld",
    description:
      "Peworld is a dedicated platform designed for recruiters seeking top-tier talent to join their companies.",
    link: "https://peworld-fe-yongki.vercel.app/",
    github: "https://github.com/yongkisatrias/peworld-fe",
  },
  {
    image: "/work/pijar-food.png",
    category: "Front-End",
    tools: ["React.js", "Bootstrap"],
    name: "Pijar Food",
    description:
      "Pijar food is a website which contains many food recipes from various regions & countries and aims to make it easier for people who want to cook.",
    link: "https://pijar-food-team-b.vercel.app/",
    github: "https://github.com/yongkisatrias/pijar-food-fe",
  },
  {
    image: "/work/tickitz.png",
    category: "Front-End",
    tools: ["React.js", "Bootstrap"],
    name: "Tickitz",
    description:
      "Discover a seamless and exhilarating movie-going experience with Tickitz, your go-to platform for hassle-free cinema ticket bookings!",
    link: "https://tickitz-fe-yongkisatrias.vercel.app/",
    github: "https://github.com/yongkisatrias/tickitz-fe",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-56">
      <div className="container mx-auto">
        {/* Text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Project</h2>
          <p className="subtitle mb-8">
            Here are 4 projects that I have just finished working on, see all
            projects to see more!
          </p>
          <Link href="/projects">
            <Button>All Project</Button>
          </Link>
        </div>
        {/* Slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className=""
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
