import React from 'react';
import './RecipeTags.css';

const RecipeTags = ({ 
  tags = [], 
  onTagClick = null, 
  removable = false, 
  onRemove = null,
  maxTags = null,
  variant = 'default'
}) => {
  const variantClasses = {
    default: 'tag-default',
    primary: 'tag-primary',
    success: 'tag-success',
    warning: 'tag-warning',
    info: 'tag-info'
  };

  const displayTags = maxTags ? tags.slice(0, maxTags) : tags;
  const remainingCount = maxTags ? tags.length - maxTags : 0;

  const handleTagClick = (tag, index) => {
    if (onTagClick) {
      onTagClick(tag, index);
    }
  };

  const handleRemove = (e, tag, index) => {
    e.stopPropagation();
    if (onRemove) {
      onRemove(tag, index);
    }
  };

  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <div className="recipe-tags">
      {displayTags.map((tag, index) => (
        <span
          key={index}
          className={`recipe-tag ${variantClasses[variant]} ${
            onTagClick ? 'clickable' : ''
          }`}
          onClick={() => handleTagClick(tag, index)}
          role={onTagClick ? 'button' : undefined}
          tabIndex={onTagClick ? 0 : undefined}
          onKeyDown={(e) => {
            if (onTagClick && (e.key === 'Enter' || e.key === ' ')) {
              e.preventDefault();
              handleTagClick(tag, index);
            }
          }}
        >
          <span className="tag-text">{tag}</span>
          {removable && (
            <button
              className="tag-remove"
              onClick={(e) => handleRemove(e, tag, index)}
              aria-label={`Remove ${tag} tag`}
              type="button"
            >
              ✕
            </button>
          )}
        </span>
      ))}
      
      {remainingCount > 0 && (
        <span className="recipe-tag tag-more">
          +{remainingCount} more
        </span>
      )}
    </div>
  );
};

// Tag input component for adding new tags
export const TagInput = ({ 
  value = '', 
  onChange = () => {}, 
  onAdd = () => {},
  placeholder = 'Add tag...',
  suggestions = []
}) => {
  const [inputValue, setInputValue] = React.useState(value);
  const [showSuggestions, setShowSuggestions] = React.useState(false);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange(newValue);
    setShowSuggestions(newValue.length > 0 && suggestions.length > 0);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      if (inputValue.trim()) {
        onAdd(inputValue.trim());
        setInputValue('');
        onChange('');
        setShowSuggestions(false);
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    onAdd(suggestion);
    setInputValue('');
    onChange('');
    setShowSuggestions(false);
  };

  return (
    <div className="tag-input-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={() => inputValue && setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        placeholder={placeholder}
        className="tag-input"
      />
      
      {showSuggestions && suggestions.length > 0 && (
        <ul className="tag-suggestions">
          {suggestions
            .filter(s => s.toLowerCase().includes(inputValue.toLowerCase()))
            .map((suggestion, index) => (
              <li
                key={index}
                className="tag-suggestion"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeTags;