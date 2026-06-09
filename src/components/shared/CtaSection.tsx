import { Link } from "react-router";
import { Button } from "@/components/ui/button";

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
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{title}</h2>
        <p className="text-xl text-slate-600 mb-10">{description}</p>
        <Link to={buttonHref}>
          <Button size="lg">{buttonText}</Button>
        </Link>
      </div>
    </section>
  );
}
