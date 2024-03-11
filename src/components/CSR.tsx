"use client";
import { DataType } from "@/types/dataType";
import React, { useEffect, useState } from "react";

const CSR = () => {
  const [data, setData] = useState<DataType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://catfact.ninja/fact`);
      const getData = await response.json();
      setData(getData);
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <li>fact : {data?.fact}</li>
      <li>length : {data?.length}</li>
    </div>
  );
};

export default CSR;
