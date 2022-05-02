import { createContext, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import axios from 'axios'

import Header from './eventmanagementcomponents/Header'

import Register from './eventmanagementcomponents/auth/Register'
import Login from './eventmanagementcomponents/auth/Login'
import Profile from './eventmanagementcomponents/auth/Profile'

import RegisterCustomer from './eventmanagementcomponents/auth/RegisterCustomer'
import LoginCustomer from './eventmanagementcomponents/auth/LoginCustomer'

import Dashboard from './eventmanagementcomponents/Dashboard';
import CustomerDashboard from './eventmanagementcomponents/CustomerDashboard';


//Inventory Management
 import StockItemHome from './eventmanagementcomponents/inventorymanagementcomponents/StockItemHome';
 import StockItemsCreate from './eventmanagementcomponents/inventorymanagementcomponents/StockItemsCreate';
 import StockItemsEdit from './eventmanagementcomponents/inventorymanagementcomponents/StockItemsEdit';
 import StockItemsDetails from './eventmanagementcomponents/inventorymanagementcomponents/StockItemsDetails';
 import I_OrderHome from './eventmanagementcomponents/inventorymanagementcomponents/I_OrderHome';
 import I_OrderEdit from './eventmanagementcomponents/inventorymanagementcomponents/I_OrderEdit';
 import I_OrderCreate from './eventmanagementcomponents/inventorymanagementcomponents/I_OrderCreate';
 import SupplierDetails from './eventmanagementcomponents/inventorymanagementcomponents/SupplierDetails';
 import SupplierEdit from './eventmanagementcomponents/inventorymanagementcomponents/SupplierEdit';
 import SupplierCreate from './eventmanagementcomponents/inventorymanagementcomponents/SupplierCreate';
 import InventoryPDF from './eventmanagementcomponents/inventorymanagementcomponents/InventoryPDF';

 //Reservation Management
 import CreateBooking from './eventmanagementcomponents/reservationmanagementcomponents/CreateBooking';
import EditBooking from './eventmanagementcomponents/reservationmanagementcomponents/EditBooking';
import RoomBooking from './eventmanagementcomponents/reservationmanagementcomponents/RoomBooking';
import BookingDetails from './eventmanagementcomponents/reservationmanagementcomponents/BookingDetails';
import MonthlyReservationReport from './eventmanagementcomponents/reservationmanagementcomponents/MonthlyReservationReport';


import CreateEBooking from './eventmanagementcomponents/reservationmanagementcomponents/CreateEBooking';
import EditEBooking from './eventmanagementcomponents/reservationmanagementcomponents/EditEBooking';
import EventBooking from './eventmanagementcomponents/reservationmanagementcomponents/EventBooking';
import EBookingDetails from './eventmanagementcomponents/reservationmanagementcomponents/EBookingDetails';
import MonthlyReservationEReport from './eventmanagementcomponents/reservationmanagementcomponents/MonthlyReservationEReport';




//Event Management
import AddEvent from './eventmanagementcomponents/eventmanagementcomponents/AddEvent';
import AddbasicPackage from './eventmanagementcomponents/eventmanagementcomponents/AddbasicPackage';
import EditEvent from './eventmanagementcomponents/eventmanagementcomponents/EditEvent';
import AvailableEvents from './eventmanagementcomponents/eventmanagementcomponents/AvailableEvents';
import EventForBooking from './eventmanagementcomponents/eventmanagementcomponents/EventForBooking';
import Home1 from './eventmanagementcomponents/eventmanagementcomponents/Home1';
import PostEventDetails from './eventmanagementcomponents/eventmanagementcomponents/PostEventDetails';

import CreateEventPackage from './eventmanagementcomponents/eventmanagementcomponents/CreateEventPackage';
import EditEventPackage from './eventmanagementcomponents/eventmanagementcomponents/EditEventPackage';
import HomeEventPackage from './eventmanagementcomponents/eventmanagementcomponents/HomeEventPackage';
import PostEventPackageDetails from './eventmanagementcomponents/eventmanagementcomponents/PostEventPackageDetails';
import MonthlyReport from './eventmanagementcomponents/eventmanagementcomponents/MonthlyReport';







//Financial Management
import finance from'./eventmanagementcomponents/financialmanagementcomponents/expensescomponents/financehome'
import Home from './eventmanagementcomponents/financialmanagementcomponents/expensescomponents/Home';
import CreatePost from './eventmanagementcomponents/financialmanagementcomponents/expensescomponents/CreatePost';
import EditPost from './eventmanagementcomponents/financialmanagementcomponents/expensescomponents/EditPost';
import PostDetails from './eventmanagementcomponents/financialmanagementcomponents/expensescomponents/PostDetails';
import expenseReport from './eventmanagementcomponents/financialmanagementcomponents/expensescomponents/expenseReport';
// import Header from './eventmanagementcomponents/financialmanagementcomponents/expensescomponents/Header';
import Home2 from './eventmanagementcomponents/financialmanagementcomponents/incomecomponents/Home2';
import CreatePost2 from './eventmanagementcomponents/financialmanagementcomponents/incomecomponents/CreatePost2';
import EditPost2 from './eventmanagementcomponents/financialmanagementcomponents/incomecomponents/EditPost2';
import PostDetails2 from './eventmanagementcomponents/financialmanagementcomponents/incomecomponents/PostDetails2';
import incomeReport from './eventmanagementcomponents/financialmanagementcomponents/incomecomponents/incomeReport';

import Home3 from './eventmanagementcomponents/financialmanagementcomponents/salarycomponents/Home3';
import CreatePost3 from './eventmanagementcomponents/financialmanagementcomponents/salarycomponents/CreatePost3';
import EditPost3 from './eventmanagementcomponents/financialmanagementcomponents/salarycomponents/EditPost3';
import PostDetails3 from './eventmanagementcomponents/financialmanagementcomponents/salarycomponents/PostDetails3';
import financeReport from './eventmanagementcomponents/financialmanagementcomponents/salarycomponents/financeReport';

export const UserContext = createContext()

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  })

  useEffect(() => {
    const isLoggedIn = async () => {
      let token = localStorage.getItem("auth-token")
      if (token == null){
        localStorage.setItem("auth-token", "")
        token = ""
      }

      const tokenResponse = await axios.post(
        '/api/users/tokenIsValid', 
        null, 
        {headers: {"auth-token": token}}
      )

      console.log(tokenResponse.data)
      if(tokenResponse.data){
        const userResponse = await axios.get('/api/users/profile',
          {headers: {'auth-token': token}}
        )
        setUserData({
          token: token,
          user: userResponse.data
        })
      }
    }
    isLoggedIn()
  }, [])

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <Router>
        <Header />
        <Container>  
        <Route path='/login' component={Login} />      
        <Route path="/" exact component={Dashboard}></Route>
        <Route path="/CustomerDashboard" exact component={CustomerDashboard}></Route>
            <Route path='/register' component={Register} />
            <Route path='/profile' component={Profile} /> 

            <Route path='/registercustomer' component={RegisterCustomer} />
            <Route path='/logincustomer' component={LoginCustomer} />
              

  {/* //Inventory Management */}

   <Route path="/StockItemHome" exact component={StockItemHome}></Route>
       <Route path="/addstockitems" component={StockItemsCreate}></Route>
       <Route path="/editstockitems/:id" component={StockItemsEdit}></Route>
       <Route path="/stockitem/:id" component={StockItemsDetails}></Route>
       <Route path="/inventoryorder" component={I_OrderHome}></Route>
       <Route path="/addiorders" component={I_OrderCreate}></Route>
       <Route path="/invordersedit/:id" component={I_OrderEdit}></Route>
       <Route path="/invsupplierDetails" component={SupplierDetails}></Route>
       <Route path="/supplierEdit/:id" component={SupplierEdit}></Route>
       <Route path="/addsuppliers" component={SupplierCreate}></Route>
       <Route path="/inventoryreport" component={InventoryPDF}></Route>

