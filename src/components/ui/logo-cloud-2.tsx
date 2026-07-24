import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";
import { partners } from "@/lib/partners";
import { PlaceHolderImages } from "@/lib/placeholder-images";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div">;

export function LogoCloud({ className, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn(
        "relative grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 border-l border-t border-border/50",
        className
      )}
      {...props}
    >
      {partners.map((partner, index) => {
        const image = PlaceHolderImages.find((img) => img.id === partner.id);

        return (
          <LogoCard
            key={partner.id}
            className={cn(
              "relative border-r border-b border-border/50",
              // Simple alternating background for a subtle effect
              "bg-background hover:bg-secondary/20 transition-colors duration-300"
            )}
            logo={{
              src: image?.imageUrl || "https://svgl.app/library/github_wordmark_light.svg",
              alt: partner.name,
            }}
          >
            {/* Adding plus icons on the corners for the techy vibe */}
            {index === 0 && (
              <PlusIcon
                className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-border"
                strokeWidth={1}
              />
            )}
          </LogoCard>
        );
      })}
    </div>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
};

function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-background px-4 py-8 md:p-8",
        className
      )}
      {...props}
    >
      <img
        alt={logo.alt}
        className="pointer-events-none h-8 select-none md:h-12 w-auto object-contain dark:brightness-0 dark:invert"
        height={logo.height || "auto"}
        src={logo.src}
        width={logo.width || "auto"}
      />
      {children}
    </div>
  );
}
