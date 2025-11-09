import React, { useState, useEffect, useCallback } from 'react';
import { ToastProps } from '../types';
import { 
  CheckCircleIcon, 
  XCircleIcon, 
  AlertTriangleIcon, 
  InfoIcon, 
  XIcon 
} from './ToastIcons';

const Toast: React.FC<ToastProps> = ({ toast, onRemove }) => {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(100);

  const {
    id,
    variant,
    title,
    message,
    duration,
    dismissible = true,
    showIcon = true,
    icon,
    showProgressBar = true
  } = toast;

  // Mount animation
  useEffect(() => {
    requestAnimationFrame(() => {
      setMounted(true);
    });
  }, []);

  // Auto dismiss with progress
  useEffect(() => {
    if (duration && duration > 0) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev - (100 / (duration / 100));
          if (newProgress <= 0) {
            onRemove(id);
            return 0;
          }
          return newProgress;
        });
      }, 100);
      
      return () => clearInterval(interval);
    }
  }, [duration, id, onRemove]);

  const handleDismiss = useCallback(() => {
    setMounted(false);
    setTimeout(() => onRemove(id), 300);
  }, [id, onRemove]);

  const getIcon = () => {
    if (icon) return icon;
    
    switch (variant) {
      case 'success':
        return <CheckCircleIcon />;
      case 'error':
        return <XCircleIcon />;
      case 'warning':
        return <AlertTriangleIcon />;
      case 'info':
        return <InfoIcon />;
      default:
        return <InfoIcon />;
    }
  };

  const toastClasses = `toast toast--${variant} ${mounted ? 'toast--mounted' : ''}`.trim();

  return (
    <div
      className={toastClasses}
      role="alert"
      aria-live="polite"
    >
      <div className="toast__content">
        {showIcon && (
          <div className="toast__icon" aria-hidden="true">
            {getIcon()}
          </div>
        )}
        
        <div className="toast__body">
          {title && <div className="toast__title">{title}</div>}
          <div className="toast__message">{message}</div>
        </div>
        
        {dismissible && (
          <button
            onClick={handleDismiss}
            className="toast__close"
            type="button"
            aria-label="Close toast notification"
          >
            <XIcon />
          </button>
        )}
      </div>
      
      {showProgressBar && duration && duration > 0 ? (
        <div className="toast__progress">
          <div className="toast__progress-bar" style={{ width: `${progress}%` }} />
        </div>
      ) : null}
    </div>
  );
};

export default Toast;
