import React, {Component} from 'react';
import axios from 'axios';

export default class EditPost3 extends Component {
   
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
        const id = this.props.match.params.id;
        const { memberid,basicsalary,bonussalary,loaninstalment,finalpayments}= this.state;

        const data ={
            memberid: memberid,
            basicsalary: basicsalary,
            bonussalary:bonussalary,
            loaninstalment: loaninstalment,
            finalpayments: finalpayments
        }
        
        console.log(data)

        axios.put(`http://localhost:8070/salary/update/${id}`,data).then((res) =>{
            if(res.data.success){
                alert("Post Updated")
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



    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8070/salary/${id}`).then((res) =>{
            if(res.data.success)
                this.setState({
                    memberid:res.data.post.memberid,
                    basicsalary:res.data.post.basicsalary,
                    bonussalary:res.data.post.bonussalary,
                    loaninstalment:res.data.post.loaninstalment,
                    finalpayments:res.data.post.finalpayments
                });

                console.log(this.state.post);
            }
        );
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
            <h2 className="h3 mb-3 font-weight-normal">Edit payments</h2>
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
                   &nbsp; update
                </button>
             </form>
        
        
        
        </div>
        </div>
        );
    }
    
} 