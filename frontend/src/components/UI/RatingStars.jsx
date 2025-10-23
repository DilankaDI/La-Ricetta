import React, { useState } from 'react';
import './RatingStars.css';

const RatingStars = ({ 
  rating = 0, 
  maxRating = 5, 
  onRate = null, 
  readonly = false,
  size = 'medium',
  showValue = true 
}) => {
  const [hoverRating, setHoverRating] = useState(0);

  const sizeClasses = {
    small: 'stars-small',
    medium: 'stars-medium',
    large: 'stars-large'
  };

  const handleStarClick = (starValue) => {
    if (!readonly && onRate) {
      onRate(starValue);
    }
  };

  const handleStarHover = (starValue) => {
    if (!readonly) {
      setHoverRating(starValue);
    }
  };

  const handleStarLeave = () => {
    if (!readonly) {
      setHoverRating(0);
    }
  };

  const getStarClass = (starValue) => {
    const currentRating = hoverRating || rating;
    
    if (starValue <= currentRating) {
      return 'star-filled';
    } else if (starValue - 0.5 <= currentRating) {
      return 'star-half';
    }
    return 'star-empty';
  };

  return (
    <div className={`rating-stars ${sizeClasses[size]} ${readonly ? 'readonly' : 'interactive'}`}>
      <div className="stars-container">
        {Array.from({ length: maxRating }).map((_, index) => {
          const starValue = index + 1;
          
          return (
            <button
              key={starValue}
              className={`star ${getStarClass(starValue)}`}
              onClick={() => handleStarClick(starValue)}
              onMouseEnter={() => handleStarHover(starValue)}
              onMouseLeave={handleStarLeave}
              disabled={readonly}
              aria-label={`Rate ${starValue} out of ${maxRating} stars`}
              type="button"
            >
              ⭐
            </button>
          );
        })}
      </div>
      
      {showValue && (
        <span className="rating-value">
          {rating.toFixed(1)} / {maxRating}
        </span>
      )}
    </div>
  );
};

export default RatingStars;