import Hero from "@/components/Hero";
import About from "@/components/About";
import GithubContributions from "@/components/GithubContributions";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import GithubRepos from "@/components/GithubRepos";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <GithubContributions />
      <Experience />
      <Certifications />
      <Projects />
      <GithubRepos />
      <Skills />
      <Education />
      <BlogPreview />
      <Contact />
    </>
  );
}
