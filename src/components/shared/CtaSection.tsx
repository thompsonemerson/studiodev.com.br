import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";

type CtaSectionProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
  className?: string;
};

export function CtaSection({
  title,
  description,
  buttonText,
  buttonHref = "/contato",
  className = "py-24 bg-slate-100 border-t border-slate-200",
}: CtaSectionProps) {
  return (
    <section className={className}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <SectionHeading
          title={title}
          description={description}
          descriptionClassName="text-xl"
          className="mb-10"
        />
        <Link to={buttonHref}>
          <Button size="lg">{buttonText}</Button>
        </Link>
      </div>
    </section>
  );
}
