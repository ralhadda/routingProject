export async function fetchData(url, signal) {
  const response = await fetch(url, { signal });
  return response.json();
}
