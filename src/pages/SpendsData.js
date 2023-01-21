import React from "react";
import { Chart } from "react-google-charts";
// export const data = [
//   ["Element", "Density", { role: "style" }],
//   ["Copper", 8.94, "#B87333"], // RGB value
//   ["Silver", 10.49, "silver"], // English color name
//   ["Gold", 19.3, "gold"],
//   ["Platinum", 21.45, "color: #E5E4E2"], // CSS-style declaration
// ];
export const data = [
    ["Element", "Monthly", { role: "style" }],
    ["Payments", 2000, "#FACC79"],
    ["Travel", 3000, "#B9E688"],
    ["Shopping", 4000, "#EE5452"],
    ["Food", 1000, " #9358FF"],
    ["Stationery", 5000, " #FFA5D0"],
    ["Entertainment", 4000, "#54E6C3"],
  ];
export function Spends() {
  return (
    <Chart chartType="ColumnChart" width="140%" height="200px" data={data} />
  );
}