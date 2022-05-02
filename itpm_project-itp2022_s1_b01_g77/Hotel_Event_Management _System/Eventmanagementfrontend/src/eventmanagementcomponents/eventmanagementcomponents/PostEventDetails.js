import React, { Component } from 'react';
import axios from 'axios';

export default class PostEventDetails extends Component {
    constructor(props){
        super(props);
        
        this.state={
        post:{}
        };
        }

componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`http://localhost:8070/Event/${id}`).then((res) =>{
if(res.data.success){
this.setState({
post:res.data.post
});
console.log(this.state.post);


}
    });


}

render() {
const {Category,Capacity,SelectHalls,Serving,SelectSeatingStyles,DecorationInformations,AddServices,AdditionalServices,DiscribeYourEvent,BasePrice,AdditionalPersonPrice,ExtraBedPrice} = this.state.post;

return (

    <div style={{marginLeft:"100px", marginTop:"-1360px"}}>
    <h1>{Category}</h1>
    <hr/>
<dl cassName="row">
    <dt className="col-sm-3">Capacity</dt>
    <dd className="col-sm-9">{Capacity}</dd>

    <dt className="col-sm-3">SelectHalls</dt>
    <dd className="col-sm-9">{SelectHalls}</dd>

    <dt className="col-sm-3">Serving</dt>
    <dd className="col-sm-9">{Serving}</dd>

    <dt className="col-sm-3">SelectSeatingStyles</dt>
    <dd className="col-sm-9">{SelectSeatingStyles}</dd>

    <dt className="col-sm-3">DecorationInformations</dt>
    <dd className="col-sm-9">{DecorationInformations}</dd>

    <dt className="col-sm-3">AddServices</dt>
    <dd className="col-sm-9">{AddServices}</dd>

    <dt className="col-sm-3">AdditionalServices</dt>
    <dd className="col-sm-9">{AdditionalServices}</dd>

    <dt className="col-sm-3">DiscribeYourEvent</dt>
    <dd className="col-sm-9">{DiscribeYourEvent}</dd>

    
    
    



    
</dl>


</div>
)
}
}
