export const fetchData = async (url, signal) => {
  const response = await fetch(url, { signal });
  return response.json();
};
