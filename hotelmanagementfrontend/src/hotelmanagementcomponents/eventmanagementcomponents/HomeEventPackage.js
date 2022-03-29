import React, { Component } from 'react';
import axios from 'axios';


export default class HomeEventPackage extends Component{
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
axios.get("http://localhost:8070/Eventpackage").then(res =>{
if(res.data.success){
this.setState({
posts:res.data.existingEventpackage
});
console.log(this.state.posts)
} 
});
}

onDelete = (id) =>{
axios.delete(`http://localhost:8070/Eventpackage/delete/${id}`).then((res) =>{
alert("Delete Successfully");
this.retrievePosts();
})
}

filterData(posts,searchKey){

const result = posts.filter((post) =>
post.SelectHalls.toLowerCase().includes(searchKey)||
post.Capacity.toLowerCase().includes(searchKey)||
post.Category.toLowerCase().includes(searchKey)
)
this.setState({posts:result})
}

handleSearchArea = (e) =>{

    const searchKey=e.currentTarget.value;

    axios.get(`http://localhost:8070/Eventpackage`).then(res =>{
if(res.data.success){

    this.filterData(res.data.existingEventpackage,searchKey)
}
});



}




render() {
return (

<div className="container" style={{marginLeft:"100px", marginTop:"-1360px"}}>
    <div className="row">
<div className="col-lg-9 mt-2 mb-2">

<h4>All Custormize Event Package</h4>
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
<th Scope="col">#</th>
<th Scope="col">Category</th>
<th Scope="col">Capacity</th>
<th Scope="col">SelectHalls</th>
<th Scope="col">Serving</th>
<th Scope="col">SelectSeatingStyles</th>
<th Scope="col">DecorationInformations</th>
<th Scope="col">AddServices</th> 
{/* <th Scope="col">AdditionalServices</th>
<th Scope="col">DiscribeYourEvent</th> */}
</tr>
</thead>

<tbody>
{this.state.posts.map((posts,index) =>(
<tr key={index}>
<th scope="row">{index+1}</th>
<td>
<a href={`/posteventpackage/${posts._id}`} style={{textDecoration:'none'}}>
{posts.Category}
</a>
</td>  

<td>{posts.Capacity}</td>
<td>{posts.SelectHalls}</td>
<td>{posts.Serving}</td>
<td>{posts.SelectSeatingStyles}</td>
<td>{posts.DecorationInformations}</td>
<td>{posts.AddServices}</td>
{/* <td>{posts.AdditionalServices}</td>
<td>{posts.DiscribeYourEvent}</td> */}

<td>
<a className="btn btn-warning" href={`/editeventpackage/${posts._id}`}>
<i className="fas fa-edit"></i>&nbsp;Edit
</a>
&nbsp;
<a className="btn btn-danger" href="/HomeEventPackage" onClick={() =>this.onDelete(posts._id)}>
<i className="fas fa-trash-alt"></i>&nbsp;Delete
</a>
</td>
</tr>
))}
</tbody>
</table>
<button className="btn btn-success"><a href="/addeventpackage" style={{textDecoration:'none',color:'white'}}>Create New Custormize Package</a></button>
</div>
)
}
}
