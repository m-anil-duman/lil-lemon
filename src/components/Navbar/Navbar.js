'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Drawer, Button } from 'antd';
import './Navbar.css';
import Icon from '../../../public/assets/Logo'; // Adjust path as per your structure

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  return (
    <nav className={`navbar ${hidden ? 'hidden' : ''}`}>
      <div className="container">
        <Link href="/" className="logo">
          <Icon />
        </Link>
        <div className="nav-links">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/menu" className="nav-link">
            Menu
          </Link>
          <Link href="/reservation" className="nav-link">
            Reservation
          </Link>
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/login" className="nav-link">
            Login
          </Link>
        </div>
        <div className="nav-icon">
          <Button type="primary" icon={<MenuOutlined />} onClick={showDrawer} />
        </div>
      </div>
      <Drawer
        title="Navigation"
        placement="right"
        onClose={closeDrawer}
        open={drawerVisible}
        closeIcon={<CloseOutlined />}
      >
        <Link href="/" onClick={closeDrawer} className="drawer-link">
          Home
        </Link>
        <Link href="/menu" onClick={closeDrawer} className="drawer-link">
          Menu
        </Link>
        <Link href="/reservation" onClick={closeDrawer} className="drawer-link">
          Reservation
        </Link>
        <Link href="/about" onClick={closeDrawer} className="drawer-link">
          About
        </Link>
        <Link href="/login" onClick={closeDrawer} className="drawer-link">
          Login
        </Link>
      </Drawer>
    </nav>
  );
};

export default Navbar;
