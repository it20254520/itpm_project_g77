import React, { Component } from 'react';
import './DashboardCss.css';
import img2 from './images/room1.jpg';
import img3 from './images/imagebackground.jpg';




export default class Dashboard extends Component{



render() {
return (

<div className="dashboardbackground" style={{marginLeft:"100px", marginTop:"-1360px"}}>


<div class="w3-content" style={{maxWidth:"1400px"}}>

<header class="w3-container w3-center w3-padding-32"> 
  <h1><b>AMALYA REACH HOLIDAY RESORT</b></h1>
  <p>Welcome to the your next home</p>
</header>


<div class="w3-row">


<div class="w3-col l8 s12">

  <div class="w3-card-4 w3-margin w3-white">
    <img src={img3} alt="Nature" style={{width:"100%", height:"350px"}}/>
    <div class="w3-container">
      <h3><b>Who Are We?</b></h3>
      <h5>description</h5>
    </div>

    <div class="w3-container">
      <p style={{textAlign:"justify"}}>Finding the right space for your event is never easy and getting advice from friends, family, clients, co-workers or anyone is always great. we at amalya provides you a life time experience with our brand new wedding reception hallsand holiday resort which can be used for a memorable day in your life.

First, it's always best to shop around for several locations to see what's on offer (and within budget) and always consider booking your party venue at least several months to a year in advance, say the experts. Take your time, and don't settle for the first location that comes along. Unusual venues like historic mansions, galleries, and even sailing yachts can provide memorable party spaces. Before you make the final decision, also remember to take into account who is on your guest list, and how accessible it may be for everyone involved.</p>
      
    </div>
  </div>
  <hr/>



</div>


<div class="w3-col l4">

  <div class="w3-card w3-margin w3-margin-top" style={{width:"400px"}}>
  <img src={img2} style={{width:"100%"}}/>
    <div class="w3-container w3-white">
      <h4><b>About Us</b></h4>
      <p className="fas fa-building"> No:556, Moragahahena, Pitipana North, Homagama, Sri Lanka</p><br/>
      <p className="fa fa-fax"> Tel/Fax :94 11 2748913, 4404040</p><br/>
      <p className="fas fa-phone"> Mobile:77 7743612</p><br/>
      <p className="fas fa-wallet"> Email:info@amalyareach.com</p><br/>
    </div>
  </div>
  

  <div class="w3-card w3-margin">
    <div class="w3-container w3-padding">
      <h4>Popular Links</h4>
    </div>
    <ul class="w3-ul w3-hoverable w3-white">
      <a href="/RoomsForBooking" style={{textDecoration:"none"}}><li class="w3-padding-16">
      <li class="w3-xxlarge"><i class="	fas fa-bed" aria-hidden="true"></i>
        <span class="w3-large" style={{marginLeft:"50px"}}>Room Booking</span><br/></li>
      </li></a>
      <a href="" style={{textDecoration:"none"}}><li class="w3-padding-16">
      <li class="w3-xxlarge"><i class="	fas fa-door-open"></i>
        <span class="w3-large" style={{marginLeft:"50px"}}>Event Booking</span><br/></li>
      </li></a>
      <a href="" style={{textDecoration:"none"}}><li class="w3-padding-16">
      <li class="w3-xxlarge"><i class="fas fa-utensils"></i>
        <span class="w3-large" style={{marginLeft:"70px"}}>Food Order</span><br/></li>
      </li></a> 
       
    </ul>
  </div>
  <hr/> 
 

  

</div>


</div><br/>


</div>


</div>


)
}
}


