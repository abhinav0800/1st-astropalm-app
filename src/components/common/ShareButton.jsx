import React from 'react';
import { shareService } from '../../services/shareService';
import Button from './Button';

const ShareButton = ({ title, text, url }) => {
  const handleShare = () => shareService.shareContent(title, text, url);
  return <Button onClick={handleShare} variant="secondary">Share Wisdom</Button>;
};
export default ShareButton;
