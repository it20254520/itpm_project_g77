import React, { Component } from 'react';
import axios from 'axios';


export default class AvailableEvents extends Component{
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
    post.Category.toLowerCase().includes(searchKey)||
    post.SelectHalls.toLowerCase().includes(searchKey)||
    post.Capacity.toLowerCase().includes(searchKey)
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

<h4>All Events</h4>
</div>
<div className="col-lg-3 mt-2 mb-2" >
    <input
    className="form-control"
    type="search"
    placeholder="Search"
    name="searchQuery"
    onChange={this.handleSearchArea}>
    </input>
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
<a href={`/event/${posts._id}`} style={{textDecoration:'none'}}>
{posts.Category}

</a>
</td>

<td>{posts.Capacity}</td>
<td>{posts.SelectHalls}</td>
<td>{posts.Serving}</td>
<td>{posts.SelectSeatingStyles}</td>
<td>{posts.DecorationInformations}</td>
<td>{posts.AddServices}</td>
<td>{posts.AdditionalServices}</td>
<td>{posts.DiscribeYourEvent}</td>


<td>
<a className="btn btn-warning"  href={`/EditEvent/${posts._id}`} style={{height:"50px"}}>
<i className="fas fa-edit" style={{marginLeft:"10px"}}></i>&nbsp;Edit
</a>
&nbsp;
<a className="btn btn-danger" href="/AvailableEvents" onClick={() =>this.onDelete(posts._id)} style={{height:"50px"}}>
<i className="fas fa-trash-alt"></i>&nbsp;Delete
</a>
</td>
</tr>
))}
</tbody>
</table>
<br/>
<button className="btn btn-success"><a href="/AddEvent" style={{textDecoration:'none',color:'white'}}>Create New Package</a></button>

</div>
)
}
}
