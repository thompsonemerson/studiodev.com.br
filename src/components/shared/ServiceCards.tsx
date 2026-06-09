import type { LucideIcon } from "lucide-react";
import { OptimizedImage } from "@/components/shared/OptimizedImage";
import { TextLink } from "@/components/shared/TextLink";
import { cn } from "@/lib/cn";

export type ServiceItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

type ServiceFeaturedCardProps = {
  service: ServiceItem;
  imageSrc: string;
  imageAlt: string;
  linkTo?: string;
};

type ServiceSideCardProps = {
  service: ServiceItem;
  variant?: "light" | "dark" | "neutral";
  linkTo?: string;
};

export function ServiceFeaturedCard({
  service,
  imageSrc,
  imageAlt,
  linkTo,
}: ServiceFeaturedCardProps) {
  const Icon = service.icon;

  return (
    <div className="group relative h-full min-h-[320px] overflow-hidden rounded-2xl ring-1 ring-slate-200">
      <OptimizedImage
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/35 to-transparent" />
      <div className="relative flex h-full flex-col justify-end p-8 text-white">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </div>
        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
        <p className="text-slate-200 mb-6 max-w-md leading-relaxed">{service.desc}</p>
        {linkTo ? <TextLink to={linkTo} variant="onImage" /> : null}
      </div>
    </div>
  );
}

const sideVariantStyles = {
  light: {
    card: "bg-blue-50 ring-blue-100",
    icon: "bg-blue-600 text-white",
    text: "text-slate-600",
    link: "light" as const,
  },
  dark: {
    card: "bg-slate-900 text-white ring-slate-800",
    icon: "bg-blue-600/20 text-blue-400",
    text: "text-slate-300",
    link: "dark" as const,
  },
  neutral: {
    card: "bg-white ring-slate-200",
    icon: "bg-blue-50 text-blue-600 border border-blue-100",
    text: "text-slate-600",
    link: "light" as const,
  },
};

export function ServiceSideCard({
  service,
  variant = "light",
  linkTo,
}: ServiceSideCardProps) {
  const Icon = service.icon;
  const styles = sideVariantStyles[variant];

  return (
    <div className={cn("h-full rounded-2xl p-8 ring-1", styles.card)}>
      <div
        className={cn(
          "mb-6 flex h-12 w-12 items-center justify-center rounded-xl",
          styles.icon,
        )}
      >
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </div>
      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      <p className={cn("leading-relaxed", linkTo ? "mb-6" : "", styles.text)}>{service.desc}</p>
      {linkTo ? <TextLink to={linkTo} variant={styles.link} /> : null}
    </div>
  );
}
