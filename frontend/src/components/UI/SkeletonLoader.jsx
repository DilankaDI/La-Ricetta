import React from 'react';
import './SkeletonLoader.css';

const SkeletonLoader = ({ 
  type = 'recipe-card', 
  count = 1, 
  className = '',
  animated = true 
}) => {
  const renderRecipeCardSkeleton = () => (
    <div className="skeleton-recipe-card">
      <div className="skeleton-image"></div>
      <div className="skeleton-content">
        <div className="skeleton-title"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text short"></div>
        <div className="skeleton-meta">
          <div className="skeleton-rating"></div>
          <div className="skeleton-time"></div>
        </div>
        <div className="skeleton-actions">
          <div className="skeleton-button"></div>
          <div className="skeleton-button secondary"></div>
        </div>
      </div>
    </div>
  );

  const renderTextSkeleton = () => (
    <div className="skeleton-text-block">
      <div className="skeleton-text"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-text short"></div>
    </div>
  );

  const renderListSkeleton = () => (
    <div className="skeleton-list-item">
      <div className="skeleton-avatar"></div>
      <div className="skeleton-list-content">
        <div className="skeleton-text"></div>
        <div className="skeleton-text short"></div>
      </div>
    </div>
  );

  const renderSkeleton = () => {
    switch (type) {
      case 'recipe-card':
        return renderRecipeCardSkeleton();
      case 'text':
        return renderTextSkeleton();
      case 'list-item':
        return renderListSkeleton();
      default:
        return renderRecipeCardSkeleton();
    }
  };

  return (
    <div className={`skeleton-container ${animated ? 'animated' : ''} ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="skeleton-item">
          {renderSkeleton()}
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;