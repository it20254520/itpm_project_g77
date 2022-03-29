import React, { Component } from 'react';
import axios from 'axios';

export default class EBookingDetails extends Component{

    
        constructor(props){
            super(props);
            
            this.state={
            post:{}
            };
            }
    
    componentDidMount(){
    
        const id = this.props.match.params.id;
    
        axios.get(`http://localhost:8070/EBooking/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
            });
            console.log(this.state.post);
    
    
    }
        });
    
    
    }

    render() {
        const {First_name,Last_name,Email,Mobile,NIC_number,Adult,Children,Event_type,Event_date,Event_time} = this.state.post;
        
        return (
        
            <div style={{marginLeft:"100px", marginTop:"-1360px"}}>
            <div style={{marginTop:'20px'}}>
            <h1>Event Booking</h1>
            <hr/>
        <dl cassName="row">
            <dt className="col-sm-3">First_name</dt>
            <dd className="col-sm-9">{First_name}</dd>
            
        
            <dt className="col-sm-3">Last_name</dt>
            <dd className="col-sm-9">{Last_name}</dd>

            <dt className="col-sm-3">Email</dt>
            <dd className="col-sm-9">{Email}</dd>
        
            <dt className="col-sm-3">Mobile</dt>
            <dd className="col-sm-9">{Mobile}</dd>

            <dt className="col-sm-3">NIC_number</dt>
            <dd className="col-sm-9">{NIC_number}</dd>
        
            <dt className="col-sm-3">Adult</dt>
            <dd className="col-sm-9">{Adult}</dd>

            <dt className="col-sm-3">Children</dt>
            <dd className="col-sm-9">{Children}</dd>
        
            <dt className="col-sm-3">Event_type</dt>
            <dd className="col-sm-9">{Event_type}</dd>

            <dt className="col-sm-3">Event_date</dt>
            <dd className="col-sm-9">{Event_date}</dd>
        
            <dt className="col-sm-3">Event_time</dt>
            <dd className="col-sm-9">{Event_time}</dd>

        </dl>
        
        
        </div>
        </div>

        )
    }
}