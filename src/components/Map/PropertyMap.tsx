import React from 'react';
import { MapContainer, TileLayer, Polygon, Tooltip, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import { AlertTriangle, Scale } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

interface PropertyMapProps {
  plots: {
    coordinates: [number, number][];
    title: string;
    price: string;
    type: string;
    status: string;
    legalStatus?: {
      hasDisputes: boolean;
      activeCases?: number;
      description?: string;
    };
  }[];
  center: [number, number];
  zoom: number;
  height?: string;
}

const customIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function PropertyMap({ plots, center, zoom, height = '500px' }: PropertyMapProps) {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height, width: '100%' }}
      className="rounded-xl border border-gray-200"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {plots.map((plot, index) => (
        <React.Fragment key={index}>
          <Polygon
            positions={plot.coordinates}
            pathOptions={{
              color: plot.legalStatus?.hasDisputes ? '#DC2626' : (plot.status === 'available' ? '#059669' : '#9CA3AF'),
              fillColor: plot.legalStatus?.hasDisputes ? '#DC2626' : (plot.status === 'available' ? '#059669' : '#9CA3AF'),
              fillOpacity: 0.2,
              weight: plot.legalStatus?.hasDisputes ? 2 : 1,
              dashArray: plot.legalStatus?.hasDisputes ? '5, 5' : undefined,
            }}
          >
            <Tooltip>
              <div className="p-3 max-w-xs">
                <h3 className="font-bold text-gray-900 mb-2">{plot.title}</h3>
                <p className="text-emerald-600 font-medium mb-2">{plot.price}</p>
                <p className="text-sm text-gray-600 mb-2">{plot.type}</p>
                
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
          <Marker 
            position={plot.coordinates[0]} 
            icon={customIcon}
          >
            <Tooltip>{plot.title}</Tooltip>
          </Marker>
        </React.Fragment>
      ))}
    </MapContainer>
  );
}