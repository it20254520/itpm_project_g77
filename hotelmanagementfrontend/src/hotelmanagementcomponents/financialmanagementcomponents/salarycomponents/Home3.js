
import React,{Component} from 'react';
import axios from 'axios';

export default class Home3 extends Component {
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
  axios.get("http://localhost:8070/salary").then(res => {
    if(res.data.success) {
      this.setState({
         posts:res.data.existingPosts
      });

      console.log(this.state.posts)
    }


  });
} 

onDelete = (id) =>{

  axios.delete(`http://localhost:8070/salary/delete/${id}`).then((res)=>{
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

    axios.get(`http://localhost:8070/salary`).then(res =>{
if(res.data.success){

    this.filterData(res.data.existingPosts,searchKey)
}
});



}

 


 render() {
   return (
     <div className="container" style={{marginLeft:"100px", marginTop:"-1360px"}}>
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
       <div className="row">
         <div className="col-lg-9 mt-2 mb-2">
         <h2 style={{color:"red"}}>Financial Management</h2>
           <h4> All Payments</h4>
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
             <th scope="col">memberid</th>
             <th scope="col">basicsalary</th>
             <th scope="col">bonussalary</th>
             <th scope="col">loaninstalment</th>
             <th scope="col">finalpayments</th>
           </tr>
           <tbody>
             {this.state.posts.map((posts,index)=>(
               <tr key={index}>
                 <th scope="row">{index+1}</th>
                 <td>
                     <a href={`/salary/${posts._id}`} style={{textDecoration:'none'}}>
                     {posts.memberid}
                     </a>
                  </td>
                 <td>{posts.basicsalary}</td>
                 <td>{posts.bonussalary}</td>
                 <td>{posts.loaninstalment}</td>
                 <td>{posts.finalpayments}</td>
                 <td>
                   <a className="btn btn-warning" href={`/editsalary/${posts._id}`}>
                     <i className="fas fa-edit"></i>&nbsp;Edit
                   </a>
                   &nbsp;
                   <a className="btn btn-danger" href="/homesalary" onClick={()=> this.onDelete(posts._id)}>
                     <i className="far fa-trash-alt"></i>&nbsp;Delete
                   </a>
                 </td>
               </tr>
              ))}
           </tbody>
         </thread>
       </table>
       <button className="btn btn-success"><a href="/addsalary" style={{textDecoration:'none',color:'white'}}>Create New Payment</a></button>
     </div>
   )
 }
}