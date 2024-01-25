const getApiBaseUrl = () => {
  if (process.env.NODE_ENV === 'development') {
    // return 'http://localhost:8000';
    return 'https://todowithmern-project.onrender.com'
  }
  return import.meta.env.VITE_API_BASE_URL;
};
export default getApiBaseUrl;
