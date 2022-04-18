import React, {Component} from 'react';
import axios from 'axios';

export default class CreatePost3 extends Component {
    
    constructor(props){
        super(props);
        this.state={
           memberid:"",
           basicsalary:"",
           bonussalary:"",
           loaninstalment:"",
           finalpayments:""
        }
    }
     
    handleInputChange =(e) =>{
        const {name,value} = e.target;
        
        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{

        e.preventDefault();

        const { memberid,basicsalary,bonussalary,loaninstalment,finalpayments}= this.state;

        const data ={
            memberid:memberid,
            basicsalary:basicsalary,
            bonussalary:bonussalary,
            loaninstalment:loaninstalment,
            finalpayments:finalpayments
        }
        
        console.log(data)

        axios.post("http://localhost:8070/salary/save",data).then((res) =>{
            if(res.data.success){
                this.setState(
                    {
                        memberid:"",
                        basicsalary:"",
                        bonussalary:"",
                        loaninstalment:"",
                        finalpayments:""
                    }
                )
            }
        })
    }


render() {
    return ( 
      <div style={{marginLeft:"100px", marginTop:"-1360px"}}>
    <div className="col-md-8 mt-4 mx-auto">
         <ul class="nav nav-tabs">
           <li class="nav-item">
              <a class="nav-link active" aria-current="page" style={{background:"#b9bebe"}} href="/homeexpense">Expense</a>
           </li>
           
           <li class="nav-item">
              <a class="nav-link active" aria-current="page" style={{background:"#b9bebe"}} href="/homeincome">Income</a>
           </li>

           <li class="nav-item">
              <a class="nav-link active" aria-current="page"style={{background:"yellow"}} href="/homesalary">Payments</a>
           </li>

        </ul>
        <h2 style={{color:"red"}}>Financial Management</h2>
        <h1 className="h3 mb-3 font-weight-normal">Create new payment</h1>
        <form className="needs-validation" noValidate>
          <div className="form-group" style={{marginBottom:'15px'}}>
             <label style={{marginBottom:'5px'}}>memberid</label>
                 <input type="text"
                 className="form-contorl"
                 name="memberid"
                 placeholder="Enter memberid"
                 value={this.state.memberid}
                 onChange={this.handleInputChange}/>
           </div>
    
           <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>basicsalary</label>
              <input type="text"
              className="form-contorl"
              name="basicsalary"
              placeholder="Enter basicsalary"
              value={this.state.basicsalary}
              onChange={this.handleInputChange}/>
            </div>
    
            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>bonussalary</label>
              <input type="text"
              className="form-contorl"
              name="bonussalary"
              placeholder="Enter bonussalary"
              value={this.state.bonussalary}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>loaninstalment</label>
              <input type="text"
              className="form-contorl"
              name="loaninstalment"
              placeholder="Enter loaninstalment"
              value={this.state.loaninstalment}
              onChange={this.handleInputChange}/>
            </div>
             
            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>finalpayments</label>
              <input type="text"
              className="form-contorl"
              name="finalpayments"
              placeholder="Enter finalpayments"
              value={this.state.finalpayments}
              onChange={this.handleInputChange}/>
            </div> 

            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
               <i className="far fa-click-square"></i>
               &nbsp; Save
            </button>
         </form>
    
    
    
    </div>
    </div>
    );
  }
}
    

