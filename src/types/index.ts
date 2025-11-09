// Toast Types - Simplified and Clean
export interface ToastData {
  id: string;
  variant: 'default' | 'success' | 'error' | 'warning' | 'info';
  title?: string;
  message: string;
  duration?: number;
  dismissible?: boolean;
  showIcon?: boolean;
  icon?: React.ReactNode;
  position?: ToastPosition;
  showProgressBar?: boolean;
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
  title?: string;
  duration?: number;
  dismissible?: boolean;
  showIcon?: boolean;
  icon?: React.ReactNode;
  position?: ToastPosition;
  showProgressBar?: boolean;
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
