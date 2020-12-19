import Header from "./Header";
import Footer from "./Footer";
import MainPage from "./MainPage";
import Login from "./Login";
import FormPartOne from "./FormPartOne";
import FormPartTwo from "./FormPartTwo";
import FormPartThree from "./FormPartThree";
import FormPartFour from "./FormPartFour";
import { Route } from "react-router-dom";
import React from "react";
import NewAppealContext from "./contexts/NewAppealContext";

function App() {
  const [NewAppeal, SetNewAppeal] = React.useState({
    theme: "",
    address: "",
    poem: "",
    status: "В работе",
    data: "",
  });

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
        <NewAppealContext.Provider value={NewAppeal}>
          <Route path="/form-part-one">
            <FormPartOne SetNewAppeal={SetNewAppeal} />
          </Route>
          <Route path="/form-part-two">
            <FormPartTwo SetNewAppeal={SetNewAppeal} />
          </Route>
          <Route path="/form-part-three">
            <FormPartThree SetNewAppeal={SetNewAppeal} />
          </Route>
          <Route path="/form-part-four">
            <FormPartFour />
          </Route>
        </NewAppealContext.Provider>
        <Footer />
      </Route>
    </>
  );
}

export default App;
