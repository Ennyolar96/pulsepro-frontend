import axios, { AxiosError, type AxiosInstance } from "axios";

// Retry config
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // ms

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function shouldRetry(error: AxiosError, currentRetry: number): boolean {
  if (currentRetry >= MAX_RETRIES) return false;

  // Retry on network errors or 5xx / 429
  if (error.code === "ECONNABORTED" || !error.response) return true;

  const status = error.response?.status;
  if (status && (status >= 500 || status === 429)) {
    return true;
  }

  return false;
}

export function createAxiosInstance(baseURL?: string): AxiosInstance {
  const instance = axios.create({
    baseURL,
    timeout: 10000,
    // headers: {
    //   "Content-Type": "application/json",
    // },
  });

  // Retry interceptor
  instance.interceptors.response.use(
    (response) => response,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (error: AxiosError & { config: any }) => {
      const { config } = error;
      if (!config) throw error;

      config.__retryCount = config.__retryCount || 0;

      if (shouldRetry(error, config.__retryCount)) {
        config.__retryCount += 1;
        console.warn(
          `[Axios Retry] Attempt ${config.__retryCount} after error: ${error.message}`
        );
        await delay(RETRY_DELAY * config.__retryCount);
        return instance(config);
      }

      return Promise.reject(error);
    }
  );

  return instance;
}

export const http = createAxiosInstance(import.meta.env.VITE_API_BASE_URL);
