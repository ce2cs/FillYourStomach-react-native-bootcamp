import {mockImages, mocks} from "./mock";
import camelize from "camelize";

const fetchAPI = async (location) => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(mocks[location])
    }, 3000)
  });
}
export const restaurantsRequest = async (location = "37.7749295,-122.4194155") => {
  try {
    const response = await fetchAPI(location);
    const transformed = restaurantsTransform(response);
    // console.log(transformed);
    return transformed;
  } catch (error) {
    console.log(error.message)
  }
}

const restaurantsTransform = ({results = []}) => {

  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      photos: restaurant.photos.map(() =>
        mockImages[Math.ceil(Math.random() * (mockImages.length - 1))])
    };
  });

  return camelize(mappedResults);
};