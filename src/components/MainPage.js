import { Link } from "react-router-dom";

function MainPage() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>Главная страница</p>
      <Link to="/login">
        <button style={{ width: "100px", marginTop: "20px" }}>далее</button>
      </Link>
    </main>
  );
}

export default MainPage;
