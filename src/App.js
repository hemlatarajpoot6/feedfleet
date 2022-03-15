// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assests/styles/index.scss'
import Signup from './Pages/Signup'
import Login from "./Pages/Login";
import Forgot from './Pages/Forgot'
import Reset from './Pages/Reset'
import CreateAccount from './Pages/CreateAccount';
import FormFill from './Pages/FormFill';
import AccoundPlan from './Pages/AccountPlan';
import Campaign from './Pages/Home/Campaign';
import CreateFleet from './Pages/Home/RecordFleet';
import ThankYouPage from './Pages/Home/ThankuPage';
function App() {
  return (
    <div >
   <BrowserRouter>
      <Routes>
          <Route index element={<Login />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="forgot" element={<Forgot />} />
          <Route path="reset" element={<Reset />} />
          <Route path="createaccount" element={<CreateAccount />} />
          <Route path="formfill" element={<FormFill />} />
          <Route path="accountplan" element={<AccoundPlan />} />
          <Route path="home" element={<Campaign />} />
          <Route path="/createfleet" element={<CreateFleet />} />
          <Route path="/createfleet/thankupage" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
