'use client';

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';
import { FIPS_TO_STATE } from '@/lib/fipsToState';

const GEO_URL = '/maps/us-states.json';

export interface UsServiceMapProps {
  selectedState: string | null;
  onSelectState: (state: string | null) => void;
}

export default function UsServiceMap({
  selectedState,
  onSelectState,
}: UsServiceMapProps) {
  const handleClick = (fips: string) => {
    const state = FIPS_TO_STATE[fips];
    if (!state) return;
    const stateUpper = state.toUpperCase();
    onSelectState(selectedState === stateUpper ? null : stateUpper);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <ComposableMap
        projection="geoAlbersUsa"
        projectionConfig={{ scale: 1000 }}
        className="w-full h-auto"
      >
        <ZoomableGroup center={[-96, 38]} zoom={1}>
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const fips =
                  (geo.id as string) ??
                  (geo.properties?.id as string) ??
                  '';
                const stateAbbr = FIPS_TO_STATE[fips];
                if (!stateAbbr) return null;

                const stateUpper = stateAbbr.toUpperCase();
                const isSelected = selectedState === stateUpper;

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => handleClick(fips)}
                    title={stateAbbr}
                    style={{
                      default: {
                        fill: isSelected
                          ? 'var(--color-off-black)'
                          : 'var(--color-ink-200)',
                        stroke: 'var(--color-ink-200)',
                        strokeWidth: 0.5,
                        outline: 'none',
                      },
                      hover: {
                        fill: isSelected
                          ? 'var(--color-off-black)'
                          : 'var(--color-off-black)',
                        stroke: 'var(--color-off-black)',
                        strokeWidth: 1,
                        outline: 'none',
                        cursor: 'pointer',
                      },
                      pressed: {
                        outline: 'none',
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      {selectedState && (
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif mt-4 text-center">
          Filtering: {selectedState}
        </p>
      )}
    </div>
  );
}
