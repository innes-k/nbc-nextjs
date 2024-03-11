import { DataType } from "@/types/dataType";
import React, { useEffect, useState } from "react";

const SSG = async () => {
  // 시도 1 - Warning 발생 (클라이언트와 서버에서 다른 값을 가져온다고 함)
  // 오류 메시지 : Text content did not match. Server: "내용 1" Client: "내용 2"

  const response = await fetch(`https://catfact.ninja/fact`, {
    cache: "force-cache",
  });
  const data: DataType = await response.json();

  // 시도 2 - Warning 해결 (이게 맞는지 모르겠어서 일단 주석처리)

  // const [data, setData] = useState<DataType | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(`https://catfact.ninja/fact`, {
  //       cache: "force-cache",
  //     });
  //     const getData: DataType = await response.json();
  //     setData(getData);
  //   };
  //   fetchData();
  // }, [data]);

  return (
    <div>
      <li>fact : {data.fact}</li>
      <li>length : {data.length}</li>
    </div>
  );
};

export default SSG;
