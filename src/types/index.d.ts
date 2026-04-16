import type { JSX } from 'react';

declare global {
  type IconProps = {
    width?: number;
    height?: number;
  };

  type TechnologyItem = {
    Icon: (props: IconProps) => JSX.Element;
    label: string;
  };

  type ErrorState = {
    message: string;
    type?: string;
  };

  type SuccessState = {
    message: string;
    data?: unknown;
  };

  type ApiResponse = {
    success: SuccessState | null;
    error: ErrorState | null;
  };
}
