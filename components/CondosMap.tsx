'use client'

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'

interface Condo {
  name: string
  slug: string
  address: string
  lat: number
  lng: number
  description: string
}

interface CondosMapProps {
  condos: Condo[]
}

export default function CondosMap({ condos }: CondosMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<google.maps.Map | null>(null)
  const markersRef = useRef<google.maps.Marker[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!mapRef.current || typeof window === 'undefined' || !isLoaded) return
    if (!(window as any).google || !(window as any).google.maps) return

    const google = (window as any).google

    // Initialize map
    const map = new google.maps.Map(mapRef.current, {
      center: { lat: 27.7715, lng: -82.6300 }, // St. Petersburg center
      zoom: 14,
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }],
        },
      ],
      mapTypeControl: false,
      fullscreenControl: true,
      streetViewControl: false,
    })

    mapInstanceRef.current = map

    // Building icon shape
    const buildingIcon = {
      path: 'M12 2L2 7L2 22L12 27L22 22L22 7L12 2Z M12 4.5L19.5 8.5L19.5 20.5L12 24.5L4.5 20.5L4.5 8.5L12 4.5Z',
      fillColor: '#1a1a1a',
      fillOpacity: 1,
      strokeColor: '#ffffff',
      strokeWeight: 2,
      scale: 1.5,
      anchor: new google.maps.Point(12, 27),
    }

    // Create markers for each condo
    const markers = condos.map((condo) => {
      const marker = new google.maps.Marker({
        position: { lat: condo.lat, lng: condo.lng },
        map,
        title: condo.name,
        icon: buildingIcon,
      })

      // Info window
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 8px; min-width: 200px;">
            <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600; color: #1a1a1a;">${condo.name}</h3>
            <p style="margin: 0 0 4px 0; font-size: 13px; color: #666;">${condo.address}</p>
            <p style="margin: 4px 0 0 0; font-size: 12px; color: #888;">${condo.description}</p>
          </div>
        `,
      })

      marker.addListener('click', () => {
        // Close all other info windows
        markers.forEach((m) => {
          if (m !== marker) {
            const iw = (m as any).infoWindow
            if (iw) iw.close()
          }
        })
        infoWindow.open(map, marker)
      })

      // Store info window reference
      ;(marker as any).infoWindow = infoWindow

      return marker
    })

    markersRef.current = markers

    // Fit bounds to show all markers
    if (markers.length > 0) {
      const bounds = new google.maps.LatLngBounds()
      markers.forEach((marker) => {
        const position = marker.getPosition()
        if (position) bounds.extend(position)
      })
      if (bounds.getNorthEast().lat() !== bounds.getSouthWest().lat()) {
        map.fitBounds(bounds)
      }
    }

    return () => {
      // Cleanup markers
      markers.forEach((marker) => {
        marker.setMap(null)
      })
      markersRef.current = []
    }
  }, [condos, isLoaded])

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}&libraries=places`}
        strategy="lazyOnload"
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          console.error('Failed to load Google Maps')
        }}
      />
      <div
        ref={mapRef}
        style={{
          width: '100%',
          height: '600px',
          minHeight: '400px',
        }}
      />
    </>
  )
}

