export interface ApiResponse<T> {
  data: T | null;
  error?: string;
}

export interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  condition: string;
}

export interface AirQualityData {
  pm10: number;
  pm25: number;
  o3: number;
  grade: 'good' | 'moderate' | 'unhealthy' | 'hazardous';
}
