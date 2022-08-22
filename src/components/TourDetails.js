import { useLocation, useNavigate } from "react-router-dom";

function TourDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { Name, Toldescribe, Picture1, Picdescribe1 } = location.state;
  return (
    <>
      <ul>
        <img src={Picture1} alt={Picdescribe1} />
        <li>{Name}</li>
        <li>{Toldescribe}</li>
        <li>
          <input type="button" value="back" onClick={() => navigate(-1)} />
        </li>
      </ul>
    </>
  );
}
export default TourDetails;
