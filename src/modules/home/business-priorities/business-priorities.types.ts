export type BusinessPriorityId =
  | "build"
  | "comply"
  | "protect"
  | "measure"
  | "grow";

export type BusinessPriorityIconKey =
  BusinessPriorityId;

export type BusinessPriorityLink = {
  label: string;
  href: string;
};

export type BusinessPriorityItem = {
  id: BusinessPriorityId;
  label: string;
  heading: string;
  description: string;

  iconKey: BusinessPriorityIconKey;

  imageSrc?: string;
  imageAlt: string;

  relatedSupport: BusinessPriorityLink[];

  cta: {
    label: string;
    href: string;
  };

  seoTags: string[];

  visible: boolean;
  order: number;
};

export type BusinessPrioritiesContent = {
  sectionId: string;
  eyebrow: string;

  heading: {
    light: string;
    steel: string;
    gold: string;
  };

  introduction: string;

  items: BusinessPriorityItem[];
};
