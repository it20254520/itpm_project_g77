import React, { Component } from 'react';
import axios from 'axios';

export default class EditEvent extends Component {


    constructor(props){
        super(props);
        this.state={
            Category:"",
            Capacity:"",
            SelectHalls:"",
            Serving:"",
            SelectSeatingStyles:"",
            DecorationInformations:"",
            AddServices:"",
            AdditionalServices:"",
            DiscribeYourEvent:"",
            Discount:""
           
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
        const id = this.props.match.params.id;
        
        const {Category,Capacity,SelectHalls, Serving,SelectSeatingStyles, DecorationInformations,AddServices, AdditionalServices,DiscribeYourEvent,Discount} = this.state;
        
        const data ={
            Category: Category,
            Capacity:Capacity,
            SelectHalls:SelectHalls,
            Serving:Serving,
            SelectSeatingStyles:SelectSeatingStyles,
            DecorationInformations:DecorationInformations,
            AddServices:AddServices, 
            AdditionalServices:AdditionalServices,
            DiscribeYourEvent:DiscribeYourEvent,
            Discount:Discount
           
        }
        console.log(data)

        if(Category==""||Capacity==""||SelectHalls==""||Serving==""||SelectSeatingStyles==""||DecorationInformations==""||AddServices==""||AdditionalServices==""||DiscribeYourEvent==""){
            alert("Insert all details")
            
            }else if(Capacity>600){
            
            
              
              alert("maximum capacity 600 !")
              return 0;


            }else if(Discount>30)

            {
            alert("!maximum discount is only 30%")
              return 0;
            }
        
        axios.put(`http://localhost:8070/Event/update/${id}`,data).then((res) =>{
        if(res.data.success){
alert("Post Updated Successfully")

        this.setState(
        {
            Category:"",
            Capacity:"",
            SelectHalls:"",
            Serving:"",
            SelectSeatingStyles:"",
            DecorationInformations:"",
            AddServices:"",
            AdditionalServices:"",
            DiscribeYourEvent:"",
            AdditionalPersonPrice:"",
            ExtraBedPrice:"",
            Discount:""
        }
        )
        }
        })
        }
        


    componentDidMount(){

        const id = this.props.match.params.id;
    
        axios.get(`http://localhost:8070/Event/${id}`).then((res) =>{
    if(res.data.success){
    this.setState({
        Category:res.data.post.Category,
        Capacity:res.data.post.Capacity,
        SelectHalls:res.data.post.SelectHalls,
        Serving:res.data.post.Serving,
        SelectSeatingStyles:res.data.post.SelectSeatingStyles,
        DecorationInformations:res.data.post.DecorationInformations,
        AddServices:res.data.post.AddServices,
       AdditionalServices:res.data.post.AdditionalServices,
       DiscribeYourEvent:res.data.post.DiscribeYourEvent,
       Discount:res.data.post.Discount
       
       
       
    });
    console.log(this.state.post);
    
    
    }
        });
    
    
    }
    




render() {
return (
    <div style={{marginLeft:"100px", marginTop:"-1360px"}}>

  <div >
          
  
       </div>
  
       <div className="col-md-8 mt-4 mx-auto">
       <h1 style={{color:'DarkGoldenrod', fontWeight:'bold'}}>Edit Basic Package &nbsp;<i class="fas fa-hand-point-down"></i></h1>
           <form className="needs-validation" noValidate>
            <div className="form-group" style={{marginBottom:'15px',backgroundColor:'#F3FADD'}}>
                 <label style={{marginBottom:'5px',fontSize:'20px'}}><b> Category</b></label>
                   <input type="text"
                   className="form-control"
                   name="Category"
                   placeholder=""
                   value={this.state.Category}
                   onChange={this.handleInputChange}/>
  
               </div>
  
               <div className="form-group" style={{marginBottom:'15px',backgroundColor:'#F3FADD'}}>
                 <label style={{marginBottom:'5px',fontSize:'20px'}}><b> Capacity</b></label>
                   <input type="text"
                   className="form-control"
                   name="Capacity"
                   placeholder=""
                   value={this.state.Capacity}
                   onChange={this.handleInputChange}/>
  
               </div>
  
               <div className="form-group" style={{marginBottom:'15px',backgroundColor:'#F3FADD'}}>
                 <label style={{marginBottom:'5px',fontSize:'20px'}}><b> Select Halls</b></label>
                   <input type="text"
                   className="form-control"
                   name="SelectHalls"
                   placeholder=""
                   value={this.state.SelectHalls}
                   onChange={this.handleInputChange}/>
  
               </div>
  
               
               <div className="form-group" style={{marginBottom:'15px',backgroundColor:'#F3FADD'}}>
                 <label style={{marginBottom:'5px',fontSize:'20px'}}><b> Serving</b></label>
                   <input type="text"
                   className="form-control"
                   name="Serving"
                   placeholder=""
                   value={this.state.Serving}
                   onChange={this.handleInputChange}/>
  
               </div>
  
               
               <div className="form-group" style={{marginBottom:'15px',backgroundColor:'#F3FADD'}}>
                 <label style={{marginBottom:'5px',fontSize:'20px'}}><b> Select Seating Styles</b></label>
                   <input type="text"
                   className="form-control"
                   name="SelectSeatingStyles"
                   placeholder=""
                   value={this.state.SelectSeatingStyles}
                   onChange={this.handleInputChange}/>
  
               </div>
  
               <div className="form-group" style={{marginBottom:'15px',backgroundColor:'#F3FADD'}}>
                 <label style={{marginBottom:'5px',fontSize:'20px'}}><b>Decoration Informations</b></label>
                   <input type="text"
                   className="form-control"
                   name="DecorationInformations"
                   placeholder=""
                   value={this.state.DecorationInformations}
                   onChange={this.handleInputChange}/>
  
               </div>
  
               <div className="form-group" style={{marginBottom:'15px',backgroundColor:'#F3FADD'}}>
                 <label style={{marginBottom:'5px',fontSize:'20px'}}><b> Add Services</b></label>
                   <input type="text"
                   className="form-control"
                   name="AddServices"
                   placeholder=""
                   value={this.state.AddServices}
                   onChange={this.handleInputChange}/>
  
               </div>
  
               <div className="form-group" style={{marginBottom:'15px',backgroundColor:'#F3FADD'}}>
                 <label style={{marginBottom:'5px',fontSize:'20px'}}><b>Additional Services</b></label>
                   <input type="text"
                   className="form-control"
                   name="AdditionalServices"
                   placeholder=""
                   value={this.state.AdditionalServices}
                   onChange={this.handleInputChange}/>
  
               </div>

               <div className="form-group" style={{marginBottom:'15px',backgroundColor:'#F3FADD'}}>
                 <label style={{marginBottom:'5px',fontSize:'20px'}}><b> Description</b></label>
                   <textarea type="text"
                   className="form-control"
                   name="DiscribeYourEvent"
                   placeholder=""
                   value={this.state.DiscribeYourEvent}
                   onChange={this.handleInputChange}/>
                   
                   </div>

                   
               
                   <div className="form-group" style={{marginBottom:'15px',backgroundColor:'#F3FADD'}}>
                 <label style={{marginBottom:'5px',fontSize:'20px'}}><b> Discount</b></label>
                   <input type="text"
                   className="form-control"
                   name="Discount"
                   placeholder=""
                   value={this.state.Discount}
                   onChange={this.handleInputChange}/>
                   
                   </div>






<button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
    <i className="far fa-check-square"></i>
&nbsp; Update
</button>
    </form>



</div>
</div>
)
}
}
