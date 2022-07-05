import { ProjectsProvider } from 'context/projects';
import { RotateProvider } from 'context/rotate';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ProjectsProvider>
      <RotateProvider>{children}</RotateProvider>
    </ProjectsProvider>
  );
}
