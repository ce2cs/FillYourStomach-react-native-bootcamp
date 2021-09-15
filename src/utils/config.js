import {Platform} from "react-native";

const localHost = "http://localhost:5001/meals-to-go-f3278/us-central1";
const liveHost = "https://us-central1-meals-to-go-f3278.cloudfunctions.net";

export const isProduction = process.env.NODE_ENV === "production";
export const host = isProduction || Platform.OS === 'android' ? liveHost: localHost;