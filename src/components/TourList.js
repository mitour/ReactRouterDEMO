import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loading from "./Loading";

function TourList() {
  const [data, setData] = useState([]);
  const [partData, setPartData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState([]);

  const handleClick = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    (async function fetchData() {
      const data = await fetch(
        "https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c"
      );
      const jsonData = await data.json();
      setData(jsonData.data.XML_Head.Infos.Info);
    })();
  }, []);
  useEffect(() => {
    setPartData(data.slice(currentPage * 20, currentPage * 20 + 20));
    setPageCount([...Array(Math.floor(data.length / 20)).keys()]);
  }, [data, currentPage]);
  return (
    <>
      {!data.length ? (
        <Loading />
      ) : (
        <main>
          <ul>
            {partData.map((item) => {
              return (
                <li key={item.id}>
                  <NavLink to={item.Name} state={item}>
                    {item.Name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <nav className="pagination">
            <ul className="d-flex flex-end">
              {pageCount.map((page) => {
                page++;
                return (
                  <li key={page}>
                    <input
                      className={page === currentPage ? "active" : ""}
                      type="button"
                      value={page}
                      onClick={() => handleClick(page)}
                    />
                  </li>
                );
              })}
            </ul>
          </nav>
        </main>
      )}
    </>
  );
}
export default TourList;
