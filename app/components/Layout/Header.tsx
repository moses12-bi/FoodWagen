import React from 'react';
import { Button } from '../Button';

interface HeaderProps {
  onAddMeal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onAddMeal }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-yellow-500">🍽️</div>
          <h1 className="text-2xl font-bold text-yellow-500">FoodWagen</h1>
        </div>

        {/* Add Meal Button */}
        <Button variant="primary" size="md" onClick={onAddMeal}>
          + Add Meal
        </Button>
      </div>
    </header>
  );
};
