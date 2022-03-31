import React, {Component} from 'react';
import axios from 'axios';

export default class CreatePost extends Component {
    
    constructor(props){
        super(props);
        this.state={
           expense:"",
           cost:"",
           management:"",
           date:""
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

        const { expense,cost,management,date}= this.state;

        const data ={
            expense: expense,
            cost: cost,
            management: management,
            date: date
        }
        
        console.log(data)

        axios.post("http://localhost:8070/expenses/save",data).then((res) =>{
            if(res.data.success){
                this.setState(
                    {
                        expense:"",
                        cost:"",
                        management:"",
                        date:""
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
              <a class="nav-link active" aria-current="page"style={{background:"yellow"}} href="/homeexpense">Expense</a>
           </li>
           
           <li class="nav-item">
              <a class="nav-link active" aria-current="page" style={{background:"#b9bebe"}} href="/homeincome">Income</a>
           </li>

           <li class="nav-item">
              <a class="nav-link active" aria-current="page" style={{background:"#b9bebe"}} href="/homesalary">Payments</a>
           </li>

        </ul>

        <h1 className="h3 mb-3 font-weight-normal">Create new Expense</h1>
        <form className="needs-validation" noValidate>
          <div className="form-group" style={{marginBottom:'15px'}}>
             <label style={{marginBottom:'5px'}}>Expense</label>
                 <input type="text"
                 className="form-contorl"
                 name="expense"
                 placeholder="Enter Expense"
                 value={this.state.expense}
                 onChange={this.handleInputChange}/>
           </div>
    
           <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>cost</label>
              <input type="text"
              className="form-contorl"
              name="cost"
              placeholder="Enter Cost"
              value={this.state.cost}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>management</label>
              <input type="text"
              className="form-contorl"
              name="management"
              placeholder="Enter management"
              value={this.state.management}
              onChange={this.handleInputChange}/>
            </div>
    
            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Date</label>
              <input type="text"
              className="form-contorl"
              name="date"
              placeholder="Enter Date"
              value={this.state.date}
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
    

