import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loading from "./Loading";

function PageButton({ page, currentPage, handleClick }) {
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
}
function Ellipsis() {
  return (
    <li>
      <span className="ellipsis">...</span>
    </li>
  );
}

function TourList() {
  const [data, setData] = useState([]);
  const [partData, setPartData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState([]);
  const [visiblePage, setVisiblePage] = useState([]);

  const handleClick = (page) => {
    setCurrentPage(page);
  };
  const handlePrev = () => {
    if (currentPage === pageCount[0]) return;
    setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage === pageCount.at(-1)) return;
    setCurrentPage(currentPage + 1);
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
    setPageCount(
      [...Array(Math.floor(data.length / 20)).keys()].map((i) => i + 1)
    );
    if (pageCount.length > 3) {
      if (currentPage < 3) setVisiblePage(pageCount.slice(0, 3));
      if (currentPage >= 3 && currentPage < pageCount.at(-3))
        setVisiblePage(pageCount.slice(currentPage - 2, currentPage + 1));
      if (currentPage >= pageCount.at(-3)) setVisiblePage(pageCount.slice(-3));
    } else {
      setVisiblePage(pageCount);
    }
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
              <li key="prev">
                <input
                  className={currentPage === pageCount[0] ? "disable" : ""}
                  type="button"
                  value="<"
                  onClick={handlePrev}
                />
              </li>
              {currentPage > pageCount[1] ? (
                <>
                  <li key="first">
                    <input
                      className={currentPage === 1 ? "active" : ""}
                      type="button"
                      value="1"
                      onClick={() => handleClick(1)}
                    />
                  </li>
                  <Ellipsis />
                </>
              ) : null}
              {visiblePage.map((page) => {
                return (
                  <PageButton
                    page={page}
                    currentPage={currentPage}
                    handleClick={handleClick}
                  />
                );
              })}
              {currentPage < pageCount.at(-3) ? (
                <>
                  <Ellipsis />
                  <li key="last">
                    <input
                      className={
                        currentPage === pageCount.at(-1) ? "active" : ""
                      }
                      type="button"
                      value={pageCount.at(-1)}
                      onClick={() => handleClick(pageCount.at(-1))}
                    />
                  </li>
                </>
              ) : null}
              <li key="next">
                <input
                  className={currentPage === pageCount.at(-1) ? "disable" : ""}
                  type="button"
                  value=">"
                  onClick={handleNext}
                />
              </li>
            </ul>
          </nav>
        </main>
      )}
    </>
  );
}
export default TourList;
