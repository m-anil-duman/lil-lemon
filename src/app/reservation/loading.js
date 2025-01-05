// src/app/reservation/loading.js
import React from 'react';
import { Spin } from 'antd';
import './reservation.css';
import { LoadingOutlined } from '@ant-design/icons';


export default function Loading() {
  return (
    <div className="reservation-loading-container">
<Spin indicator={<LoadingOutlined size={{ fontSize: 48 }} spin />} />    </div>
  );
}
