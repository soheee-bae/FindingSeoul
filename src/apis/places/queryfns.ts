export async function getPlacesByStation(
  station: string,
  type?: string,
  displayCount?: number
) {
  const result = await fetch(
    `${
      process.env.API_URL
    }/places?station=${station}&type=${type}&displayCount=${
      displayCount || 75
    }}`
  ).then((res) => res.json());
  return result;
}
