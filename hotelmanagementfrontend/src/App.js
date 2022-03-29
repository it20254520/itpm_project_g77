import { createContext, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import axios from 'axios'

import Header from './hotelmanagementcomponents/Header'

import Register from './hotelmanagementcomponents/auth/Register'
import Login from './hotelmanagementcomponents/auth/Login'
import Profile from './hotelmanagementcomponents/auth/Profile'

import RegisterCustomer from './hotelmanagementcomponents/auth/RegisterCustomer'
import LoginCustomer from './hotelmanagementcomponents/auth/LoginCustomer'

import Dashboard from './hotelmanagementcomponents/Dashboard';
import CustomerDashboard from './hotelmanagementcomponents/CustomerDashboard';

//Room Management
import AddRoom from './hotelmanagementcomponents/roommanagementcomponets/AddRoom';
import EditRoom from './hotelmanagementcomponents/roommanagementcomponets/EditRoom';
import AvailableRooms from './hotelmanagementcomponents/roommanagementcomponets/AvailableRooms';
import RoomsForBooking from './hotelmanagementcomponents/roommanagementcomponets/RoomsForBooking';
import PostRoomDetails from './hotelmanagementcomponents/roommanagementcomponets/PostRoomDetails';
import RoomsCategory from './hotelmanagementcomponents/roommanagementcomponets/RoomsCategory';
import RoomMonthlyReport from './hotelmanagementcomponents/roommanagementcomponets/RoomMonthlyReport';

//Inventory Management
 import StockItemHome from './hotelmanagementcomponents/inventorymanagementcomponents/StockItemHome';
 import StockItemsCreate from './hotelmanagementcomponents/inventorymanagementcomponents/StockItemsCreate';
 import StockItemsEdit from './hotelmanagementcomponents/inventorymanagementcomponents/StockItemsEdit';
 import StockItemsDetails from './hotelmanagementcomponents/inventorymanagementcomponents/StockItemsDetails';
 import I_OrderHome from './hotelmanagementcomponents/inventorymanagementcomponents/I_OrderHome';
 import I_OrderEdit from './hotelmanagementcomponents/inventorymanagementcomponents/I_OrderEdit';
 import I_OrderCreate from './hotelmanagementcomponents/inventorymanagementcomponents/I_OrderCreate';
 import SupplierDetails from './hotelmanagementcomponents/inventorymanagementcomponents/SupplierDetails';
 import SupplierEdit from './hotelmanagementcomponents/inventorymanagementcomponents/SupplierEdit';
 import SupplierCreate from './hotelmanagementcomponents/inventorymanagementcomponents/SupplierCreate';
 import InventoryPDF from './hotelmanagementcomponents/inventorymanagementcomponents/InventoryPDF';

 //Reservation Management
 import CreateBooking from './hotelmanagementcomponents/reservationmanagementcomponents/CreateBooking';
import EditBooking from './hotelmanagementcomponents/reservationmanagementcomponents/EditBooking';
import RoomBooking from './hotelmanagementcomponents/reservationmanagementcomponents/RoomBooking';
import BookingDetails from './hotelmanagementcomponents/reservationmanagementcomponents/BookingDetails';

import CreateEBooking from './hotelmanagementcomponents/reservationmanagementcomponents/CreateEBooking';
import EditEBooking from './hotelmanagementcomponents/reservationmanagementcomponents/EditEBooking';
import EventBooking from './hotelmanagementcomponents/reservationmanagementcomponents/EventBooking';
import EBookingDetails from './hotelmanagementcomponents/reservationmanagementcomponents/EBookingDetails';

//Employee Management
import AddEmployee from './hotelmanagementcomponents/employeemanagementcomponents/AddEmployee';
import UpdateEmployee from './hotelmanagementcomponents/employeemanagementcomponents/UpdateEmployee';
import EmployeeDetailsHome from './hotelmanagementcomponents/employeemanagementcomponents/EmployeeDetailsHome';
import ReadEmployee from './hotelmanagementcomponents/employeemanagementcomponents/ReadEmployee';
import EmployeeHome from './hotelmanagementcomponents/employeemanagementcomponents/EmployeeHome';

import CreateLeave from './hotelmanagementcomponents/employeemanagementcomponents/CreateLeave';
import EditLeave from './hotelmanagementcomponents/employeemanagementcomponents/EditLeave';
import LeaveHome from './hotelmanagementcomponents/employeemanagementcomponents/LeaveHome';
import ReadLeave from './hotelmanagementcomponents/employeemanagementcomponents/ReadLeave';
import promotions from './hotelmanagementcomponents/employeemanagementcomponents/promotions';

//Event Management
import AddEvent from './hotelmanagementcomponents/eventmanagementcomponents/AddEvent';
import AddbasicPackage from './hotelmanagementcomponents/eventmanagementcomponents/AddbasicPackage';
import EditEvent from './hotelmanagementcomponents/eventmanagementcomponents/EditEvent';
import AvailableEvents from './hotelmanagementcomponents/eventmanagementcomponents/AvailableEvents';
import EventForBooking from './hotelmanagementcomponents/eventmanagementcomponents/EventForBooking';
import Home1 from './hotelmanagementcomponents/eventmanagementcomponents/Home1';
import PostEventDetails from './hotelmanagementcomponents/eventmanagementcomponents/PostEventDetails';

import CreateEventPackage from './hotelmanagementcomponents/eventmanagementcomponents/CreateEventPackage';
import EditEventPackage from './hotelmanagementcomponents/eventmanagementcomponents/EditEventPackage';
import HomeEventPackage from './hotelmanagementcomponents/eventmanagementcomponents/HomeEventPackage';
import PostEventPackageDetails from './hotelmanagementcomponents/eventmanagementcomponents/PostEventPackageDetails';

//Restaurant Management
import AddMenu from './hotelmanagementcomponents/restuarantmanagementcomponents/AddMenu';
import AddOrders from './hotelmanagementcomponents/restuarantmanagementcomponents/AddOrders';
import EditOrder from './hotelmanagementcomponents/restuarantmanagementcomponents/EditOrder';
import MenuDetails from './hotelmanagementcomponents/restuarantmanagementcomponents/MenuDetails';
import Menu from './hotelmanagementcomponents/restuarantmanagementcomponents/Menu';
import Summary from './hotelmanagementcomponents/restuarantmanagementcomponents/Summary';
import UpdateMenu from './hotelmanagementcomponents/restuarantmanagementcomponents/UpdateMenu';
import OrderDetails from './hotelmanagementcomponents/restuarantmanagementcomponents/OrderDetails';
import ReOrder from './hotelmanagementcomponents/restuarantmanagementcomponents/ReOrder';


//Transport Management
import CreateTransport from './hotelmanagementcomponents/transportmanagementcomponents/CreateTransport';
import EditTransport from './hotelmanagementcomponents/transportmanagementcomponents/EditTransport';
import HomeTransport from './hotelmanagementcomponents/transportmanagementcomponents/HomeTransport';
import PostTransportDetails from './hotelmanagementcomponents/transportmanagementcomponents/PostTransportDetails';

//Financial Management
import Home from './hotelmanagementcomponents/financialmanagementcomponents/expensescomponents/Home';
import CreatePost from './hotelmanagementcomponents/financialmanagementcomponents/expensescomponents/CreatePost';
import EditPost from './hotelmanagementcomponents/financialmanagementcomponents/expensescomponents/EditPost';
import PostDetails from './hotelmanagementcomponents/financialmanagementcomponents/expensescomponents/PostDetails';
// import Header from './hotelmanagementcomponents/financialmanagementcomponents/expensescomponents/Header';
import Home2 from './hotelmanagementcomponents/financialmanagementcomponents/incomecomponents/Home2';
import CreatePost2 from './hotelmanagementcomponents/financialmanagementcomponents/incomecomponents/CreatePost2';
import EditPost2 from './hotelmanagementcomponents/financialmanagementcomponents/incomecomponents/EditPost2';
import PostDetails2 from './hotelmanagementcomponents/financialmanagementcomponents/incomecomponents/PostDetails2';
import Home3 from './hotelmanagementcomponents/financialmanagementcomponents/salarycomponents/Home3';
import CreatePost3 from './hotelmanagementcomponents/financialmanagementcomponents/salarycomponents/CreatePost3';
import EditPost3 from './hotelmanagementcomponents/financialmanagementcomponents/salarycomponents/EditPost3';
import PostDetails3 from './hotelmanagementcomponents/financialmanagementcomponents/salarycomponents/PostDetails3';

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
              

            {/* Room Management */}
  <Route path="/RoomsForBooking" exact component={RoomsForBooking}></Route>
  <Route path="/addroom" exact component={AddRoom}></Route>
  <Route path="/editroom/:id" exact component={EditRoom}></Route>
  <Route path="/room/:id" exact component={PostRoomDetails}></Route>
  <Route path="/category" exact component={RoomsCategory}></Route>
  <Route path="/AvailableRooms" exact component={AvailableRooms}></Route>
  <Route path="/RoomMonthlyReport" exact component={RoomMonthlyReport}></Route> 

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

                <Route path="/EventBooking" exact component={EventBooking}></Route>
                <Route path="/addeventbooking"  component={CreateEBooking}></Route>
                <Route path="/editeventbooking/:id" component={EditEBooking}></Route>
                <Route path="/EBooking/:id" component={EBookingDetails}></Route>

                {/* Employee Management */}
                <Route path="/EmployeeDetailsHome" exact component={EmployeeDetailsHome}></Route>
  <Route path="/addemployeedetails" exact component={AddEmployee}></Route>
  <Route path="/editemployeedetails/:id" exact component={UpdateEmployee}></Route>
  <Route path="/detail/:id" exact component={ReadEmployee}></Route>
  <Route path="/employee" exact component={EmployeeHome}></Route>

  <Route path="/LeaveHome" exact component={LeaveHome}></Route>
  <Route path="/addleave" exact component={CreateLeave}></Route>
  <Route path="/editleave/:id" exact component={EditLeave}></Route>
  <Route path="/leave/:id" exact component={ReadLeave}></Route>
  <Route path="/promotions" exact component={promotions}></Route>
       
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

  {/* Restaurant Management */}
  <Route path="/menu" exact component={Menu}></Route>
  <Route path="/a1" exact component={Summary}></Route>
  <Route path="/b" exact component={OrderDetails}></Route>
  <Route path="/add1" exact component={AddMenu}></Route>
  <Route path="/add2" exact component={AddOrders}></Route>
  <Route path="/edit/:id" exact component={EditOrder}></Route>
  <Route path="/update/:id" exact component={UpdateMenu}></Route>
  <Route path="/post/:id" exact component={OrderDetails}></Route>
  <Route path="/add3" exact component={ReOrder}></Route>
  <Route path="/a2" exact component={MenuDetails}></Route>

  {/* Transport Management */}
  <Route path="/transporthome" exact component={HomeTransport}></Route>
  <Route path="/addtransport" exact component={CreateTransport}></Route>
  <Route path="/edittransport/:id" exact component={EditTransport}></Route>
  <Route path="/posttransport/:id" exact component={PostTransportDetails}></Route>

  {/* Financial Management */}
  <Route path="/homeexpense" exact component={Home}></Route>
         <Route path="/addexpense" exact component={CreatePost}></Route>
         <Route path="/editexpense/:id" exact component={EditPost}></Route>
         <Route path="/expenses/:id" exact component={PostDetails}></Route>
         
         <Route path="/homeincome" exact component={Home2}></Route>
         <Route path="/addincome" exact component={CreatePost2}></Route>
         <Route path="/editincome/:id" exact component={EditPost2}></Route>
         <Route path="/income/:id" exact component={PostDetails2}></Route>

         <Route path="/homesalary" exact component={Home3}></Route>
         <Route path="/addsalary" exact component={CreatePost3}></Route>
         <Route path="/editsalary/:id" exact component={EditPost3}></Route>
         <Route path="/salary/:id" exact component={PostDetails3}></Route>
        </Container>
      </Router>

      <Router>



        
      </Router>
    </UserContext.Provider>
  );
}

export default App;
