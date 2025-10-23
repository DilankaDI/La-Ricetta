import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = ({ 
  message = 'Something went wrong!', 
  type = 'error',
  onRetry = null,
  onClose = null,
  className = ''
}) => {
  const typeClasses = {
    error: 'error-type-error',
    warning: 'error-type-warning',
    info: 'error-type-info',
    success: 'error-type-success'
  };

  const icons = {
    error: '❌',
    warning: '⚠️', 
    info: 'ℹ️',
    success: '✅'
  };

  return (
    <div className={`error-message ${typeClasses[type]} ${className}`}>
      <div className="error-content">
        <span className="error-icon">{icons[type]}</span>
        <span className="error-text">{message}</span>
      </div>
      
      {(onRetry || onClose) && (
        <div className="error-actions">
          {onRetry && (
            <button 
              className="error-btn retry-btn" 
              onClick={onRetry}
              type="button"
            >
              🔄 Retry
            </button>
          )}
          {onClose && (
            <button 
              className="error-btn close-btn" 
              onClick={onClose}
              type="button"
              aria-label="Close error message"
            >
              ✕
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ErrorMessage;