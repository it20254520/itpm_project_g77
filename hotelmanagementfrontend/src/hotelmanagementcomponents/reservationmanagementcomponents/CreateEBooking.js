import React, { Component } from 'react';
import axios from 'axios';

export default class CreateEBooking extends Component{
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
            Event_type:"",
            Event_date:"",
            Event_time:"",
            Cardholder_name:"",
            Card_type:"",
            Card_number:"",
            Security_code:"",
            Expiry_date:""
            
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
        
        const {First_name,Last_name,Email,Mobile,NIC_number,Adult,Children,Event_type,Event_date,Event_time,Cardholder_name,Card_type,Card_number,Security_code,Expiry_date} = this.state;
        
        const data ={
        First_name:First_name,
        Last_name:Last_name,
        Email:Email,
        Mobile:Mobile,
        NIC_number:NIC_number,
        Adult:Adult,
        Children:Children,
        Event_type:Event_type,
        Event_date:Event_date,
        Event_time:Event_time,
        Cardholder_name:Cardholder_name,
        Card_type:Card_type,
        Card_number:Card_number,
        Security_code:Security_code,
        Expiry_date:Expiry_date
        }
        console.log(data)
        
        axios.post("http://localhost:8070/EBooking/save",data).then((res) =>{
        if(res.data.success){
        this.setState(
        {
            First_name:"",
            Last_name:"",
            Email:"",
            Mobile:"",
            NIC_number:"",
            Adult:"",
            Children:"",
            Event_type:"",
            Event_date:"",
            Event_time:"",
            Cardholder_name:"",
            Card_type:"",
            Card_number:"",
            Security_code:"",
            Expiry_date:""
            
        }
        )
        }
        })
        }
        
        render() {
        return (

            <div style={{marginLeft:"100px", marginTop:"-1360px"}}>
        <div className="col-md-8 mt-4 mx-auto">
            <h1 className="h3 mb-3 font-weight-normal">Create New Event Booking</h1>
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
        <label style={{marginBottom:'5px'}}>Event_type</label>
        <input type="text"
        className="form-contorl"
        name="Event_type"
        placeholder=""
        value={this.state.Event_type}
        onChange={this.handleInputChange}/>
        </div>
        
        <div className="form-group" style={{marginBottom:'15px'}}>
        <label style={{marginBottom:'5px'}}>Event_date</label>
        <input type="text"
        className="form-contorl"
        name="Event_date"
        placeholder=""
        value={this.state.Event_date}
        onChange={this.handleInputChange}/>
        </div>

        <div className="form-group" style={{marginBottom:'15px'}}>
        <label style={{marginBottom:'5px'}}>Event_time</label>
        <input type="text"
        className="form-contorl"
        name="Event_time"
        placeholder=""
        value={this.state.Event_time}
        onChange={this.handleInputChange}/>
        </div>



        </form>
        
        <div className="col-md-8 mt-4 mx-auto">
            <h1 className="h3 mb-3 font-weight-normal">Online Payment</h1>
            <form className="needs-validation" noValidate>




        <div className="form-group" style={{marginBottom:'15px'}}>
        <label style={{marginBottom:'5px'}}>Cardholder_name</label>
        <input type="text"
        className="form-contorl"
        name="Cardholder_name"
        placeholder=""
        value={this.state.Cardholder_name}
        onChange={this.handleInputChange}/>
        </div>
        
        <div className="form-group" style={{marginBottom:'15px'}}>
        <label style={{marginBottom:'5px'}}>Card_type</label>
        <input type="text"
        className="form-contorl"
        name="Card_type"
        placeholder=""
        value={this.state.Card_type}
        onChange={this.handleInputChange}/>
        </div>

        <div className="form-group" style={{marginBottom:'15px'}}>
        <label style={{marginBottom:'5px'}}>Card_number</label>
        <input type="text"
        className="form-contorl"
        name="Card_number"
        placeholder=""
        value={this.state.Card_number}
        onChange={this.handleInputChange}/>
        </div>
        
        <div className="form-group" style={{marginBottom:'15px'}}>
        <label style={{marginBottom:'5px'}}>Security_code</label>
        <input type="text"
        className="form-contorl"
        name="Security_code"
        placeholder=""
        value={this.state.Security_code}
        onChange={this.handleInputChange}/>
        </div>

        <div className="form-group" style={{marginBottom:'15px'}}>
        <label style={{marginBottom:'5px'}}>Expiry_date</label>
        <input type="text"
        className="form-contorl"
        name="Expiry_date"
        placeholder=""
        value={this.state.Expiry_date}
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