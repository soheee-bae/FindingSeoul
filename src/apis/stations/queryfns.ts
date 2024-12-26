export async function getStationsByArea(area?: string) {
  return await fetch(`${process.env.BE_LOCAL_PORT}/stations/${area}`).then(
    (res) => res.json()
  );
}
