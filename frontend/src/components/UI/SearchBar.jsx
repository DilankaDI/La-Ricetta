import React, { useState, useRef, useEffect } from 'react';
import './SearchBar.css';

const SearchBar = ({
  placeholder = 'Search recipes...',
  onSearch = () => {},
  onSuggestionSelect = () => {},
  suggestions = [],
  loading = false,
  debounceMs = 300
}) => {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const inputRef = useRef(null);
  const debounceRef = useRef(null);

  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      if (query.trim()) {
        onSearch(query);
      }
    }, debounceMs);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [query, onSearch, debounceMs]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setShowSuggestions(value.length > 0);
    setActiveSuggestion(-1);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    onSuggestionSelect(suggestion);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSuggestion(prev => 
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggestion(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeSuggestion >= 0) {
        handleSuggestionClick(suggestions[activeSuggestion]);
      } else {
        onSearch(query);
        setShowSuggestions(false);
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
      setActiveSuggestion(-1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    setShowSuggestions(false);
  };

  const clearSearch = () => {
    setQuery('');
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-wrapper">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => query && setShowSuggestions(true)}
            placeholder={placeholder}
            className="search-input"
            aria-label="Search recipes"
            aria-expanded={showSuggestions}
            aria-haspopup="listbox"
            role="combobox"
          />
          
          <div className="search-actions">
            {loading && (
              <div className="search-spinner">
                <div className="spinner-small"></div>
              </div>
            )}
            
            {query && !loading && (
              <button
                type="button"
                onClick={clearSearch}
                className="clear-button"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
            
            <button
              type="submit"
              className="search-button"
              aria-label="Search"
            >
              🔍
            </button>
          </div>
        </div>

        {showSuggestions && suggestions.length > 0 && (
          <ul 
            className="suggestions-list"
            role="listbox"
            aria-label="Search suggestions"
          >
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className={`suggestion-item ${
                  index === activeSuggestion ? 'active' : ''
                }`}
                onClick={() => handleSuggestionClick(suggestion)}
                role="option"
                aria-selected={index === activeSuggestion}
              >
                <span className="suggestion-icon">🔍</span>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
};

export default SearchBar;