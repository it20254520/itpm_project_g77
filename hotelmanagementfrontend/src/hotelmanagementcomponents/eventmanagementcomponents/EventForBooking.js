import React, { Component } from 'react';
import axios from 'axios';


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


<div className="container" style={{marginLeft:"100px", marginTop:"-1360px",backgroundImage:"./images/logoco.png",maxWidth:"100%"}}>
<div className="row">
<div className="col-lg-9 mt-2 mb-2">

<h4>Booking Events</h4>
</div>
 </div>
<table className="table table-hover">
<thead>
<tr>
<th Scope="col">#</th>
<th Scope="col">Category</th>
<th Scope="col">Capacity</th>
<th Scope="col">Select Halls</th>
<th Scope="col">Serving</th>
<th Scope="col">Select Seating Styles</th>
<th Scope="col">Decoration Informations</th>
<th Scope="col">Add Services</th>
<th Scope="col">Additional Services</th>
<th Scope="col">Discribe Your Event</th>

</tr>
</thead>

<tbody>
{this.state.posts.map((posts,index) =>(
<tr key={index}>
<th scope="row">{index+1}</th>
<td>
{posts.Category}
</td>

<td>{posts.Capacity}</td>
<td>{posts.SelectHalls}</td>
<td>{posts.Serving}</td>
<td>{posts.SelectSeatingStyles}</td>
<td>{posts.DecorationInformations}</td>
<td>{posts.AddServices}</td>
<td>{posts.AdditionalServices}</td>
<td>{posts.DiscribeYourEvent}</td>

<a href="/addeventbooking"><button style={{background:"green", color:"white"}}>Booking Event</button></a>
</tr>
))}
</tbody>
</table>
<br/>
<a href="/addeventpackage"><button style={{background:"green", color:"white"}}>Custormize your Event</button></a>
</div>
)
}
}
