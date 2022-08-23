import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loading from "./Loading";

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
      {!data.length ? (
        <Loading />
      ) : (
        <main>
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
          <nav className="pagination">
            <ul className="d-flex flex-end">
              <li key={1}>
                <input className="active" type="button" value="1" />
              </li>
              <li key={2}>
                <input className="" type="button" value="2" />
              </li>
              <li key={3}>
                <input className="" type="button" value="3" />
              </li>
              <li key={4}>
                <input className="" type="button" value="4" />
              </li>
            </ul>
          </nav>
        </main>
      )}
    </>
  );
}
export default TourList;
