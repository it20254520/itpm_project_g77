import React, {Component} from 'react';
import axios from 'axios';

export default class EditPost2 extends Component {
   
    constructor(props){
        super(props);
        this.state={
           income:"",
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
        const id = this.props.match.params.id;
        const { income,cost,management,date}= this.state;

        const data ={
            income: income,
            cost: cost,
            management: management,
            date: date
        }
        
        console.log(data)

        axios.put(`http://localhost:8070/income/update/${id}`,data).then((res) =>{
            if(res.data.success){
                alert("Post Updated")
                this.setState(
                    {
                        income:"",
                        cost:"",
                        management:"",
                        date:""
                    }
                )
            }
        })
    }



    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8070/income/${id}`).then((res) =>{
            if(res.data.success)
                this.setState({
                    expense:res.data.post.income,
                    cost:res.data.post.cost,
                    management:res.data.post.management,
                    date:res.data.post.date,
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
              <a class="nav-link active" aria-current="page"style={{background:"yellow"}} href="/homeincome">Income</a>
           </li>

           <li class="nav-item">
              <a class="nav-link active" aria-current="page" style={{background:"#b9bebe"}} href="/homesalary">Payments</a>
           </li>

        </ul>
        
         <h2 style={{color:"red"}}>Financial Management</h2>
         
         
            <h1 className="h3 mb-3 font-weight-normal">Edit post</h1>
            <form className="needs-validation" noValidate>
              <div className="form-group" style={{marginBottom:'15px'}}>
                 <label style={{marginBottom:'5px'}}>Income</label>
                     <input type="text"
                     className="form-contorl"
                     name="income"
                     placeholder="Enter income"
                     value={this.state.income}
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
                   &nbsp; update
                </button>
             </form>
        
        
        
        </div>
        </div>
        );
    }
    
} 