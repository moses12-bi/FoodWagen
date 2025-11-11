import React from 'react';
import { Modal } from './Modal';
import { Button } from '../Button';

interface DeleteConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void>;
  isLoading?: boolean;
  foodName?: string;
}

export const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  isLoading = false,
  foodName = 'this meal',
}) => {
  const handleConfirm = async () => {
    try {
      await onConfirm();
      onClose();
    } catch (error) {
      console.error('Error deleting food:', error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Delete Meal" size="sm">
      <div className="text-center mb-6">
        <p className="text-gray-600">
          Are you sure you want to delete this meal? Actions cannot be reversed.
        </p>
      </div>

      <div className="flex gap-3">
        <Button
          variant="primary"
          size="lg"
          className="flex-1"
          isLoading={isLoading}
          onClick={handleConfirm}
        >
          Yes
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="flex-1"
          onClick={onClose}
          disabled={isLoading}
        >
          Cancel
        </Button>
      </div>
    </Modal>
  );
};
