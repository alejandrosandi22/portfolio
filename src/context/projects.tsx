import React, { useState } from 'react';
import { ProjectsType } from 'types';

export const ProjectsContext = React.createContext<{
  projects: ProjectsType[];
  handleSetProjects: (projects: ProjectsType[]) => void;
}>(null as any);

export function ProjectsProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProjects] = useState<ProjectsType[]>([]);

  const handleSetProjects = (projects: ProjectsType[]) => setProjects(projects);

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        handleSetProjects,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
}
