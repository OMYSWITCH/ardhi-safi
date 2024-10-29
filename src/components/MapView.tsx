import React from 'react';
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import { AlertTriangle } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

interface MapViewProps {
  plots: {
    coordinates: [number, number][];
    title: string;
    price: string;
    legalStatus?: {
      hasDisputes: boolean;
      activeCases?: number;
      description?: string;
    };
  }[];
  center: [number, number];
  zoom: number;
}

export default function MapView({ plots, center, zoom }: MapViewProps) {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      className="w-full h-[500px] rounded-xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {plots.map((plot, index) => (
        <Polygon
          key={index}
          positions={plot.coordinates}
          pathOptions={{
            color: plot.legalStatus?.hasDisputes ? '#DC2626' : '#059669',
            fillColor: plot.legalStatus?.hasDisputes ? '#DC2626' : '#059669',
            fillOpacity: 0.2,
            weight: plot.legalStatus?.hasDisputes ? 2 : 1,
            dashArray: plot.legalStatus?.hasDisputes ? '5, 5' : undefined,
          }}
        >
          <Tooltip>
            <div className="p-3 max-w-xs">
              <h3 className="font-bold text-gray-900 mb-2">{plot.title}</h3>
              <p className="text-emerald-600 font-medium mb-2">{plot.price}</p>
              
              {plot.legalStatus?.hasDisputes && (
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-red-600">
                    <AlertTriangle size={16} />
                    <span className="font-medium">Legal Disputes</span>
                  </div>
                  {plot.legalStatus.activeCases && (
                    <p className="text-sm text-gray-600 mt-1">
                      Active Cases: {plot.legalStatus.activeCases}
                    </p>
                  )}
                  {plot.legalStatus.description && (
                    <p className="text-sm text-gray-600 mt-2">
                      {plot.legalStatus.description}
                    </p>
                  )}
                </div>
              )}
            </div>
          </Tooltip>
        </Polygon>
      ))}
    </MapContainer>
  );
}