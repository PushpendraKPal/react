import { useEffect, useState } from "react";

const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "GET",
          }
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        alert(err);
      }
    };
    getData();
  }, []);

  return (
    <div role="listitem">
      {data.map((e) => {
        return <div>{e.title}</div>;
      })}
    </div>
  );
};

export default Data;
