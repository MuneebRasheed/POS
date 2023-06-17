/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import Products from "views/Products"
import FillingPaanel from "views/FillingPannel"
import FuelTank from "views/FuelTank"
import Nozzels from "views/Nozzels"
import Suppliers from "views/Suppliers"
import CarriageCompany from "views/CarriageCompany"
import Employee from "views/Employee"
import Customers from "views/Customers"
import FuelPurchase from "views/FuelPurchase";
import SalesMan from "views/SalesMan";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: <Icons />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: <Maps />,
  //   layout: "/admin",
  // },
  {
    path: "/products",
    name: "Products",
    icon: "ni ni-circle-08 text-pink",
    component: <Products />,
    layout: "/admin",
  },
  {
    path: "/fuelTank",
    name: "Fuel Tank",
    icon: "ni ni-circle-08 text-pink",
    component: <FuelTank />,
    layout: "/admin",
  },
  {
    path: "/fillingPannel",
    name: "Filling Pannel(Dispenser)",
    icon: "ni ni-circle-08 text-pink",
    component: <FillingPaanel />,
    layout: "/admin",
  },
  {
    path: "/nozzels",
    name: "Nozzels",
    icon: "ni ni-circle-08 text-pink",
    component: <Nozzels />,
    layout: "/admin",
  },
  {
    path: "/suppliers",
    name: "Suppliers",
    icon: "ni ni-circle-08 text-pink",
    component: <Suppliers />,
    layout: "/admin",
  },
  {
    path: "/carriageCompany",
    name: "Carriage Company",
    icon: "ni ni-circle-08 text-pink",
    component: <CarriageCompany />,
    layout: "/admin",
  },
  {
    path: "/saleMan",
    name: "Sales Man",
    icon: "ni ni-circle-08 text-pink",
    component: <SalesMan />,
    layout: "/admin",
  },
  {
    path: "/customers",
    name: "Customers",
    icon: "ni ni-circle-08 text-pink",
    component: <Customers />,
    layout: "/admin",
  },
  {
    path: "/employee",
    name: "Employee",
    icon: "ni ni-circle-08 text-pink",
    component: <Employee />,
    layout: "/admin",
  },
  {
    path: "/fuelPurchase",
    name: "Fuel Purchase",
    icon: "ni ni-circle-08 text-pink",
    component: <FuelPurchase />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/admin",
  },
  
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: <Tables />,
  //   layout: "/admin",
  // },
  {
    path: "/login",
    name: "Logout",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: <Register />,
  //   layout: "/auth",
  // },
  
];
export default routes;
