import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import AnimationApp from "../app/AnimationApp.js";

import DynamicScrollToTop from "../DynamicScrollToTop";
function App() {
  return (
    <Router>
      <DynamicScrollToTop />
      <div className="container">
        <Navbar />
        <Route path="*">
          <AnimationApp />
        </Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
