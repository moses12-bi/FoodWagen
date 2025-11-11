import React, { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../Button';

interface AddFoodModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: {
    name: string;
    rating: string;
    imageUrl: string;
    restaurantName: string;
    restaurantLogoUrl: string;
    status: 'open' | 'closed';
    price?: string;
  }) => Promise<void>;
  isLoading?: boolean;
}

export const AddFoodModal: React.FC<AddFoodModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  isLoading = false,
}) => {
  const [formData, setFormData] = useState<{
    name: string;
    rating: string;
    imageUrl: string;
    restaurantName: string;
    restaurantLogoUrl: string;
    status: 'open' | 'closed';
    price: string;
  }>({
    name: '',
    rating: '',
    imageUrl: '',
    restaurantName: '',
    restaurantLogoUrl: '',
    status: 'open',
    price: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Food name is required';
    }
    if (!formData.rating.trim()) {
      newErrors.rating = 'Rating is required';
    }
    if (!formData.imageUrl.trim()) {
      newErrors.imageUrl = 'Food image URL is required';
    } else if (!isValidUrl(formData.imageUrl)) {
      newErrors.imageUrl = 'Invalid URL format';
    }
    if (!formData.restaurantName.trim()) {
      newErrors.restaurantName = 'Restaurant name is required';
    }
    if (!formData.restaurantLogoUrl.trim()) {
      newErrors.restaurantLogoUrl = 'Restaurant logo URL is required';
    } else if (!isValidUrl(formData.restaurantLogoUrl)) {
      newErrors.restaurantLogoUrl = 'Invalid URL format';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await onSubmit(formData);
      setFormData({
        name: '',
        rating: '',
        imageUrl: '',
        restaurantName: '',
        restaurantLogoUrl: '',
        status: 'open',
        price: '',
      });
      setErrors({});
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add a meal" size="lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Food Name */}
        <div>
          <label className="block text-sm text-gray-600 mb-2">Food name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Food name"
            className="w-full px-4 py-2.5 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Food Rating */}
        <div>
          <label className="block text-sm text-gray-600 mb-2">Food rating</label>
          <input
            type="text"
            value={formData.rating}
            onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
            placeholder="Food rating"
            className="w-full px-4 py-2.5 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
          />
          {errors.rating && <p className="text-red-500 text-sm mt-1">{errors.rating}</p>}
        </div>

        {/* Food Image URL */}
        <div>
          <label className="block text-sm text-gray-600 mb-2">Food image (link)</label>
          <input
            type="text"
            value={formData.imageUrl}
            onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
            placeholder="Food image (link)"
            className="w-full px-4 py-2.5 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
          />
          {errors.imageUrl && <p className="text-red-500 text-sm mt-1">{errors.imageUrl}</p>}
        </div>

        {/* Restaurant Name */}
        <div>
          <label className="block text-sm text-gray-600 mb-2">Restaurant name</label>
          <input
            type="text"
            value={formData.restaurantName}
            onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
            placeholder="Restaurant name"
            className="w-full px-4 py-2.5 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
          />
          {errors.restaurantName && <p className="text-red-500 text-sm mt-1">{errors.restaurantName}</p>}
        </div>

        {/* Restaurant Logo URL */}
        <div>
          <label className="block text-sm text-gray-600 mb-2">Restaurant logo (link)</label>
          <input
            type="text"
            value={formData.restaurantLogoUrl}
            onChange={(e) => setFormData({ ...formData, restaurantLogoUrl: e.target.value })}
            placeholder="Restaurant logo (link)"
            className="w-full px-4 py-2.5 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
          />
          {errors.restaurantLogoUrl && <p className="text-red-500 text-sm mt-1">{errors.restaurantLogoUrl}</p>}
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm text-gray-600 mb-2">Price (optional)</label>
          <input
            type="text"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            placeholder="Price"
            className="w-full px-4 py-2.5 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm text-gray-600 mb-2">Restaurant status (open/close)</label>
          <select
            value={formData.status}
            onChange={(e) => {
              const value = e.target.value;
              if (value === 'open' || value === 'closed') {
                setFormData({ ...formData, status: value });
              }
            }}
            className="w-full px-4 py-2.5 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
          >
            <option value="open">open</option>
            <option value="closed">closed</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="flex-1"
            isLoading={isLoading}
          >
            Add
          </Button>
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="flex-1"
            onClick={onClose}
            disabled={isLoading}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
};
