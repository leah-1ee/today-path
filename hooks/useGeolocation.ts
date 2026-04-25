import { useState, useEffect } from 'react';

interface GeolocationState {
  lat: number | null;
  lng: number | null;
  error: string | null;
  loading: boolean;
}

export function useGeolocation(): GeolocationState {
  const [state, setState] = useState<GeolocationState>({
    lat: null,
    lng: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setState(prev => ({ ...prev, error: 'Geolocation not supported', loading: false }));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      pos =>
        setState({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          error: null,
          loading: false,
        }),
      err => setState(prev => ({ ...prev, error: err.message, loading: false })),
    );
  }, []);

  return state;
}
