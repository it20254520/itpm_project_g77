import React, {Component} from 'react';
import axios from 'axios';

export default class PostDetails3 extends Component {
    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }
    
    componentDidMount(){

        const id = this.props.match.params.id;
    
        axios.get(`http://localhost:8070/salary/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });
    
            console.log(this.state.post);
            }
        });
    }
    

    render() {
        
        const{memberid,basicsalary,bonussalary,loaninstalment,finalpayments}= this.state.post;

        return(

            <div style={{marginLeft:"100px", marginTop:"-1360px"}}>
            <div style={{marginTop:'20px'}}>
                 <ul class="nav nav-tabs">
           <li class="nav-item">
              <a class="nav-link active" aria-current="page" style={{background:"#b9bebe"}} href="/homeexpense">Expense</a>
           </li>
           
           <li class="nav-item">
              <a class="nav-link active" aria-current="page" style={{background:"#b9bebe"}} href="/homeincome">Income</a>
           </li>

           <li class="nav-item">
              <a class="nav-link active" aria-current="page"style={{background:"yellow"}} href="/hohomesalaryme3">Payments</a>
           </li>

        </ul>
        <h2 style={{color:"red"}}>Financial Management</h2>
            <h4>{memberid}</h4>
            <hr/>

             <dl className="row">
                 <dt className="col-sm-3">basicsalary</dt>
                 <dd className="col-sm-9">{basicsalary}</dd>

                 <dt className="col-sm-3">bonussalary</dt>
                 <dd className="col-sm-9">{bonussalary}</dd>

                 <dt className="col-sm-3">loaninstalment</dt>
                 <dd className="col-sm-9">{loaninstalment}</dd>

                 
                 <dt className="col-sm-3">finalpayments</dt>
                 <dd className="col-sm-9">{finalpayments}</dd>

             </dl>
               
            </div>
            </div>
        )
    }
}