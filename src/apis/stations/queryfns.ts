export async function getStationsByDistrict(district?: string) {
  console.log(process.env.API_URL);
  const result = await fetch(
    `${process.env.API_URL}/stations/${district}`
  ).then((res) => res.json());
  console.log(result);
  return result;
}
