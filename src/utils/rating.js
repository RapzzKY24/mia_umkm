export function getRatingParts(ratingNumber, totalStars = 5) {
  const normalized = Math.max(0, Math.min(ratingNumber ?? 0, totalStars)); // clamp 0–totalStars
  const fullStars = Math.floor(normalized);
  const hasHalf = normalized - fullStars >= 0.5;
  const emptyStars = totalStars - fullStars - (hasHalf ? 1 : 0);

  return { fullStars, hasHalf, emptyStars };
}
