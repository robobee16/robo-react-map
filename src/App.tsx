import React from "react";
import { AppComponent } from "@app/app.components";
import { withRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "@assets/style/App.scss";

function App() {
  return (
    <div className="App">
      <AppComponent />
    </div>
  );
}

/*
 * this will be required to useHistory
 * for Routing
 * */
export default withRouter(App);
