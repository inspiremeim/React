export async function countryLookupByIP() {
  try {
    const response = await fetch(`https://ipapi.co/json/`);
    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    if (!data || !data.country_code) {
      return null;
    }

    return data.country_code;
  } catch (error) {
    console.error("Error fetching country by IP:", error);
    return null;
  }
}
