import React, { Component } from 'react';
import './DashboardCss.css';
import img45 from './images/img45.jpg';
import img3 from './images/img465.jpg';




export default class Dashboard extends Component{



render() {
return (

<div className="dashboardbackground" style={{marginLeft:"100px", marginTop:"-1360px"}}>


<div class="w3-content" style={{maxWidth:"1400px"}}>

<header class="w3-container w3-center w3-padding-32"> 
  <h1><b>CandyLand Events</b></h1>
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
      <p style={{textAlign:"justify"}}> We specializes in a range of Event management solutions from weddings ,conferences, exhibitions and other corporate functions alongside private functions such as Birthdays, Dinner dances and batch reunions etc. Our professional team comprising of energetic, youthful and dedicated individuals, who are available 24 hours of the day to take care of any last minute changes and to manage on site coordination on the day of the event. From the moment the initial briefings are carried out, you can simply sit back relax and count on our experienced and dedicated team of Event Planners to create a stress free and tailor made event. Our team will take you through each aspect leading to the event, from deciding on venues and themes to other useful information to provide you with a comprehensive and customized result that only the best in the island can provide.Speak to our experienced, committed and enthusiastic team today regarding your upcoming event!</p>
      
    </div>
  </div>
  <hr/>



</div>


<div class="w3-col l4">

  <div class="w3-card w3-margin w3-margin-top" style={{width:"400px"}}>
  <img src={img45} style={{width:"100%"}}/>
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
      
      </li></a>
      <a href="" style={{textDecoration:"none"}}><li class="w3-padding-16">
      <li class="w3-xxlarge"><i class="	fas fa-door-open"></i>
        <span class="w3-large" style={{marginLeft:"50px"}}>Event Booking</span><br/></li>
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


