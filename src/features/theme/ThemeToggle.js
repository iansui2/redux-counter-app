import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './themeSlice';

const ThemeToggle = () => {
  const dark = useSelector((state) => state.theme.dark);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      aria-label="Toggle dark mode"
      className={`relative w-16 h-8 rounded-full transition-colors duration-300 focus:outline-none ${
        dark ? 'bg-gray-700' : 'bg-yellow-300'
      }`}
    >
      <span
        className={`absolute left-1 top-1 w-6 h-6 rounded-full shadow-md flex items-center justify-center transition-transform duration-300 ${
          dark ? 'translate-x-8 bg-gray-900 text-yellow-300' : 'translate-x-0 bg-white text-yellow-500'
        }`}
      >
        {dark ? (
          // Moon icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
            />
          </svg>
        ) : (
          // Sun icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
            <path stroke="currentColor" strokeWidth="2" d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95l-1.41-1.41M6.46 6.46L5.05 5.05m12.02 0l-1.41 1.41M6.46 17.54l-1.41 1.41" />
          </svg>
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;