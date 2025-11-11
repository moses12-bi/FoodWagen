import React, { useState, useCallback } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = 'What do you like to eat today?',
}) => {
  const [query, setQuery] = useState('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  }, [onSearch]);

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative flex items-center">
        <Search className="absolute left-4 text-gray-400" size={20} />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

