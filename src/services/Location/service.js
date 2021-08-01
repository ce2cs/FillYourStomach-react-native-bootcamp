import camelize from "camelize";

import {locations} from "./mock";
import {host, isProduction} from "../../utils/config";

// const fetchLocationAPI = (searchTerm) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(locations[searchTerm])
//     }, 3000)
//   })
// };

export const locationRequest = async (searchTerm) => {
  searchTerm = searchTerm.toLowerCase();
  let requestURL;
  if (isProduction) {
    requestURL = `${host}/geocode?city=${searchTerm}`;
  } else {
    requestURL = `${host}/geocode?city=${searchTerm}&mock=true`;
  }
  const location = await fetch(requestURL);
  const locResponse = await location.json()
  const transformed = locationTransform(locResponse);
  return transformed;
};

export const locationTransform = (location) => {
  const formatted = camelize(location);
  const {geometry = {}} = formatted.results[0];
  const {lat, lng} = geometry.location;
  const viewport = geometry.viewport;
  return {lat, lng, viewport};
};