"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next.js CarHub Website",
    description: "Find, book, rent a car—quick and super easy!",
    image: "/images/projects/7.png",
    tag: ["All", "Next.js"],
    previewUrl: "https://carhub-coral.vercel.app/",
  },
  {
    id: 2,
    title: "Full Stack Next.js E-commerce Website",
    description: "E-commerce website built with Next.js and Node.js with Stripe integration." ,
    image: "/images/projects/2.jpg",
    tag: ["All", "Next.js"],
    previewUrl: "https://nextjs-ecomerce-1.vercel.app/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "E-commerce Application",
    image: "/images/projects/3.png",
    tag: ["All", "Next.js"],
    previewUrl: "https://github.com/fitsaleem/e-comerce-website",
  },
  {
    id: 4,
    title: "software development Application",
    description: " software development consulting services for businesses.",
    image: "/images/projects/9.png",
    tag: ["All", "Mobile"],
    previewUrl: "https://fitcodding.netlify.app/",
  },
  {
    id: 5,
    title: "Full-stack Applicaton",
    description: "Next js CarHab full stack application",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    previewUrl: "https://carhub-coral.vercel.app/",
  },
  {
    id: 6,
    title: "Full-stack Applicaton",
    description: "Next js Movies full stack application",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    previewUrl: "https://nextjs-movies-web.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="MERN"
          isSelected={tag === "MERN"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="Next.js"
          isSelected={tag === "Next.js"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="WordPress"
          isSelected={tag === "WordPress"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="Shopify"
          isSelected={tag === "Shopify"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
