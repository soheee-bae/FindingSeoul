export async function getStationsByDistrict(district?: string) {
  const result = await fetch(
    `${process.env.API_URL}/stations/${district}`
  ).then((res) => res.json());
  return result;
}
