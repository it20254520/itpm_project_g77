import React, { Component } from 'react';
import axios from 'axios';
import img7 from '../images/event1.jpg';

export default class EventForBooking extends Component{
constructor(props){
super(props);

this.state={
posts:[]
};
}

componentDidMount(){
this.retrievePosts();
}

retrievePosts(){
axios.get("http://localhost:8070/event").then(res =>{
if(res.data.success){
this.setState({
posts:res.data.existingEvent
});
console.log(this.state.posts)
} 
});
}

onDelete = (id) =>{
axios.delete(`http://localhost:8070/event/delete/${id}`).then((res) =>{
alert("Delete Successfully");
this.retrievePosts();
})
}

filterData(posts,searchKey){

    const result = posts.filter((post) =>
    post.RoomTitle.toLowerCase().includes(searchKey)||
    //post.RoomNumber.includes(searchKey)||
    post.EventShortCode.toLowerCase().includes(searchKey)||
    post.Description.toLowerCase().includes(searchKey)
    )
    this.setState({posts:result})
    }
    
    handleSearchArea = (e) =>{
    
        const searchKey=e.currentTarget.value;
    
        axios.get(`http://localhost:8070/event`).then(res =>{
    if(res.data.success){
    
        this.filterData(res.data.existingEvent,searchKey)
    }
    });
    
    
    
    }
    


render() {
return (


<div style={{marginLeft:"100px",marginTop:"-1360px", backgroundImage:"./images/logoco.png",maxWidth:"100%",height:"auto"}}>


<div><button className="w3-button w3-block w3-green"><a href="/AddEventPackage" style={{textDecoration:'none',color:'white',fontSize:"20px",fontFamily:'Cursive',marginLeft:'10px'}}>Create Custormize Package</a></button></div>
{this.state.posts.map((posts,index) =>(
<div className="c1" style={{float:"left",width:"31%"}}>
<div class="card" style={{marginLeft:"100px",marginTop:"20px", backgroundImage:"./images/logoco.png",width:"300px" ,height:"420px"}}>


  <img src={img7} alt="Avatar" style={{width:"auto",height:"auto"}}/>
  <div class="container">
    

<p style={{width:"auto", height:"auto", marginBottom:"8px", textAlign:"justify", color:"#4d2e00"}}> {posts.Description}</p>
<p style={{width:"auto", height:"10px", marginBottom:"10px", color:"#cc7a00"}}>Category : {posts.Category}</p>
<p style={{width:"auto", height:"10px", marginBottom:"10px", color:"#cc7a00"}}>Capacity : {posts.Capacity}</p>
<p style={{width:"auto", height:"10px", marginBottom:"10px", color:"#804d00"}}>Hall : {posts.SelectHalls}</p>
<p style={{width:"auto", height:"10px", marginBottom:"10px", color:"#cc0000"}}>Decoration  : {posts.DecorationInformations}</p>
<p style={{width:"auto", height:"10px", marginBottom:"10px", color:"#4700b3"}}>Description: {posts.DiscribeYourEvent}</p>
<p style={{width:"auto", height:"10px", marginBottom:"10px", color:"#4700b3"}}>Discount : {posts.Discount}</p>
<a href="/addeventbooking"><input type="button" style={{width:"160px", marginLeft:"80px", background:"green", marginTop:"10px", color:"white"}} value="BOOKING NOW"></input></a>
<i className="bi bi-plus"></i>

<br></br>
</div>
</div>
</div>


))}

</div>
)
}
}
