import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Education } from "@/components/sections/education";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Hackathons } from "@/components/sections/hackathons";
import { GithubStats } from "@/components/sections/github-stats";
import { Contact } from "@/components/sections/contact";
import { fetchGitHubUser } from "@/lib/github";

export const revalidate = 3600; // Revalidate at most every hour

export default async function Home() {
  const user = await fetchGitHubUser();

  return (
    <>
      <Navbar />
      <main className="flex-1 w-full flex flex-col">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Hackathons />
        <GithubStats user={user} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
