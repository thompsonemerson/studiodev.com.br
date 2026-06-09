import { motion } from "motion/react";
import { SectionBadge } from "./SectionBadge";

type PageHeaderProps = {
  badge?: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
};

export function PageHeader({ badge, title, description, children }: PageHeaderProps) {
  return (
    <div className="mb-16 border-b border-slate-200 pb-12">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        {children ?? (
          <>
            {badge && <SectionBadge className="mb-4">{badge}</SectionBadge>}
            {title && (
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">{title}</h1>
            )}
            {description && (
              <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">{description}</p>
            )}
          </>
        )}
      </motion.div>
    </div>
  );
}
