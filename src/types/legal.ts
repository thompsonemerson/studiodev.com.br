export type LegalSection = {
  title: string;
  content: string;
};

export type LegalPageConfig = {
  title: string;
  breadcrumb: string;
  description: string;
  disclaimer: string;
  relatedLinks: { label: string; href: string; variant?: "primary" | "muted" }[];
};
