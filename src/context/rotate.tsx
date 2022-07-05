import React, { useState } from 'react';

type RotateType = {
  current: string;
  next: string;
  degrees: { current: number; next: number };
  preload?: boolean;
};

const initial: RotateType = {
  current: 'home',
  next: 'home',
  degrees: { current: 0, next: 0 },
  preload: true,
};

export const RotateContext = React.createContext<{
  rotate: RotateType;
  handleSetRotate: (rotate: RotateType) => void;
}>(null as any);

export function RotateProvider({ children }: { children: React.ReactNode }) {
  const [rotate, setRotate] = useState<RotateType>(initial);

  const handleSetRotate = (rotate: RotateType) => setRotate(rotate);

  return (
    <RotateContext.Provider
      value={{
        rotate,
        handleSetRotate,
      }}
    >
      {children}
    </RotateContext.Provider>
  );
}
