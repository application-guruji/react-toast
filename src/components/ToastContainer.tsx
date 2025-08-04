import React from 'react';
import { createPortal } from 'react-dom';
import { ToastContainerProps } from '../types';
import Toast from './Toast';

const ToastContainer: React.FC<ToastContainerProps> = ({
  position,
  toasts,
  onRemove
}) => {
  const positionToasts = toasts.filter(toast => 
    (toast.position || 'top-right') === position
  );

  if (positionToasts.length === 0) return null;

  return createPortal(
    <div className={`toast-container toast-container--${position}`}>
      {positionToasts.map((toast) => (
        <Toast
          key={toast.id}
          toast={toast}
          onRemove={onRemove}
        />
      ))}
    </div>,
    document.body
  );
};

export default ToastContainer;
