"use client";

import { HeroCard } from "@/components/sections/HeroCard";
import { AvatarCard } from "@/components/sections/AvatarCard";
import { ProjectShowcaseCard } from "@/components/sections/ProjectShowcaseCard";
import { GithubCard, LinkedinCard } from "@/components/sections/SocialCards";
import { AboutCard, SkillsCard } from "@/components/sections/AboutCard";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { ContactCard } from "@/components/sections/ContactCard";
import { projects } from "@/lib/data";

export function BentoGrid() {
  return (
    <section className="bento-grid" aria-label="Conteúdo principal">
      {/* Row 1: Hero (2col) | Avatar (1col) | Tall pink showcase (1col, 2rows) */}
      <HeroCard />
      <AvatarCard />
      <ProjectShowcaseCard
        title="Análise de vendas"
        color="var(--color-card-blue)"
        icon="📈"
        href="https://github.com/aleblima/Sales-analysis.git"
        status="Em construção"
        tall
      />

      {/* Row 2: Github (1col) | LinkedIn (1col) | Task Manager blue (1col) | tall continues */}
      <GithubCard />
      <LinkedinCard />
      <ProjectShowcaseCard
        title="Task Manager"
        color="var(--color-card-green)"
        icon="☕"
        href="https://github.com/aleblima/TaskManager.git"
        tall
      />

      {/* Row 3: About (2col) | Skills (1col) | empty cell filled by grid */}
      <AboutCard />
      <SkillsCard />

      {/* Row 4: Project cards — each 2col, side by side */}
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}

      {/* Row 5: Contact (2col) + spacer fills remaining */}
      <ContactCard />
    </section>
  );
}
