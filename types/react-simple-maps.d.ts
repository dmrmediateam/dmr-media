declare module 'react-simple-maps' {
  import { FC, ReactNode } from 'react';

  export interface ComposableMapProps {
    projection?: string;
    projectionConfig?: Record<string, number>;
    width?: number;
    height?: number;
    className?: string;
    children?: ReactNode;
  }

  export interface GeographiesProps {
    geography: string | object;
    parseGeographies?: (geos: unknown) => unknown;
    children: (props: { geographies: Geography[] }) => ReactNode;
    className?: string;
  }

  export interface Geography {
    rsmKey: string;
    id?: string;
    properties?: Record<string, unknown>;
    svgPath?: string;
  }

  export interface GeographyProps {
    geography: Geography;
    onMouseEnter?: (event: unknown) => void;
    onMouseLeave?: (event: unknown) => void;
    onClick?: (event: unknown) => void;
    title?: string;
    style?: {
      default?: Record<string, string | number>;
      hover?: Record<string, string | number>;
      pressed?: Record<string, string | number>;
    };
  }

  export interface ZoomableGroupProps {
    center?: [number, number];
    zoom?: number;
    children?: ReactNode;
  }

  export const ComposableMap: FC<ComposableMapProps>;
  export const Geographies: FC<GeographiesProps>;
  export const Geography: FC<GeographyProps>;
  export const ZoomableGroup: FC<ZoomableGroupProps>;
}
