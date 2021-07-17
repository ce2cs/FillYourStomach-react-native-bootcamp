import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import Restaurant from "./src/screens/Restaurant";


export default function App() {
  return (
    <>
      <Restaurant/>
      <ExpoStatusBar style="auto" />
    </>
  );
}