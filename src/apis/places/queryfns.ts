export async function getPlacesByLocation(search?: string) {
  return await fetch(
    `${process.env.FINDING_SEOUL_BE_URL}/places/${search}`
  ).then((res) => res.json());
}

// export function getPlace() {
//   return { place: "alaska" };
// }
