export async function getStationsByDistrict(district?: string) {
  return await fetch(`${process.env.BE_LOCAL_PORT}/stations/${district}`).then(
    (res) => res.json()
  );
}
