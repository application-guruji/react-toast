import { ToastOptions } from '../types';

// Global toast function - will be set by ToastProvider
let globalAddToast: ((message: string, options?: ToastOptions) => string) | null = null;

export const setGlobalToastFunction = (addToast: (message: string, options?: ToastOptions) => string) => {
  globalAddToast = addToast;
};

// Toast utility functions - Based on TailAdmin Alert UI variants
export const toast = {
  // Default toast
  show: (message: string, options?: ToastOptions) => {
    if (!globalAddToast) {
      console.warn('Toast provider not found. Make sure to wrap your app with ToastProvider.');
      return '';
    }
    return globalAddToast(message, options);
  },

  // Success toast
  success: (message: string, options?: Omit<ToastOptions, 'variant'>) => {
    if (!globalAddToast) {
      console.warn('Toast provider not found. Make sure to wrap your app with ToastProvider.');
      return '';
    }
    return globalAddToast(message, {
      ...options,
      variant: 'success'
    });
  },

  // Error toast
  error: (message: string, options?: Omit<ToastOptions, 'variant'>) => {
    if (!globalAddToast) {
      console.warn('Toast provider not found. Make sure to wrap your app with ToastProvider.');
      return '';
    }
    return globalAddToast(message, {
      ...options,
      variant: 'error'
    });
  },

  // Warning toast
  warning: (message: string, options?: Omit<ToastOptions, 'variant'>) => {
    if (!globalAddToast) {
      console.warn('Toast provider not found. Make sure to wrap your app with ToastProvider.');
      return '';
    }
    return globalAddToast(message, {
      ...options,
      variant: 'warning'
    });
  },

  // Info toast
  info: (message: string, options?: Omit<ToastOptions, 'variant'>) => {
    if (!globalAddToast) {
      console.warn('Toast provider not found. Make sure to wrap your app with ToastProvider.');
      return '';
    }
    return globalAddToast(message, {
      ...options,
      variant: 'info'
    });
  },

  // Promise toast for async operations
  promise: async <T>(
    promise: Promise<T>,
    messages: {
      loading: string;
      success: string | ((data: T) => string);
      error: string | ((error: any) => string);
    },
    options?: ToastOptions
  ): Promise<T> => {
    if (!globalAddToast) {
      console.warn('Toast provider not found. Make sure to wrap your app with ToastProvider.');
      return promise;
    }

    const loadingToastId = globalAddToast(messages.loading, {
      ...options,
      variant: 'info',
      duration: 0, // Don't auto-dismiss loading toast
      dismissible: false
    });

    try {
      const result = await promise;
      
      // Remove loading toast
      if (globalRemoveToast) {
        globalRemoveToast(loadingToastId);
      }
      
      // Show success toast
      const successMessage = typeof messages.success === 'function' 
        ? messages.success(result) 
        : messages.success;
      
      globalAddToast(successMessage, {
        ...options,
        variant: 'success'
      });
      
      return result;
    } catch (error) {
      // Remove loading toast
      if (globalRemoveToast) {
        globalRemoveToast(loadingToastId);
      }
      
      // Show error toast
      const errorMessage = typeof messages.error === 'function' 
        ? messages.error(error) 
        : messages.error;
      
      globalAddToast(errorMessage, {
        ...options,
        variant: 'error'
      });
      
      throw error;
    }
  },

  // Custom toast with full control
  custom: (message: string, options: ToastOptions) => {
    if (!globalAddToast) {
      console.warn('Toast provider not found. Make sure to wrap your app with ToastProvider.');
      return '';
    }
    return globalAddToast(message, options);
  },

  // Clear all toasts
  clearAll: () => {
    if (globalClearAll) {
      globalClearAll();
    } else {
      console.warn('Toast provider not found. Make sure to wrap your app with ToastProvider.');
    }
  }
};

// Global remove function - will be set by ToastProvider
let globalRemoveToast: ((id: string) => void) | null = null;

export const setGlobalRemoveFunction = (removeToast: (id: string) => void) => {
  globalRemoveToast = removeToast;
};

// Dismiss specific toast
export const dismissToast = (id: string) => {
  if (globalRemoveToast) {
    globalRemoveToast(id);
  }
};

// Global clear function - will be set by ToastProvider
let globalClearAll: (() => void) | null = null;

export const setGlobalClearFunction = (clearAll: () => void) => {
  globalClearAll = clearAll;
};

// Clear all toasts
export const clearAllToasts = () => {
  if (globalClearAll) {
    globalClearAll();
  }
};
