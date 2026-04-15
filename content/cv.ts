export type CvEducation = {
  key: string;
  icon: "school" | "college";
  highlight?: boolean;
};

export type CvWork = {
  key: string;
  icon: "desk" | "briefcase" | "wrench";
  highlight?: boolean;
};

export const education: CvEducation[] = [
  { key: "augsburg", icon: "school", highlight: true },
  { key: "furtwangen", icon: "school" },
  { key: "vocational", icon: "college" },
  { key: "apprenticeship", icon: "college" },
  { key: "secondary", icon: "college" },
];

export const work: CvWork[] = [
  { key: "hohenheim", icon: "desk", highlight: true },
  { key: "tutorUnity", icon: "briefcase" },
  { key: "tutorFudge", icon: "briefcase" },
  { key: "gamelab", icon: "briefcase" },
  { key: "productionMechanic", icon: "wrench" },
];
