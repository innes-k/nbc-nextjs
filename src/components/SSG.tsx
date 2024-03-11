import { DataType } from "@/types/dataType";
import React, { useEffect, useState } from "react";

const SSG = () => {
  const [data, setData] = useState<DataType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://catfact.ninja/fact`, {
        cache: "force-cache",
      });
      const getData: DataType = await response.json();
      setData(getData);
    };
    fetchData();
  }, [data]);

  return (
    <div>
      <li>fact : {data?.fact}</li>
      <li>length : {data?.length}</li>
    </div>
  );
};

export default SSG;
