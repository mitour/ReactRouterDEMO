import { useNavigate } from "react-router-dom";

function FAQ() {
  const navigate = useNavigate();
  return (
    <>
      <main>
        <h2>LOL! Nothing here.</h2>
      </main>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
}

export default FAQ;
