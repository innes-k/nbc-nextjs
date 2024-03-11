import { DataType } from "@/types/dataType";
import React from "react";

const SSR = async () => {
  const response = await fetch(`https://catfact.ninja/fact`, {
    cache: "no-cache",
  });
  const data: DataType = await response.json();

  return (
    <div>
      <li>fact : {data.fact}</li>
      <li>length : {data.length}</li>
    </div>
  );
};

export default SSR;
