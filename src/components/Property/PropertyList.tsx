import React from 'react';
import PropertyCard from './PropertyCard';

interface Property {
  title: string;
  location: string;
  price: string;
  image: string;
  type: string;
  area: string;
  legalStatus?: {
    hasDisputes: boolean;
    activeCases?: number;
    description?: string;
  };
}

interface PropertyListProps {
  properties: Property[];
}

export default function PropertyList({ properties }: PropertyListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {properties.map((property, index) => (
        <PropertyCard key={index} {...property} />
      ))}
    </div>
  );
}