import React, { Component } from 'react';
import axios from 'axios';

export default class RoomBooking extends Component{
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
  axios.get("http://localhost:8070/Booking").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingBooking
      });

      console.log(this.state.posts);  
    }
  });
}
onDelete = (id) =>{
  axios.delete(`http://localhost:8070/Booking/delete/${id}`).then((res) =>{
    alert("Delete Successfully");
    this.retrievePosts();
  })
}
filterData(posts,searchKey){

  const result = posts.filter((post) =>
  post.First_name.toLowerCase().includes(searchKey)||
  post.Last_name.toLowerCase().includes(searchKey)
 
  )
  this.setState({posts:result})
  }
  
  handleSearchArea = (e) =>{
  
      const searchKey=e.currentTarget.value;
  
      axios.get("http://localhost:8070/Booking").then(res =>{
        if(res.data.success){
  
      this.filterData(res.data.existingBooking,searchKey)
    }
  });
}
  
  render() {
  return (
  
      <div className="container" style={{marginLeft:"100px", marginTop:"-1360px"}}>
          <div className="row">
      <div className="col-lg-9 mt-2 mb-2">
      
      <h4>All Room Booking Details</h4>
      </div>
      <div className="col-lg-3 mt-2 mb-2">
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
           <th scope="col">#</th>
           <th scope="col">First_name</th>
           <th scope="col">Last_name</th>
           <th scope="col">Email</th>
           <th scope="col">Mobile</th>
           <th scope="col">NIC_number</th>
           <th scope="col">Adult</th>
           <th scope="col">Children</th>
           {/* <th scope="col">Singale_room</th>
           <th scope="col">Double_room</th>
           <th scope="col">Triple_room</th>
           <th scope="col">Check_in</th>
           <th scope="col">Check_out</th>
           <th scope="col">Action</th> */}
           </tr>
           </thead>
           <tbody>
             {this.state.posts.map((posts,index) =>(
               <tr key={index}>
                 <th scope="row">{index+1}</th>
                 <td>
                     
                 <a href={`/Booking/${posts._id}`} style={{textDecoration:'none'}}> 
                      {posts.First_name}
                      </a>
                      </td>
                 <td> {posts.Last_name}</td>
                 <td> {posts.Email}</td>
                 <td> {posts.Mobile}</td>
                 <td> {posts.NIC_number}</td>
                 <td> {posts.Adult}</td>
                 <td> {posts.Children}</td>
                 {/* <td> {posts.Singale_room}</td>
                 <td> {posts.Double_room}</td>
                 <td> {posts.Triple_room}</td>
                 <td> {posts.Check_in}</td>
                 <td> {posts.Check_out}</td> */}
                 
                 <td>
                   <a className="btn btn-warning" href={`/editroombooking/${posts._id}`} >
                   <i className="fas fa-edit"></i>&nbsp;Edit
                   </a>
                   &nbsp;
                   <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(posts._id)}>
                   <i className="fas fa-trash-alt"></i>&nbsp;Delete
                   </a>

            </td>
        </tr>

             ))}
      </tbody>
      </table>

                <button className="btn btn-success"><a href="/addroombooking" style={{textDecoration:'none',color:'white'}}>Create New Room Booking</a>   </button>
        </div>
        
      )
}

}