// src/agents/ForecastAgent.ts

import { ForecastResult } from '../types/forecast';
import { AGENT_FORECAST_API_URL } from '../constants/api';

/**
 * ฟังก์ชันหลักสำหรับเรียก Forecasting Agent ที่ Hugging Face
 * @param prompt string ข้อความหรือโจทย์สำหรับ agent
 * @returns Promise<ForecastResult>
 */
export async function fetchForecastAgent(prompt: string): Promise<ForecastResult> {
  const res = await fetch(AGENT_FORECAST_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt })
  });

  if (!res.ok) {
    throw new Error('Forecast Agent API error');
  }
  const data = await res.json();
  // สมมุติว่าตอบกลับมาเป็น { forecast: string, details?: any }
  return {
    forecast: data.forecast,
    details: data.details,
  };
}
