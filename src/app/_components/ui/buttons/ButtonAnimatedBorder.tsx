import { cn } from "@/utils/cn";

export function ButtonAnimatedBorder() {
  return (
    <button className="group relative grid overflow-hidden rounded-xl px-4 py-2 shadow-[0_1000px_0_0_hsl(0_0%_85%)_inset] transition-colors duration-200 dark:shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset]">
      <span>
        <span
          className={cn(
            "spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-xl",
            "[mask:linear-gradient(black,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,black_360deg)]",
            "before:rotate-[-90deg] before:animate-rotate dark:before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)]",
            "before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%] dark:[mask:linear-gradient(white,_transparent_50%)]",
          )}
        />
      </span>
      <span className="backdrop absolute inset-px rounded-[11px] bg-neutral-100 transition-colors duration-200 group-hover:bg-neutral-200 dark:bg-neutral-950 dark:group-hover:bg-neutral-900" />
      <span className="z-10 text-sm font-medium text-neutral-500 dark:text-neutral-400">
        Button
      </span>
    </button>
  );
}
