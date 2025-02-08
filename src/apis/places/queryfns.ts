import { PlacesProps } from "./placesInterface";

export async function getPlacesByStation(params: PlacesProps) {
  const encodedParams = Object.entries(params)
    .map((kv) => kv.join("="))
    .join("&");

  const result = await fetch(
    `${process.env.API_URL}/places?${encodedParams}`
  ).then((res) => res.json());
  return result;
}
