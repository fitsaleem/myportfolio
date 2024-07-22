"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Digital Teach Website",
    description: "Top-Tier Website Development Services ",
    image: "/images/projects/8.png",
    tag: ["All","Web"],
    previewUrl: "https://www.revoltechdigital.com/",
  },
  
  {
    id: 2,
    title: "Full Stack Next.js E-commerce Website",
    description: "E-commerce website built with Next.js and Node.js with Stripe integration." ,
    image: "/images/projects/2.png",
    tag: ["All", "Next.js" ,"Web"],
    previewUrl: "https://nextjs-ecomerce-1.vercel.app/",
  },
  {
    id: 3,
    title: "MERN Stack E-Learning Platform",
    description: "E-learning platform built with MERN stack.",
    image: "/images/projects/3.png",
    tag: ["All", "MERN" ,"Web"],
    previewUrl: "https://nemonx.com/",
  },
  {
    id: 4,
    title: "WordPress E-commerce Website",
    description: "E-commerce website built with WordPress , WooCommerce and WPBakery Page Builder.",
    image: "/images/projects/4.png",
    tag: ["All", "WordPress"],
    previewUrl: "https://matt.eagerfinch.com/",
  },
  {
    id: 5,
    title: "Shopify E-commerce Website",
    description: "E-commerce website built with Shopify and custom theme desige and integratio with custom application for product customization and order management.",
    image: "/images/projects/5.png",
    tag: ["All", "Shopify"],
    previewUrl: "https://koloracrylic.com/",
  },

  {
    id: 6,
    title: "Glow Scout Treatment Next.js Website",
    description: "Glow Scout Treatment Next.js Website",
    image: "/images/projects/6.png",
    tag: ["All", "Next.js" ,"Web"],
    previewUrl: "https://glow-scout-nextjs-14.vercel.app/",
  },
  {
    id: 7,
    title: "Barber Shop Website",
    description: "Barber Shop Website STAY SHARP STAY NORTHY ",
    image: "/images/projects/7.png",
    tag: ["All","Web"],
    previewUrl: "http://northybarbershop.com/",
  },
  {
    id: 8,
    title: "Next.js CarHub Website",
    description: "Find, book, rent a car—quick and super easy!",
    image: "/images/projects/1.png",
    tag: ["All", "Next.js","Web"],
    previewUrl: "https://carhub-coral.vercel.app/",
  },

  {
    id: 9,
    title: "Logo Provident Website",
    description: "The Logo Design Agency That Crafts Distinctive Logos",
    image: "/images/projects/9.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.logoprovident.com/",
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
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 flex-wrap">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />

<ProjectTag
          onClick={handleTagChange}
          name="Web"
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
