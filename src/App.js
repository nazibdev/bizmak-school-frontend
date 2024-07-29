import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateVehicle from "./components/vehicle/CreateVehicle";
import Checkout from "./components/commons/Checkout";
import StudentHome from "./components/portal/StudentHome";
import TeacherHome from "./components/portal/TeacherHome";
import AdminHome from "./components/portal/AdminHome";
import Courses from "./components/commons/Courses";
import HomePage from "./components/home/HomePage";
import Contact from "./components/commons/Contact";
import StudentInfo from "./components/student/StudentInfo";
import TeacherInfo from "./components/teacher/TeacherInfo";

import ZoomClass from "./components/portal/ZoomClass";

import Navigation from "./components/commons/Navigation";
import FooterApp from "./components/commons/FooterApp";

import Blog from "./components/Blogger/Blog";
import Services from "./components/commons/Services";
import CancelStatic from "./components/home/CancelStatic";
import SuccessStatic from "./components/home/SuccessStatic";
import SubscribeWithUs from "./components/commons/SubscribeWithUs";
import CheckoutForm from "./components/commons/CheckoutForm";
import { Container } from "react-bootstrap";
import Privacy from "./components/home/Privacy";
import TermsCondition from "./components/home/TermsCondition";
//
// follow https://www.youtube.com/watch?v=DO-pSysGItQ for React
//

function App() {
  return (
    <Router>
      <Container className="">
        <Navigation />
        {/* <HomePage/> */}

        <Switch>
          {/* <Route exact path={"/createv"}>
        <CreateVehicle/>
        </Route>
        <Route exact path={"/create"}>
        <CreateVehicles/>
        </Route>
        <Route exact path={"/createOption"}>
        <VehiclesList/>
        </Route>
        <Route exact path={"/zoom"}>
        <ZoomClass/>
        </Route> */}

          <Route exact path={"/"}>
            <HomePage />
          </Route>
          <Route exact path={"/blog"}>
            <Blog />
          </Route>
          <Route exact path={"/contact"}>
            <Contact />
          </Route>
          <Route exact path={"/service"}>
            <Services />
          </Route>
          <Route exact path={"/student"}>
            <StudentHome />
          </Route>
          <Route exact path={"/student/home"}>
            <StudentInfo />
          </Route>
          <Route exact path={"/teacher"}>
            <TeacherHome />
          </Route>
          <Route exact path={"/teacher/home"}>
            <TeacherInfo />
          </Route>
          <Route exact path={"/admin"}>
            <AdminHome />
          </Route>
          <Route exact path={"/course"}>
            <Courses />
          </Route>
          <Route exact path={"/course/checkout"}>
            <Checkout />
          </Route>
          <Route exact path={"/cancel"}>
            <CancelStatic />
          </Route>
          <Route exact path={"/success"}>
            <SuccessStatic />
          </Route>
          <Route exact path={"/subscribe"}>
            <SubscribeWithUs />
          </Route>
          <Route exact path={"/c"}>
            <CheckoutForm />
          </Route>
          <Route exact path={"/privacy"}>
            <Privacy />
          </Route>
          <Route exact path={"/terms&Condition"}>
            <TermsCondition />
          </Route>
        </Switch>

        <FooterApp />

        {/* <VehiclesList/>
      <CreateVehicle/> */}
      </Container>
    </Router>
  );
}

export default App;
