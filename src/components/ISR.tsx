import { DataType } from "@/types/dataType";
import React from "react";

const ISR = async () => {
  const response = await fetch(`https://catfact.ninja/fact`, {
    next: {
      revalidate: 5,
    },
  });
  const data: DataType = await response.json();

  return (
    <div>
      <li>fact : {data.fact}</li>
      <li>length : {data.length}</li>
    </div>
  );
};

export default ISR;
