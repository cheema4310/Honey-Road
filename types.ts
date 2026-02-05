import React from 'react';

export interface MenuItem {
  name: string;
  description: string;
  price?: string;
  tags?: string[];
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

export interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}