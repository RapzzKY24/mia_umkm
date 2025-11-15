"use client";

import { useMemo, useState } from "react";

function parseRating(rating) {
  if (!rating) return 0;
  const num = String(rating).split("/")[0];
  return Number.parseFloat(num) || 0;
}

export function useUmkmFilter(data) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const categoryOptions = useMemo(
    () => Array.from(new Set(data.map((u) => u.category))),
    [data]
  );

  const locationOptions = useMemo(
    () => Array.from(new Set(data.map((u) => u.location))),
    [data]
  );

  const filteredAndSorted = useMemo(() => {
    let list = [...data];

    if (selectedCategory !== "all") {
      list = list.filter((u) => u.category === selectedCategory);
    }

    if (selectedLocation !== "all") {
      list = list.filter((u) => u.location === selectedLocation);
    }

    if (sortBy === "rating-desc") {
      list.sort((a, b) => parseRating(b.rating) - parseRating(a.rating));
    } else if (sortBy === "rating-asc") {
      list.sort((a, b) => parseRating(a.rating) - parseRating(b.rating));
    } else if (sortBy === "name-asc") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [data, selectedCategory, selectedLocation, sortBy]);

  const resetFilters = () => {
    setSelectedCategory("all");
    setSelectedLocation("all");
    setSortBy("featured");
  };

  return {
    filteredAndSorted,
    categoryOptions,
    locationOptions,
    selectedCategory,
    setSelectedCategory,
    selectedLocation,
    setSelectedLocation,
    sortBy,
    setSortBy,
    resetFilters,
  };
}
