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

export type { ProjectsType, RotateState };
