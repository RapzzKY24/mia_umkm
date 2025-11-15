import { umkmData } from "../data/umkm";

export function getUmkmById(id) {
  const raw = umkmData.find((x) => x.id === id);
  if (!raw) return null;

  const ratingNumber = parseFloat(raw.rating.split("/")[0]); // "2.0/5.0" -> 2
  const totalStars = 5;
  const mapsUrl = `https://www.google.com/maps?q=${raw.coordinates.lat},${raw.coordinates.lng}`;

  return {
    ...raw,
    ratingNumber,
    totalStars,
    mapsUrl,
  };
}

export const parseRating = (ratingStr) => parseFloat(ratingStr.split("/")[0]);

export const getTopRatedUmkm = (data, limit = 5) => {
  return [...data]
    .sort((a, b) => parseRating(b.rating) - parseRating(a.rating))
    .slice(0, limit);
};
