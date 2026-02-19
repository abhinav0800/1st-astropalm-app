import React from 'react';
import Modal from '../common/Modal';
import Button from '../common/Button';

const ExitDialog = ({ isOpen, onClose, onConfirm }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <div className="text-center p-4">
      <h3 className="text-xl font-bold mb-4">Exit App?</h3>
      <p className="text-secondary text-sm mb-8">Are you sure you want to leave the cosmic guidance?</p>
      <div className="flex gap-4">
        <Button variant="secondary" className="flex-1" onClick={onClose}>Stay</Button>
        <Button variant="primary" className="flex-1" onClick={onConfirm}>Exit</Button>
      </div>
    </div>
  </Modal>
);
export default ExitDialog;
