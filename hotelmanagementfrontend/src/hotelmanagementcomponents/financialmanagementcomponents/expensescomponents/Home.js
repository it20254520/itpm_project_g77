
import React,{Component} from 'react';
import axios from 'axios';
import'./styles.css';

export default  class Home extends Component {
constructor(props){
   super(props);

   this.state={
     posts:[]
   };
}  

componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("http://localhost:8070/expenses").then(res => {
    if(res.data.success) {
      this.setState({
         posts:res.data.existingPosts
      });

      console.log(this.state.posts)
    }


  });
} 

onDelete = (id) =>{

  axios.delete(`http://localhost:8070/expenses/delete/${id}`).then((res)=>{
    alert("delete successfully");
    this.retrievePosts();
  })
}

filterData(posts,searchKey){

  const result = posts.filter((post) =>
  post.expense.toLowerCase().includes(searchKey)
  
  
  )
  this.setState({posts:result})
  }

  handleSearchArea = (e) =>{

    const searchKey=e.currentTarget.value;

    axios.get(`http://localhost:8070/expenses`).then(res =>{
if(res.data.success){

    this.filterData(res.data.existingPosts,searchKey)
}
});



}


 


 render() {
   return (
     <div className= "container" style={{marginLeft:"100px", marginTop:"-1360px"}}>
      <div className="col-lg-9 mt-2 mb-2">
      
      
      <ul class="nav nav-tabs">
           <li class="nav-item" style={{background:"blue"}}>
              <a class="nav-link active" aria-current="page"style={{background:"yellow"}} href="/homeexpense">Expense</a>
           </li>
           
           <li class="nav-item">
              <a class="nav-link active" aria-current="page" style={{background:"#b9bebe"}} href="/homeincome">Income</a>
           </li>

           <li class="nav-item">
              <a class="nav-link active" aria-current="page" style={{background:"#b9bebe"}} href="/homesalary">Payments</a>
           </li>

        </ul>

     
     
       <div className="row" 
       className="container">
       
         <div className="col-lg-9 mt-2 mb-2">
         <h2 style={{color:"red"}}>Financial Management</h2>
         
         </div>
           <h4>ALL Expenses</h4>
         </div>
         <div className="col-lg-9 mt-2 mb-2">
           <input
           className="form-control"
           type="search"
           placeholder="Search"
           name="searchQuery"
           onChange={this.handleSearchArea}>
          </input>
         </div>
       </div>

       <table className = "table table-hover" style={{marginTop:'40px'}}>
         <thread>
           <tr>
             <th scope="col">#</th>
             <th scope="col">Expense</th>
             <th scope="col">Cost</th>
             <th scope="col">Management</th>
             <th scope="col">Date</th>
           </tr>
           <tbody>
             {this.state.posts.map((posts,index)=>(
               <tr key={index}>
                 <th scope="row">{index+1}</th>
                 <td>
                     <a href={`/expenses/${posts._id}`} style={{textDecoration:'none'}}>
                     {posts.expense}
                     </a>
                  </td>
                 <td>{posts.cost}</td>
                 <td>{posts.management}</td>
                 <td>{posts.date}</td>
                 <td>
                   <a className="btn btn-warning" href={`/editexpense/${posts._id}`}>
                     <i className="fas fa-edit"></i>&nbsp;Edit
                   </a>
                   &nbsp;
                   <a className="btn btn-danger" href="/homeexpense" onClick={()=> this.onDelete(posts._id)}>
                     <i className="far fa-trash-alt"></i>&nbsp;Delete
                   </a>
                 </td>
               </tr>
              ))}
           </tbody>
         </thread>
       </table>
       <button className="btn btn-success"><a href="/addexpense" style={{textDecoration:'none',color:'white'}}>Create New Expense</a></button>
      
     </div>
     
   )
 }
 

}