{/* //Reservation Management */}
<Route path="/RoomBooking" exact component={RoomBooking}></Route>
                <Route path="/addroombooking"  component={CreateBooking}></Route>
                <Route path="/editroombooking/:id" component={EditBooking}></Route>
                <Route path="/Booking/:id" component={BookingDetails}></Route>
                <Route path="/MonthlyReservationReport" component={MonthlyReservationReport}></Route>

                <Route path="/EventBooking" exact component={EventBooking}></Route>
                <Route path="/addeventbooking"  component={CreateEBooking}></Route>
                <Route path="/editeventbooking/:id" component={EditEBooking}></Route>
                <Route path="/EBooking/:id" component={EBookingDetails}></Route>
                <Route path="/MonthlyReservationEReport" component={MonthlyReservationEReport}></Route>

             
       
       {/* Event Management */}
       <Route path="/eventmanagement" exact component={Home1}></Route>
<Route path="/AvailableEvents" exact component={AvailableEvents}></Route>
<Route path="/EventForBooking" exact component={EventForBooking}></Route>
<Route path="/AddEvent" exact component={AddEvent}></Route>
<Route path="/AddbasicPackage" exact component={AddbasicPackage}></Route>
<Route path="/EditEvent/:id" exact component={EditEvent}></Route>
  <Route path="/event/:id" exact component={PostEventDetails}></Route>

  <Route path="/HomeEventPackage" exact component={HomeEventPackage}></Route>
  <Route path="/addeventpackage" exact component={CreateEventPackage}></Route>
  <Route path="/editeventpackage/:id" exact component={EditEventPackage}></Route>
  <Route path="/posteventpackage/:id" exact component={PostEventPackageDetails}></Route>
  <Route path="/MonthlyReport" exact component={MonthlyReport}></Route>


  

  {/* Financial Management */}
        <Route path="/financehome" exact component={finance}></Route>
        <Route path="/homeexpense" exact component={Home}></Route>
         <Route path="/addexpense" exact component={CreatePost}></Route>
         <Route path="/editexpense/:id" exact component={EditPost}></Route>
         <Route path="/expenses/:id" exact component={PostDetails}></Route>
         <Route path="/expenseReport" exact component={expenseReport}></Route>
         
         <Route path="/homeincome" exact component={Home2}></Route>
         <Route path="/addincome" exact component={CreatePost2}></Route>
         <Route path="/editincome/:id" exact component={EditPost2}></Route>
         <Route path="/income/:id" exact component={PostDetails2}></Route>
         <Route path="/incomeReport" exact component={incomeReport}></Route>

         <Route path="/homesalary" exact component={Home3}></Route>
         <Route path="/addsalary" exact component={CreatePost3}></Route>
         <Route path="/editsalary/:id" exact component={EditPost3}></Route>
         <Route path="/salary/:id" exact component={PostDetails3}></Route>
         <Route path="/financeReport" exact component={financeReport}></Route>
        </Container>
      </Router>

      <Router>



        
      </Router>
    </UserContext.Provider>
  );
}

export default App;
