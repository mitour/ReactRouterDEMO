import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function TourList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async function fetchData() {
      const data = await fetch(
        "https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c"
      );
      const jsonData = await data.json();
      setData(jsonData.data.XML_Head.Infos.Info);
    })();
  }, []);
  return (
    <>
      <ul>
        {data.map((item) => {
          return (
            <>
              <li key={item.id}>
                <NavLink to={item.Name} state={item}>
                  {item.Name}
                </NavLink>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
export default TourList;
