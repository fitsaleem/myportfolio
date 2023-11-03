import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          FitCodding | Master Web3 Development, Blockchain, and Cloud Computing
        </title>
        <meta
          name="description"
          content="FitCodding is your ultimate resource for mastering web development, computer science, and coding. Dive into the world of blockchain, explore web3 development, and unlock the potential of cloud computing with our comprehensive guides and tutorials."
        />
          <meta name="keywords" content="Web Development, Computer Science, Coding Tutorials, Blockchain Technology, Web3 Development, Cloud Computing, JavaScript Programming, Next.js Tutorials, Blockchain Development, Cloud Services, Web Development Guides, Computer Science Lessons, Coding for Beginners, Advanced Coding Techniques, Blockchain for Beginners, Web3 Applications, Cloud Infrastructure, Full Stack Development, Frontend Development, Backend Development" />
      </Head>
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Toaster
          position="top-center"
          reverseOrder={true}
          containerStyle={{
            top: 150,
            // Adjust this value to position it horizontally.
          }}
        />
        <Navbar />
        <div class="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AchievementsSection />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
        </div>
        <Footer />
      </main>
    </>
  );
}
