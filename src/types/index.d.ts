type ProjectsType = {
  image: string;
  title: string;
  description: string;
  url: string;
  github: string;
  createdAt: string;
  endAt: string;
};

type RotateState = {
  rotate: {
    current: string;
    next: string;
    degrees: {
      current: number;
      next: number;
    };
    preload: boolean;
  };
};

type StylesType = {
  transform: string;
  transition: string;
};

export type { ProjectsType, RotateState, StylesType };
