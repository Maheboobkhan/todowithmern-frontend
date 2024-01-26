const getApiBaseUrl = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'https://todowithmern-backend.vercel.app';
    // return 'https://todowithmern-backend.vercel.app'
  }
  return import.meta.env.VITE_API_BASE_URL;
};
export default getApiBaseUrl;
