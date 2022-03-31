import React, {Component} from 'react';
import axios from 'axios';

export default class PostDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }
    
    componentDidMount(){

        const id = this.props.match.params.id;
    
        axios.get(`http://localhost:8070/expenses/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });
    
            console.log(this.state.post);
            }
        });
    }
    

    render() {
        
        const{expense, cost,management, date}= this.state.post;

        return(

            <div style={{marginLeft:"100px", marginTop:"-1360px"}}>
            <div style={{marginTop:'20px'}}>

        <ul class="nav nav-tabs">
           <li class="nav-item">
              <a class="nav-link active" aria-current="page"style={{background:"yellow"}} href="/homeexpense">Expense</a>
           </li>
           
           <li class="nav-item">
              <a class="nav-link active" aria-current="page" style={{background:"#b9bebe"}} href="/homeincome">Income</a>
           </li>

           <li class="nav-item">
              <a class="nav-link active" aria-current="page" style={{background:"#b9bebe"}} href="/homesalary">Payments</a>
           </li>

        </ul>
        <h2 style={{color:"red"}}>Financial Management</h2>
            <h4>{expense}</h4>
            <hr/>

             <dl className="row">
                 <dt className="col-sm-3">Cost</dt>
                 <dd className="col-sm-9">{cost}</dd>

                 <dt className="col-sm-3">management</dt>
                 <dd className="col-sm-9">{management}</dd>

                 <dt className="col-sm-3">Date</dt>
                 <dd className="col-sm-9">{date}</dd>

             </dl>
               
            </div>
            </div>
        )
    }
}