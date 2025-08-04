import React, { useEffect } from 'react';
import { useToast } from '../context/ToastContext';
import { setGlobalToastFunction, setGlobalRemoveFunction, setGlobalClearFunction } from '../utils/toast';
import ToastContainer from './ToastContainer';
import { ToastPosition } from '../types';

function ToastManager() {
  const { toasts, addToast, removeToast, clearAll } = useToast();

  // Set global functions for toast utilities
  useEffect(() => {
    setGlobalToastFunction(addToast);
    setGlobalRemoveFunction(removeToast);
    setGlobalClearFunction(clearAll);
  }, [addToast, removeToast, clearAll]);

  // All possible positions
  const positions: ToastPosition[] = [
    'top-right',
    'top-left', 
    'top-center',
    'bottom-right',
    'bottom-left',
    'bottom-center'
  ];

  return (
    <>
      {positions.map(position => (
        <ToastContainer
          key={position}
          position={position}
          toasts={toasts}
          onRemove={removeToast}
        />
      ))}
    </>
  );
};

export default ToastManager;
