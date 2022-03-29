import React, { Component } from 'react';
import axios from 'axios';

export default class EditBooking extends Component{
    constructor(props){
        super(props);
        this.state={
        
        First_name:"",
        Last_name:"",
        Email:"",
        Mobile:"",
        NIC_number:"",
        Adult:"",
        Children:"",
        Singale_room:"",
        Double_room:"",
        Triple_room:"",
        Check_in:"",
        Check_out:"",
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
        
        const {First_name,Last_name,Email,Mobile,NIC_number,Adult,Children,Singale_room,Double_room,Triple_room,Check_in,Check_out} = this.state;
        
        const data ={
            First_name:First_name,
            Last_name:Last_name,
            Email:Email,
            Mobile:Mobile,
            NIC_number:NIC_number,
            Adult:Adult,
            Children:Children,
            Singale_room:Singale_room,
            Double_room:Double_room,
            Triple_room:Triple_room,
            Check_in:Check_in,
            Check_out:Check_out
        }
        console.log(data)
        
        axios.put(`http://localhost:8070/Booking/update/${id}`,data).then((res) =>{
        if(res.data.success){
            alert("Post Updated Successfully")

        this.setState(
        {
            
            First_name:"",
            Last_name:"",
            Email:"",
            Mobile:"",
            NIC_number:"",
            Adult:"",
            Children:"",
            Singale_room:"",
            Double_room:"",
            Triple_room:"",
            Check_in:"",
            Check_out:""
        }
        )
        }
        })
        }
        


    componentDidMount(){

        const id = this.props.match.params.id;
    
        axios.get(`http://localhost:8070/Booking/${id}`).then((res) =>{
    if(res.data.success){
        this.setState({
           
            First_name:res.data.post.First_name,
            Last_name:res.data.post.Last_name,
            Email:res.data.post.Email,
            Mobile:res.data.post.Mobile,
            NIC_number:res.data.post.NIC_number,
            Adult:res.data.post.Adult,
            Children:res.data.post.Children,
            Singale_room:res.data.post.Singale_room,
            Double_room:res.data.post.Double_room,
            Triple_room:res.data.post.Triple_room,
            Check_in:res.data.post.Check_in,
            Check_out:res.data.post.Check_out
    });
    console.log(this.state.post);
    
    
    }
        });
    
    
    }
    




render() {
return (

    <div style={{marginLeft:"100px", marginTop:"-1360px"}}>
<div className="col-md-8 mt-4 mx-auto">
    <h1 className="h3 mb-3 font-weight-normal">Edit Room Booking</h1>
    <form className="needs-validation" noValidate>
    <div className="form-group" style={{marginBottom:'15px'}}>
        <label style={{marginBottom:'5px'}}>First_name</label>
        <input type="text"
        className="form-contorl"
        name="First_name"
        placeholder="Enter First Name"
        value={this.state.First_name}
        onChange={this.handleInputChange}/>
        </div>
        
        <div className="form-group" style={{marginBottom:'15px'}}>
        <label style={{marginBottom:'5px'}}>Last_name</label>
        <input type="text"
        className="form-contorl"
        name="Last_name"
        placeholder="Enter Last_Name"
        value={this.state.Last_name}
        onChange={this.handleInputChange}/>
        </div>
        
        <div className="form-group" style={{marginBottom:'15px'}}>
        <label style={{marginBottom:'5px'}}>Email</label>
        <input type="text"
        className="form-contorl"
        name="Email"
        placeholder="Enter Email Address"
        value={this.state.Email}
        onChange={this.handleInputChange}/>
        </div>

        <div className="form-group" style={{marginBottom:'15px'}}>
        <label style={{marginBottom:'5px'}}>Mobile</label>
        <input type="text"
        className="form-contorl"
        name="Mobile"
        placeholder="Enter Mobile Number"
        value={this.state.Mobile}
        onChange={this.handleInputChange}/>
        </div>
        
        <div className="form-group" style={{marginBottom:'15px'}}>
        <label style={{marginBottom:'5px'}}>NIC_number</label>
        <input type="text"
        className="form-contorl"
        name="NIC_number"
        placeholder="Enter NIC Number"
        value={this.state.NIC_number}
        onChange={this.handleInputChange}/>
        </div>

        <div className="form-group" style={{marginBottom:'15px'}}>
        <label style={{marginBottom:'5px'}}>Adult</label>
        <input type="text"
        className="form-contorl"
        name="Adult"
        placeholder="0"
        value={this.state.Adult}
        onChange={this.handleInputChange}/>
        </div>
        
        <div className="form-group" style={{marginBottom:'15px'}}>
        <label style={{marginBottom:'5px'}}>Children</label>
        <input type="text"
        className="form-contorl"
        name="Children"
        placeholder="0"
        value={this.state.Children}
        onChange={this.handleInputChange}/>
        </div>

        <div className="form-group" style={{marginBottom:'15px'}}>
        <label style={{marginBottom:'5px'}}>Singale_room</label>
        <input type="text"
        className="form-contorl"
        name="Singale_room"
        placeholder="0n"
        value={this.state.Singale_room}
        onChange={this.handleInputChange}/>
        </div>
        
        <div className="form-group" style={{marginBottom:'15px'}}>
        <label style={{marginBottom:'5px'}}>Double_room</label>
        <input type="text"
        className="form-contorl"
        name="Double_room"
        placeholder="0"
        value={this.state.Double_room}
        onChange={this.handleInputChange}/>
        </div>

        <div className="form-group" style={{marginBottom:'15px'}}>
        <label style={{marginBottom:'5px'}}>Triple_room</label>
        <input type="text"
        className="form-contorl"
        name="Triple_room"
        placeholder="0"
        value={this.state.Triple_room}
        onChange={this.handleInputChange}/>
        </div>
        
        <div className="form-group" style={{marginBottom:'15px'}}>
        <label style={{marginBottom:'5px'}}>Check_in</label>
        <input type="text"
        className="form-contorl"
        name="Check_in"
        placeholder=""
        value={this.state.Check_in}
        onChange={this.handleInputChange}/>
        </div>

        <div className="form-group" style={{marginBottom:'15px'}}>
        <label style={{marginBottom:'5px'}}>Check_out</label>
        <input type="text"
        className="form-contorl"
        name="Check_out"
        placeholder=""
        value={this.state.Check_out}
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
