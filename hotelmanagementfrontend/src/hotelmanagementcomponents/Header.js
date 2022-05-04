import React, { useContext } from "react";
import img1 from './images/logoco.png';
import { UserContext } from "../App";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import './DashboardCss.css';

const Header = () => {
  
  const { userData, setUserData } = useContext(UserContext);

  const logOut = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    <div>
    {userData.user ? (

<div>     
<title>DASHBOARD</title>
  <tbody id="body">
    <div class="container1">
      <nav class="navbar">
        <div class="nav_icon" onclick="toggleSidebar()">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div class="navbar__left" style={{marginTop:"-10px"}}>
          <a href="/RoomsForBooking"  style={{fontSize:"20px"}}> </a>
          <a href="/EventForBooking" style={{fontSize:"20px"}}>Event Booking</a>
          
          <a href="/menu"  style={{fontSize:"20px"}}></a>

          {/* <a class="active_link" href="#/"  style={{}}>Food Order</a> */}
        </div>
      
      <Nav>
        <LinkContainer to="/profile">
                 <Nav.Link ><p style={{color:"#a5aaad", fontSize:"20px"}}>WELCOME {userData.user.name}</p></Nav.Link>
             </LinkContainer>
                 <LinkContainer to="/profile" className="profile">
                 <Nav.Link><li class="w3-xxlarge" style={{marginTop:"-10px", color:"#a5aaad"}}><i class="fa fa-user-circle" aria-hidden="true"></i></li></Nav.Link>
             </LinkContainer>
                <LinkContainer to="/login" className="profile">
                  <Nav.Link onClick={logOut}><p style={{color:"#a5aaad", fontSize:"20px"}}>Log Out</p></Nav.Link>
                </LinkContainer>
              </Nav>
      </nav>
  
      
      <div id="sidebar">
        <div class="sidebar__title">
          <div class="sidebar__img">
            { /*<img src={img1} alt="logo" style={{height:"150px",width:"150px"}} />*/} 

          </div>
          <i
            onclick="closeSidebar()"
            class="fa fa-times"
            id="sidebarIcon"
            aria-hidden="true"
          ></i>
        </div>

        <div class="sidebar__menu">
          <div class="sidebar__link" style={{background:"DarkGoldenrod"}}>
            {/* <div class="sidebar__link active_menu_link"> */}
            <i class="fa fa-home"></i>
            <a href="/">Dashboard</a>
          </div>
          <h2>System Management</h2>
         
                    
          <div class="sidebar__link" style={{background:"#6C3810"}}>
          <div class="dropdown">
            <i class="fas fa-suitcase-rolling"></i>
            <span class="sidebar__link"><a style={{color:"#ffebcc"}}>Event Packagers </a></span>
            <div class="dropdown-content">
  <a href="/AvailableEvents"><p>Basic Package</p></a>
  <a href="/HomeEventPackage"><p>Custormized Package</p></a>
  </div>
  </div>
          </div>
          <div class="sidebar__link" style={{background:"#6C3810"}}>
            <i class="fas fa-hand-holding-usd"></i>
            <a href="/financehome">Financial </a>
          </div>
         
          <div class="sidebar__link" style={{background:"#6C3810"}}>
          <div class="dropdown">
            <i class="fas fa-suitcase-rolling"></i>
            <span class="sidebar__link"><a style={{color:"#ffebcc"}}>Schedule </a></span>
            <div class="dropdown-content">
  <a href="/RoomBooking"><p></p></a>
  <a href="/EventBooking"><p>Event Reservation</p></a>
  </div>
  </div>
          </div>
          
          <div class="sidebar__link" style={{background:"#6C3810"}}>
            <i class="fa fa-archive"></i>
            <a href="/StockItemHome">Stock </a>
          </div>
         
        
          {/* <div class="sidebar__logout" style={{background:"yellow"}}>
            <i class="fa fa-power-off"></i>
            <a href="#/">LogOut</a>
          </div>    */}
        </div>
      </div>
    </div>
    
    <footer style={{background:"black", width:"auto", height:"60px", marginBottom:"-10px", marginRight:"-1000px"}}>
      <div><h4 style={{color:"white", marginLeft:"600px", fontSize:"20px"}}><br/></h4></div>
      </footer>

 </tbody>
 

</div>


              ) : (
    

     <div>
<div className="dashboardbackground1">
  </div>
  <div style={{marginTop:"-910px"}}>
  <h1 style={{color:"orange", textAlign:"center", fontSize:"50px", marginTop:"112px"}}><b>CandyLand Events</b></h1>
  <a href="/login"><button style={{float:"left", width:"50%", textAlign:"center", marginTop:"20px", background:"blue", height:"100px", opacity:"0.5", hover:"yellow"}}> <h4 style={{color:"white"}}><b>Login to the system</b></h4></button></a>

  <a href="/register"><button style={{float:"left", width:"50%", textAlign:"center", marginTop:"20px", background:"green", height:"100px", opacity:"0.5"}}><h4 style={{color:"white"}}><b>Register to the system</b></h4></button></a>
</div>

</div>

       
                
)}
</div>
)


}

export default Header;


