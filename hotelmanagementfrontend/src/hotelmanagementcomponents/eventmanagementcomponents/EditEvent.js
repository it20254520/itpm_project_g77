import React, { Component } from 'react';
import axios from 'axios';

export default class EditEvent extends Component {


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
        const id = this.props.match.params.id;
        
        const {Category,Capacity,SelectHalls, Servingn,SelectSeatingStyles, DecorationInformations,AddServices, AdditionalServices,DiscribeYourEvent} = this.state;
        
        const data ={
            Category: Category,
            Capacity:Capacity,
            SelectHalls:SelectHalls,
            Servingn:Servingn,
            SelectSeatingStyles:SelectSeatingStyles,
            DecorationInformations:DecorationInformations,
            AddServices:AddServices, 
            AdditionalServices:AdditionalServices,
            DiscribeYourEvent:DiscribeYourEvent,
           
        }
        console.log(data)
        
        axios.put(`http://localhost:8070/Event/update/${id}`,data).then((res) =>{
        if(res.data.success){
alert("Post Updated Successfully")

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
            DiscribeYourEvent:"",
            AdditionalPersonPrice:"",
            ExtraBedPrice:""
        }
        )
        }
        })
        }
        


    componentDidMount(){

        const id = this.props.match.params.id;
    
        axios.get(`http://localhost:8070/Event/${id}`).then((res) =>{
    if(res.data.success){
    this.setState({
        Category:res.data.post.Category,
        Capacity:res.data.post.Capacity,
        SelectHalls:res.data.post.SelectHalls,
        Serving:res.data.post.Serving,
        SelectSeatingStyles:res.data.post.SelectSeatingStyles,
        DecorationInformations:res.data.post.DecorationInformations,
        AddServices:res.data.post.AddServices,
       AdditionalServices:res.data.post.AdditionalServices,
       DiscribeYourEvent:res.data.post.DiscribeYourEvent,
       
       
       
    });
    console.log(this.state.post);
    
    
    }
        });
    
    
    }
    




render() {
return (
    <div container style={{marginLeft:"200px", marginTop:"-1360px"}}>
<div className="col-md-8 mt-4 mx-auto">
    <h1 className="h3 mb-3 font-weight-normal">Edit Post</h1>
    <form className="needs-validation" noValidate>
<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'5px'}}>Category</label>
<input type="text"
className="form-contorl"
name="Category"
placeholder="Enter Topic"
value={this.state.Category}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'5px'}}>Capacity</label>
<input type="text"
className="form-contorl"
name="Capacity"
placeholder="Enter Description"
value={this.state.Capacity}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'5px'}}>SelectHalls</label>
<input type="text"
className="form-contorl"
name="SelectHalls"
placeholder="Enter Post Category"
value={this.state.SelectHalls}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'5px'}}>Serving</label>
<input type="text"
className="form-contorl"
name="Serving"
placeholder="Enter Post Category"
value={this.state.Serving}
onChange={this.handleInputChange}/>
</div>


<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'5px'}}>SeatingStyles</label>
<input type="text"
className="form-contorl"
name="SeatingStyles"
placeholder="Enter Post Category"
value={this.state.SeatingStyles}
onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'5px'}}>DecorationInformations</label>
<input type="text"
className="form-contorl"
name="DecorationInformations"
placeholder="Enter Post Category"
value={this.state.DecorationInformations}
onChange={this.handleInputChange}/>
</div>


<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'5px'}}>AddServices</label>
<input type="text"
className="form-contorl"
name="AddServices"
placeholder="Enter Post Category"
value={this.state.AddServices}
onChange={this.handleInputChange}/>
</div>


<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'5px'}}>AdditionalServices</label>
<input type="text"
className="form-contorl"
name="AdditionalServices"
placeholder="Enter Post Category"
value={this.state.AdditionalServices}
onChange={this.handleInputChange}/>
</div>


<div className="form-group" style={{marginBottom:'15px'}}>
<label style={{marginBottom:'5px'}}>DiscribeYourEvent</label>
<input type="text"
className="form-contorl"
name="DiscribeYourEvent"
placeholder="Enter Post Category"
value={this.state.DiscribeYourEvent}
onChange={this.handleInputChange}/>
</div>






<button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
    <i className="far fa-check-square"></i>
&nbsp; Update
</button>
    </form>



</div>
</div>
)
}
}
