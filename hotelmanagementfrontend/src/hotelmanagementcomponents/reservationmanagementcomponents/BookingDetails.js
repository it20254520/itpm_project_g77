import React, { Component } from 'react';
import axios from 'axios';

export default class BookingDetails extends Component{

    
        constructor(props){
            super(props);
            
            this.state={
            post:{}
            };
            }
    
    componentDidMount(){
    
        const id = this.props.match.params.id;
    
        axios.get(`http://localhost:8070/Booking/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
            });
            console.log(this.state.post);
    
    
    }
        });
    
    
    }

    render() {
        const {First_name,Last_name,Email,Mobile,NIC_number,Adult,Children,Singale_room,Double_room,Triple_room,Check_in,Check_out} = this.state.post;
        
        return (
        
            <div style={{marginLeft:"100px", marginTop:"-1360px"}}>
            <div style={{marginTop:'20px'}}>
            <h1>Room Booking</h1>
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
        
            <dt className="col-sm-3">Singale_room</dt>
            <dd className="col-sm-9">{Singale_room}</dd>

            <dt className="col-sm-3">Double_room</dt>
            <dd className="col-sm-9">{Double_room}</dd>
        
            <dt className="col-sm-3">Triple_room</dt>
            <dd className="col-sm-9">{Triple_room}</dd>

            <dt className="col-sm-3">Check_in</dt>
            <dd className="col-sm-9">{Check_in}</dd>
        
            <dt className="col-sm-3">Check_out</dt>
            <dd className="col-sm-9">{Check_out}</dd>

        </dl>
        
        
        </div>
        </div>
        
        )
    }
}