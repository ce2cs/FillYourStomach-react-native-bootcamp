import camelize from "camelize";
import {host, isProduction} from "../../utils/config";

// const fetchAPI = async (location) => {
//   return await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(mocks[formattedLocation])
//     }, 3000)
//   });
// }
export const restaurantsRequest = async (location = "37.7749295,-122.4194155") => {
  try {
    let requestURL;
    if (isProduction) {
      requestURL = `${host}/placesNearby?location=${location}`
    } else{
      requestURL = `${host}/placesNearby?location=${location}&mock=true`
    }
    const response = await fetch(requestURL);
    const resData = await response.json();
    const transformed = restaurantsTransform(resData);
    return transformed;
  } catch (error) {
    console.log(error.message)
    console.log('restaurant request failed');
  }
}

const restaurantsTransform = ({results = []}) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      address: restaurant.vicinity
    };
  });

  return camelize(mappedResults);
};