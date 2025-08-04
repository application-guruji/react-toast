import React, { useState, useEffect } from 'react';
import { ToastProps } from '../types';
import { 
  CheckCircleIcon, 
  XCircleIcon, 
  AlertTriangleIcon, 
  InfoIcon, 
  AlertCircleIcon, 
  XIcon 
} from './ToastIcons';

function Toast({ toast, onRemove }: ToastProps) {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(100);

  const {
    id,
    variant,
    styleVariant,
    size,
    title,
    message,
    duration,
    dismissible,
    showIcon,
    icon,
    border,
    shadow,
    transparent,
    showProgressBar,
    customColor
  } = toast;

  // Mount animation
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
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

  const handleDismiss = () => {
    onRemove(id);
  };

  const icons = {
    default: <InfoIcon />,
    success: <CheckCircleIcon />,
    warning: <AlertTriangleIcon />,
    danger: <XCircleIcon />,
    info: <AlertCircleIcon />
  };

  const buildClasses = () => {
    const classes = ['toast'];
    
    classes.push(`toast-${variant}`);
    if (styleVariant) classes.push(`toast-${styleVariant}`);
    if (size && size !== 'md') classes.push(`toast-${size}`);
    if (border && border !== 'none') classes.push(`toast-border-${border}`);
    if (shadow && shadow !== 'md') classes.push(`toast-shadow-${shadow}`);
    if (transparent) classes.push('toast-transparent');
    
    return classes.join(' ');
  };

  const style: React.CSSProperties & { [key: string]: any } = {};
  if (customColor) {
    style['--custom-color'] = customColor;
  }

  return (
    <div
      className={buildClasses()}
      role="alert"
      aria-live="polite"
      data-mounted={mounted}
      style={style}
    >
      <div className="toast-content">
        {showIcon && (
          <div className="toast-icon">
            {icon || icons[variant]}
          </div>
        )}
        
        <div className="toast-body">
          {title && <div className="toast-title">{title}</div>}
          <div className="toast-message">{message}</div>
        </div>
        
        {dismissible && (
          <button
            onClick={handleDismiss}
            className="toast-close"
            type="button"
            aria-label="Close"
          >
            <XIcon />
          </button>
        )}
      </div>
      
      {showProgressBar && duration && duration > 0 ? (
  <div className="toast-progress-container">
    <div className="toast-progress-bar" style={{ width: `${progress}%` }} />
  </div>
) : null}

    </div>
  );
};

export default Toast;
