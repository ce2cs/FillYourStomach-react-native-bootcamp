import camelize from "camelize";

import {locations} from "./mock";

const fetchLocationAPI = (searchTerm) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(locations[searchTerm])
    }, 3000)
  })
};

export const locationRequest = async (searchTerm) => {
  try {
    searchTerm = searchTerm.toLowerCase();
    const locationMock = await fetchLocationAPI(searchTerm);
    const transformed = locationTransform(locationMock);
    return transformed;
  } catch (e) {
    console.log(e.message);
  }
};

export const locationTransform = (location) => {
  const formatted = camelize(location);
  const {geometry = {}} = formatted.results[0];
  const {lat, lng} = geometry.location;
  const viewport = geometry.viewport;
  return {lat, lng, viewport};
};