import { useMemo, useState } from "react";

export function useMap({ coordinates, name, location, mapsUrl }) {
  const [showMap, setShowMap] = useState(false);

  const embedSrc = useMemo(
    () =>
      `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}&hl=id&z=16&output=embed`,
    [coordinates.lat, coordinates.lng]
  );

  const externalMapsUrl = useMemo(
    () =>
      mapsUrl ??
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${name} ${location}`
      )}`,
    [mapsUrl, name, location]
  );

  const openMap = () => setShowMap(true);

  return { showMap, openMap, embedSrc, externalMapsUrl };
}
