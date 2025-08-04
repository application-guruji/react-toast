// Toast Types - Enhanced with new features
export interface ToastData {
  id: string;
  variant: 'default' | 'success' | 'warning' | 'danger' | 'info';
  styleVariant: 'filled' | 'outline' | 'soft' | 'minimal' | 'gradient' | 'glow' | 'glass' | 'light' | 'dark';
  size: 'sm' | 'md' | 'lg';
  title?: string;
  message: string;
  duration?: number;
  dismissible?: boolean;
  showIcon?: boolean;
  icon?: React.ReactNode;
  border?: 'none' | 'left' | 'top' | 'bottom' | 'all';
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  position?: ToastPosition;
  transparent?: boolean;
  showProgressBar?: boolean;
  customColor?: string;
  createdAt: number;
}

export type ToastPosition = 
  | 'top-right' 
  | 'top-left' 
  | 'top-center' 
  | 'bottom-right' 
  | 'bottom-left' 
  | 'bottom-center';

export interface ToastOptions {
  variant?: ToastData['variant'];
  styleVariant?: ToastData['styleVariant'];
  size?: ToastData['size'];
  title?: string;
  duration?: number;
  dismissible?: boolean;
  showIcon?: boolean;
  icon?: React.ReactNode;
  border?: ToastData['border'];
  shadow?: ToastData['shadow'];
  position?: ToastPosition;
  transparent?: boolean;
  showProgressBar?: boolean;
  customColor?: string;
}

export interface ToastContextValue {
  toasts: ToastData[];
  addToast: (message: string, options?: ToastOptions) => string;
  removeToast: (id: string) => void;
  clearAll: () => void;
}

export interface ToastProviderProps {
  children: React.ReactNode;
  defaultPosition?: ToastPosition;
  maxToasts?: number;
}

export interface ToastProps {
  toast: ToastData;
  onRemove: (id: string) => void;
}

export interface ToastContainerProps {
  position: ToastPosition;
  toasts: ToastData[];
  onRemove: (id: string) => void;
}
