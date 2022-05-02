import React, { Component } from 'react';
import axios from 'axios';
import img1 from '../images/logoco.png';



export default class MonthlyReport extends Component{
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
axios.get("http://localhost:8070/Eventpackage").then(res =>{
if(res.data.success){
this.setState({
posts:res.data.existingEventpackage,



});

console.log(this.state.posts)
} 
});
}



filterData(posts,searchKey){

    const result = posts.filter((post) =>
    post.SelectHalls.toLowerCase().includes(searchKey)||
    //post.event.includes(searchKey)||
    post.Capacity.toLowerCase().includes(searchKey)||
    post.Category.toLowerCase().includes(searchKey)
    )
    this.setState({posts:result})
    }
    
    handleSearchArea = (e) =>{
    
        const searchKey=e.currentTarget.value;
    
        axios.get(`http://localhost:8070/Eventpackage`).then(res =>{
    if(res.data.success){
    
        this.filterData(res.data.existingEventpackage,searchKey)
    }
    });
    
    
    
    }


  


render() {
return (


<div className="container" style={{marginLeft:"100px", marginTop:"-1360px",backgroundImage:"./images/logoco.png",maxWidth:"100%"}}>

<table className="table2" style={{width:"100%"}}>

<tr></tr>
<div style={{marginLeft:"80px", marginBottom:"200px"}}><img src={img1} alt="logo" style={{height:"70px",width:"70px", marginTop:"80px"}} /></div>
<div style={{marginLeft:"920px", marginTop:"-280px"}}>Amalya Reach Hotel,</div>
<div style={{marginLeft:"920px"}}>Moragahahena,</div>
<div style={{marginLeft:"920px"}}>Homagama</div>
<br></br>
<div style={{marginLeft:"80px"}}>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div>
<div style={{textAlign:"center"}}>Month Of August</div>


<br></br>

<table className="table1" style={{width:"70%", marginLeft:"150px", bordercollapse:"collapse"}}>
<tr>
    <th className="col1" colspan="9" style={{textAlign:"center"}}>Monthly Report For Event Management</th>
  </tr>
<tr className="row1" style={{}}>
<th className="col1" style={{textAlign:"center"}}>Category</th>
<th className="col1" style={{textAlign:"center"}}>Capacity</th>
<th className="col1" style={{textAlign:"center"}}>Select Halls</th>
<th className="col1" style={{textAlign:"center"}}>Serving</th>
<th className="col1" style={{textAlign:"center"}}>Seating Styles</th>
<th className="col1" style={{textAlign:"center"}}>Decoration Informations</th>
<th className="col1" style={{textAlign:"center"}}>Add Services</th>
<th className="col1"style={{textAlign:"center"}}>Additional Services</th>
<th className="col1"style={{textAlign:"center"}}>Describe Event</th>

</tr>

{this.state.posts.map((posts,index) =>(
<tr className="row1" key={index} style={{}}>
<td className="col1" style={{textAlign:"center"}}>{posts.Category}</td>
<td className="col1" style={{textAlign:"center"}}>{posts.Capacity}</td>
<td className="col1" style={{textAlign:"center"}}>{posts.SelectHalls}</td>
<td className="col1" style={{textAlign:"center"}}>{posts.Serving}</td>
<td className="col1" style={{textAlign:"center"}}>{posts.SelectSeatingStyles}</td>
<td className="col1" style={{textAlign:"center"}}>{posts.DecorationInformations}</td>
<td className="col1" style={{textAlign:"center"}}>{posts.AddServices}</td>
<td className="col1" style={{textAlign:"center"}}>{posts.AdditionalServices}</td>
<td className="col1" style={{textAlign:"center"}}>{posts.DiscribeYourEvent}</td>

</tr>
))}

</table>
<br></br>
<br></br>
<div style={{marginLeft:"60px"}}>.........................</div>
<div style={{marginLeft:"80px", marginBottom:"100px"}}>Date</div>
<div style={{marginLeft:"840px", marginTop:"-143px"}}>...........................................................................</div>
<div style={{marginLeft:"860px", marginBottom:"100px"}}>(Signature by event manager)</div>
</table>
<br/>
</div>
)
}
}
