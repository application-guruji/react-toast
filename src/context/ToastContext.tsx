import React, { createContext, useContext, useState, useCallback } from 'react';
import { ToastData, ToastOptions, ToastContextValue, ToastProviderProps } from '../types';
import ToastManager from '../components/ToastManager';

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

let toastIdCounter = 0;

export function ToastProvider({
  children,
  defaultPosition = 'top-right',
  maxToasts = 5
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const addToast = useCallback((message: string, options: ToastOptions = {}): string => {
    const id = `toast-${++toastIdCounter}`;
    
    const newToast: ToastData = {
      id,
      variant: options.variant || 'default',
      styleVariant: options.styleVariant || 'filled',
      size: options.size || 'md',
      title: options.title,
      message,
      duration: options.duration !== undefined ? options.duration : 5000,
      dismissible: options.dismissible !== undefined ? options.dismissible : true,
      showIcon: options.showIcon !== undefined ? options.showIcon : true,
      icon: options.icon,
      border: options.border || 'none',
      shadow: options.shadow || 'md',
      position: options.position || defaultPosition,
      transparent: options.transparent || false,
      showProgressBar: options.showProgressBar !== undefined ? options.showProgressBar : true,
      customColor: options.customColor,
      createdAt: Date.now()
    };

    setToasts(prev => {
      const updated = [...prev, newToast];
      if (updated.length > maxToasts) {
        return updated.slice(-maxToasts);
      }
      return updated;
    });

    return id;
  }, [defaultPosition, maxToasts]);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const clearAll = useCallback(() => {
    setToasts([]);
  }, []);

  const value: ToastContextValue = {
    toasts,
    addToast,
    removeToast,
    clearAll
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastManager />
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextValue => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const useToastActions = () => {
  const { addToast, removeToast, clearAll } = useToast();
  return { addToast, removeToast, clearAll };
};
