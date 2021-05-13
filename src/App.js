import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import React, { useEffect } from "react";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The User is >>", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          {/*} <Route path="/orders">
            <Header />
            <Orders />
            <Footer />
          </Route>*/}
          <Route path="/login">
            <Login />
          </Route>
          {/*  <Route path="/register">
            <Register />
            <FooterLogin />
          </Route>*/}
          <Route path="/checkout">
            <Checkout />
          </Route>
          {/*<Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/product">
            <Header />
            <ProductLists productLists={allProductList} />
            <Footer />
          </Route>*/}
          <Route path="/">
            <Home />
            {/* <Footer />*/}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
