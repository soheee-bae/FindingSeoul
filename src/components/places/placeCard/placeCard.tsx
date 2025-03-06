"use client";

interface PlaceCardProps {
  place: any;
}

export default function Place(props: PlaceCardProps) {
  const { place } = props;
  return (
    <div
      key={place.id}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2px",
        border: "1px solid gray",
        padding: "10px",
        borderRadius: 10,
      }}
    >
      <h5>{place.display || place.name}</h5>
      <p>{place.abbrAddress}</p>
      <p>{place.address}</p>
      <p>{place.bizhourInfo}</p>
      <div>
        {place.category.map((category, idx) => (
          <p key={idx}>{category}</p>
        ))}
      </div>
      <p>{place.description}</p>
      <p>{place.homePage}</p>
      <p>{place.telDisplay || place.tel}</p>
      <img width={10} height={10} src={place.thumUrl} />
      <p>{place.menuInfo}</p>
    </div>
  );
}
