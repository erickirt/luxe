import { AnimateEnter } from "../AnimateEnter";
import { Icons } from "@/app/_components/Icons";
import { AnimatedNumber } from "./AnimatedNumber";
import { TextAnimateEnter } from "@/app/_components/TextAnimateEnter";
import { ButtonGlitchBrightness } from "@/app/_components/ButtonGlitchBrightness";
import { GridBackground } from "../GridBackground";

async function getRepoStarCount() {
  const res = await fetch("https://api.github.com/repos/guhrodrrigues/luxe");
  const data = await res.json();
  const starCount = data.stargazers_count;

  if (starCount > 999) {
    return (starCount / 1000).toFixed(1) + "K";
  }

  return starCount;
}

export async function HeroContent() {
  const starCount = await getRepoStarCount();

  return (
    <div className="z-[3] flex flex-col items-center gap-5 text-center">
      <AnimateEnter>
        <Icons.slogan />
      </AnimateEnter>
      <AnimateEnter delay={0.1}>
        <TextAnimateEnter
          text={`Library of components copy and paste to illuminate your applications with elegance and sophistication.`}
          className="text-neutral-600 dark:text-neutral-300"
          containerClassName="max-w-md mx-auto"
          duration={0.6}
        />
      </AnimateEnter>
      <AnimateEnter
        className="flex flex-wrap items-center justify-center gap-2"
        delay={0.5}
      >
        <ButtonGlitchBrightness href="/ui/installation" text="Get Started" />
        <a
          href="https://github.com/guhrodrrigues/luxe"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-xl border border-border bg-background px-4 py-2 text-sm font-semibold text-neutral-600 duration-300 hover:bg-neutral-200 dark:text-secondary dark:hover:bg-neutral-900"
        >
          <Icons.github className="h-3.5 w-3.5" />
          <AnimatedNumber value={starCount} />
        </a>
      </AnimateEnter>
      <GridBackground />
    </div>
  );
}
