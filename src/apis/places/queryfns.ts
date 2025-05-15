import { PlacesProps } from "@/interfaces/places";

export async function getPlacesByStation(params: PlacesProps) {
  const encodedParams = Object.entries(params)
    .filter((arr) => arr[1] && arr[1] !== "")
    .map((kv) => kv.join("="))
    .join("&");
  console.log(encodedParams);

  const result = await fetch(
    `${process.env.API_URL}/places?${encodedParams}`
  ).then((res) => res.json());
  return result;
}
