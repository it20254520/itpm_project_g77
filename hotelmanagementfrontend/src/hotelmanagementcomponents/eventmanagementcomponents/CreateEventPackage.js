import React, { Component } from 'react';
import axios from 'axios';

export default class CreateEventPackage extends Component {

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
    DiscribeYourEvent:"",
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

const {Category,Capacity,SelectHalls, Serving, SelectSeatingStyles,DecorationInformations, AddServices,AdditionalServices,DiscribeYourEvent} = this.state;

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


if(Category==""||Capacity==""||SelectHalls==""||Serving==""||SelectSeatingStyles==""||DecorationInformations==""||AddServices==""||AdditionalServices==""||DiscribeYourEvent==""){
alert("Insert all details")

}else if(Capacity>600){


  
  alert("maximum Capacity is 600")
  return 0;
  



  
  


  
  
}

axios.post("http://localhost:8070/eventpackage/save",data).then((res) =>{
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
    <div style={{marginLeft:"100px", marginTop:"-1360px"}}>

    <div >
            
    
         </div>
    
         <div className="col-md-8 mt-4 mx-auto">

         <h1 style={{color:'DarkGoldenrod', fontWeight:'bold'}}>Create Your Package &nbsp;<i class="fas fa-hand-point-down"></i></h1>
           
            <form className="needs-validation" noValidate>
            <div className="form-group" style={{marginBottom:'15px',backgroundColor:'#F3FADD'}}>
                 <label style={{marginBottom:'5px',fontSize:'20px'}}><b> Category</b></label>
                     <input type="text"
                     className="form-control"
                     name="Category"
                     placeholder=""
                     value={this.state.Category}
                     onChange={this.handleInputChange}/>
    
                 </div>
    
                 <div className="form-group" style={{marginBottom:'15px',backgroundColor:'#F3FADD'}}>
                 <label style={{marginBottom:'5px',fontSize:'20px'}}><b> Capacity</b></label>
                     <input type="text"
                     className="form-control"
                     name="Capacity"
                     placeholder=""
                     value={this.state.Capacity}
                     onChange={this.handleInputChange}/>
    
                 </div>
    
                 
                 <div className="form-group" style={{marginBottom:'15px',backgroundColor:'#F3FADD'}}>
                 <label style={{marginBottom:'5px',fontSize:'20px'}}><b> Select Halls</b></label>
                     <input type="text"
                     className="form-control"
                     name="SelectHalls"
                     placeholder=""
                     value={this.state.SelectHalls}
                     onChange={this.handleInputChange}/>
    
                 </div>
                
                 <div className="form-group" style={{marginBottom:'15px',backgroundColor:'#F3FADD'}}>
                 <label style={{marginBottom:'5px',fontSize:'20px'}}><b> Serving</b></label>
                     <input type="text"
                     className="form-control"
                     name="Serving"
                     placeholder=""
                     value={this.state.Serving}
                     onChange={this.handleInputChange}/>
    
                 </div>
    
                 
                 <div className="form-group" style={{marginBottom:'15px',backgroundColor:'#F3FADD'}}>
                 <label style={{marginBottom:'5px',fontSize:'20px'}}><b> Select Seating Styles</b></label>
                     <input type="text"
                     className="form-control"
                     name="SelectSeatingStyles"
                     placeholder=""
                     value={this.state.SelectSeatingStyles}
                     onChange={this.handleInputChange}/>
    
                 </div>
    
                 <div className="form-group" style={{marginBottom:'15px',backgroundColor:'#F3FADD'}}>
                 <label style={{marginBottom:'5px',fontSize:'20px'}}><b> Decoration Informations</b></label>
                     <input type="text"
                     className="form-control"
                     name="DecorationInformations"
                     placeholder=""
                     value={this.state.DecorationInformations}
                     onChange={this.handleInputChange}/>
    
                 </div>
    
                 <div className="form-group" style={{marginBottom:'15px',backgroundColor:'#F3FADD'}}>
                 <label style={{marginBottom:'5px',fontSize:'20px'}}><b> Add Services</b></label>
                     <input type="text"
                     className="form-control"
                     name="AddServices"
                     placeholder=""
                     value={this.state.AddServices}
                     onChange={this.handleInputChange}/>
    
                 </div>
    
                 <div className="form-group" style={{marginBottom:'15px',backgroundColor:'#F3FADD'}}>
                 <label style={{marginBottom:'5px',fontSize:'20px'}}><b> Additional Services</b></label>
                     <input type="text"
                     className="form-control"
                     name="AdditionalServices"
                     placeholder=""
                     value={this.state.AdditionalServices}
                     onChange={this.handleInputChange}/>
    
                 </div>

                 <div className="form-group" style={{marginBottom:'15px',backgroundColor:'#F3FADD'}}>
                 <label style={{marginBottom:'5px',fontSize:'20px'}}><b> Discribe Your Event</b></label>
                     <textarea type="text"
                     className="form-control"
                     name="DiscribeYourEvent"
                     placeholder=""
                     value={this.state.DiscribeYourEvent}
                     onChange={this.handleInputChange}/>
    
                 </div>
                 <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                       <i className="far fa-check-square"></i>&nbsp; Save
                 </button>
             </form>
           
    
         </div>
         </div>
    
        )
      }
    }
