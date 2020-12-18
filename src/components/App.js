import Header from "./Header";
import Footer from "./Footer";
import MainPage from "./MainPage";
import Login from "./Login";
import FormPartOne from "./FormPartOne";
import FormPartTwo from "./FormPartTwo";
import FormPartThree from "./FormPartThree";
import FormPartFour from "./FormPartFour";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Route path="/">
        <Header />
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/form-part-one">
          <FormPartOne />
        </Route>
        <Route path="/form-part-two">
          <FormPartTwo />
        </Route>
        <Route path="/form-part-three">
          <FormPartThree />
        </Route>
        <Route path="/form-part-four">
          <FormPartFour />
        </Route>
        <Footer />
      </Route>
    </>
  );
}

export default App;
