import axios from 'axios';
import { IndicatorsAPIResponse } from '../interfaces/indicators.interface';

const { VITE_API_URL } = import.meta.env;

const baseURL =  VITE_API_URL || 'http://localhost:3000';

const indicatorsApi = axios.create({
  baseURL,
});

export const getIndicators = () => {
  console.log('call getIndicators');
  return indicatorsApi.get<IndicatorsAPIResponse>('/indicators');
};