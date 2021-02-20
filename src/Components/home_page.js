import React,{useState, useEffect} from 'react'
import {Table,Button,Input} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {useHistory,useParams} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

const StudentTable = () => {
    let history = useHistory()
 const [users,setUsers] =useState([]);
 const [search,setSearch]=useState("");
 

 useEffect(() => {
console.log("")
loadUsers();


 },[]);
const loadUsers = async() => {
    const result = await axios.get(`https://j5ej5u32gg.execute-api.us-east-1.amazonaws.com/v1/fetch`)
  setUsers(result.data.data)
console.log(result.data.data)
}


const InputEvent=(e)=>{
  console.log(e.target.value);
  setSearch(e.target.value)

  

}

const deleteUser = async(id) =>{
    const params ={
        param1:id,
        
        
    }
    console.log(params)

    await axios.get('https://k6j938wg66.execute-api.us-east-1.amazonaws.com/v1/delete',{params})
    alert(`Are you Sure You Want to Delete this Contact`);
    await loadUsers();
}

// let a=1;
    return(
      <>
      <Input placeholder='Search...'
name="search"
value={search}
onChange={InputEvent}
 
 />
        
<Table singleLine>
    <Table.Header className="ui selectable inverted blue table">
      <Table.Row >
      <Table.HeaderCell>#</Table.HeaderCell>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell> Last Name</Table.HeaderCell>
        <Table.HeaderCell>Email </Table.HeaderCell>
        <Table.HeaderCell> State</Table.HeaderCell>
        <Table.HeaderCell> city</Table.HeaderCell>
        <Table.HeaderCell> pincode</Table.HeaderCell>
        <Table.HeaderCell> Action</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {/* <Table.Row>
        <Table.Cell>John Lilki</Table.Cell>
        <Table.Cell>September 14, 2013</Table.Cell>
        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
        <Table.Cell>No</Table.Cell>
      </Table.Row> */}
       

     { users.filter((user)=>{
      if(search==""){
        return user
      }else if (user.first_name.toLowerCase().includes(search.toLowerCase())){
          return user
        }else if (user.last_name.toLowerCase().includes(search.toLowerCase())){
          return user
        }else if (user.email.toLowerCase().includes(search.toLowerCase())){
          return user
        }
        else if (user.states.toLowerCase().includes(search.toLowerCase())){
          return user
        }
        else if (user.city.toLowerCase().includes(search.toLowerCase())){
          return user
        }
        else if (user.pincode.toLowerCase().includes(search.toLowerCase())){
          return user
        }}
).map((user,index)=>(
      
     <Table.Row >
     <Table.Cell>{index + 1}</Table.Cell>
      <Table.Cell>{user.first_name}</Table.Cell>
      <Table.Cell>{user.last_name}</Table.Cell>
      <Table.Cell>{user.email}</Table.Cell>
      <Table.Cell>{user.states}</Table.Cell>
      <Table.Cell>{user.city}</Table.Cell>
      <Table.Cell>{user.pincode}</Table.Cell>
      <Table.Cell>
      <Button className="ui primary button" as={Link} to= {`/edit/${index}`}>
  Edit
</Button>
<Button className="ui negative button" as={Link} onClick={()=>deleteUser(user.email)}>
  Delete
</Button>
</Table.Cell>
   </Table.Row>

      ) )} 
    </Table.Body>
    </Table>

</>
    )

}


export default StudentTable
