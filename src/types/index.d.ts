type IconProps = {
  width?: number;
  height?: number;
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
