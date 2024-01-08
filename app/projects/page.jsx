"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

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
    image: "/work/mama-recipe.png",
    category: "Mobile",
    tools: ["React Native", "Firebase"],
    name: "Mama Recipe",
    description:
      "Introducing Mama Recipe, your ultimate culinary companion designed to elevate your cooking experience. Whether you're a passionate home chef or an aspiring foodie, our application is crafted just for you. With Mama Recipe, explore a world of culinary wonders right at your fingertips.",
    link: "https://github.com/yongkisatrias/mama_recipe_mobile/releases/tag/v1.0.0",
    github: "https://github.com/yongkisatrias/mama_recipe_mobile",
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
    image: "/work/pijar-food-be.png",
    category: "Back-End",
    tools: ["Express.js", "PostgreSQL"],
    name: "Pijar Food API",
    description:
      "This API is designed to provide developers with easy access to a vast collection of delicious and diverse recipes, user authentication for website https://pijar-food-team-b.vercel.app.",
    link: "https://documenter.getpostman.com/view/30079177/2s9YkodgjS",
    github: "https://github.com/yongkisatrias/pijar-food-be",
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
  {
    image: "/work/tickitz-be.png",
    category: "Back-End",
    tools: ["Express.js", "PostgreSQL"],
    name: "Tickitz API",
    description:
      "This API is designed to provide developers with easy access to a vast collection of movies, cinema, user authentication.",
    link: "https://documenter.getpostman.com/view/30079177/2s9YkoehQM",
    github: "https://github.com/yongkisatrias/tickitz-be",
  },
];

// Remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    // if category is 'all projects' return all project
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* Tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* Tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
