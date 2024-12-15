export async function getPlacesByStation(
  station?: string,
  displayCount?: number
) {
  return await fetch(`${process.env.BE_LOCAL_PORT}/places/${search}`).then(
    (res) => res.json()
  );
}

export async function getPlaceById(search?: string) {
  return await fetch(`${process.env.BE_LOCAL_PORT}/places/${search}`).then(
    (res) => res.json()
  );
}
