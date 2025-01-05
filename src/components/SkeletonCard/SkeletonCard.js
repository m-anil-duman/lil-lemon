// src/components/SkeletonCard/SkeletonCard.js
import React from 'react';
import { Card, Skeleton } from 'antd';
import './SkeletonCard.css';

const SkeletonCard = () => {
  return (
    <Card className="skeleton-card">
      <Skeleton.Image active className="skeleton-card-image" />
      <Skeleton active paragraph={{ rows: 3 }} />
    </Card>
  );
};

export default SkeletonCard;
