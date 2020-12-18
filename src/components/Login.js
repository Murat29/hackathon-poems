import { Link } from "react-router-dom";

function Login() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>Страница входа и регистрации</p>
      <Link to="/form-part-one">
        <button style={{ width: "100px", marginTop: "20px" }}>далее</button>
      </Link>
    </main>
  );
}

export default Login;
