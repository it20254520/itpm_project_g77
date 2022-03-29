

import React, { Component } from 'react';
import axios from 'axios';

export default class AddEvent extends Component {

constructor(props){
super(props);
this.state={
  Category:"",
  Capacity:"",
  SelectHalls:"",
  Serving:"",
  SelectSeatingStyles:"",
  DecorationInformations:"",
  AddServices:"",
  AdditionalServices:"",
  DiscribeYourEvent:""
  
}
}

handleInputChange = (e) =>{
const {name,value} = e.target;

this.setState({
...this.state,
[name]:value
})
}

onSubmit = (e) =>{
e.preventDefault();

const { Category,Capacity,SelectHalls, Serving, SelectSeatingStyles,DecorationInformations, AddServices,AdditionalServices,DiscribeYourEvent} = this.state;

const data ={
  Category:Category,
  Capacity:Capacity,
  SelectHalls:SelectHalls,
  Serving:Serving,
  SelectSeatingStyles: SelectSeatingStyles,
  DecorationInformations:DecorationInformations,
  AddServices:AddServices,
  AdditionalServices:AdditionalServices,
  DiscribeYourEvent:DiscribeYourEvent
  
}
console.log(data)

axios.post("http://localhost:8070/event/save",data).then((res) =>{
if(res.data.success){
this.setState(
{
  Category:"",
  Capacity:"",
  SelectHalls:"",
  Serving:"",
  SelectSeatingStyles:"",
  DecorationInformations:"",
  AddServices:"",
  AdditionalServices:"",
  DiscribeYourEvent:""
 
}
)
}
})
}

render() {
return (



<div>





<div className="container" style={{marginLeft:"100px", marginTop:"-1360px"}}>
<div className="col-md-8 mt-4 mx-auto">
    <h1 className="h3 mb-3 font-weight-normal">Create Event</h1>
    <form className="needs-validation" noValidate>
<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'5px'}}>Category</label><br/>
<input type="text"
className="form-contorl"
name="Category"
placeholder="Enter Topic"
value={this.state.Category}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px',marginTop:'-80px',marginLeft:'500px'}}>
<label style={{marginBottom:'5px'}}>Capacity</label>
<input type="text"
className="form-contorl"
name="Capacity"
placeholder="Enter Description"
value={this.state.Capacity}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px',marginTop:'60px'}}>
<label style={{marginBottom:'5px'}}>SelectHalls</label><br/>
<input type="text"
className="form-contorl"
name="SelectHalls"
placeholder="Enter Post Category"
value={this.state.SelectHalls}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px',marginTop:'-60px',marginLeft:'500px'}}>
<label style={{marginBottom:'5px'}}>Serving</label>
<input type="text"
className="form-contorl"
name="Serving"
placeholder="Enter Post Category"
value={this.state.Serving}
onChange={this.handleInputChange}/>
</div>


<div className="form-group" style={{marginBottom:'15px',marginTop:'40px'}}>
<label style={{marginBottom:'5px'}}>SelectSeatingStyles</label><br/>
<input type="text"
className="form-contorl"
name="SelectSeatingStyles"
placeholder="Enter Post Category"
value={this.state.SelectSeatingStyles}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px',marginTop:'-30px',marginLeft:'500px'}}>
<label style={{marginBottom:'5px'}}>DecorationInformations</label>
<input type="text"
className="form-contorl"
name="DecorationInformations"
placeholder="Enter Post Category"
value={this.state.DecorationInformations}
onChange={this.handleInputChange}/>
</div>


<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'5px'}}>AddServices</label><br/>
<input type="text"
className="form-contorl"
name="AddServices"
placeholder="Enter Post Category"
value={this.state.AddServices}
onChange={this.handleInputChange}/>
</div>


<div className="form-group" style={{marginBottom:'15px',marginTop:'10px',marginLeft:'500px'}}>
<label style={{marginBottom:'5px'}}>AdditionalServices</label>
<input type="text"
className="form-contorl"
name="AdditionalServices"
placeholder="Enter Post Category"
value={this.state.AdditionalServices}
onChange={this.handleInputChange}/>
</div>


<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'5px'}}>DiscribeYourEvent</label><br/>
<input type="text"
className="form-contorl"
name="DiscribeYourEvent"
placeholder="Enter Post Category"
value={this.state.DiscribeYourEvent}
onChange={this.handleInputChange}/>
</div>























<button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
    <i className="far fa-click-square"></i>
&nbsp; Save
</button>
    </form>



</div>
</div>
</div>
)
}
}
