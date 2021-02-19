import React,{useState,useEffect} from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
import axios from 'axios'
import {useHistory,useParams} from 'react-router-dom'

const genderOptions = [
    { key: 'm', text: 'Maharashtra', value: 'Maharashtra' },
    { key: 'f', text: 'Goa', value: 'Goa' },
    { key: 'o', text: 'Gujrat', value: 'Gujrat' },
    { key: 'o', text: 'Delhi', value: 'Delhi' },
  ]
const EditUser = () =>{
    let history = useHistory()
    const {id} = useParams(); 
    // alert(id)
  const [user,setUser] = useState({
      first_name:'',
       last_name :'',
       email:'',
       states :'',
       city:'',
       pincode:''   
  })

const {first_name,last_name,email,pincode,state,city} = user;

const handleChange = e => {
    setUser({...user,[e.target.name]:e.target.value})
    
}
// console.log("state --",state.user)
console.log("state --",user)

const onSubmit = async e =>{
    e.preventDefault();
    const params = {
        param2:user.first_name,
        param3:user.last_name,
        param1:user.email,
        param6 :user.states,
        param5:user.city,
        param4:user.pincode
    }

    const res = await axios.get('https://o1wm686yz2.execute-api.us-east-1.amazonaws.com/v1/edit', { params});
    history.push('/')
}

useEffect(()=>{
    loadUser()
},[])

const loadUser = async ()=> {
    const res = await axios.get('https://j5ej5u32gg.execute-api.us-east-1.amazonaws.com/v1/fetch');
console.log(res.data.data[id]);

setUser(res.data.data[id])
}

return (
    <Form onSubmit = {e => onSubmit(e)}>
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='First name'
        name = 'first_name'
        placeholder='First name'
        value={first_name}
        onChange ={e => handleChange(e)}
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Last name'
        placeholder='Last name'
        value ={last_name}
        name = 'last_name'
        onChange = {e => handleChange(e)}

      />
      <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Email'
     disabled placeholder='joe@schmoe.com'
    //   error={{
    //     content: 'Please enter a valid email address',
    //     pointing: 'below',
    //   }}
    value ={email}
    name ='email'
    onChange = {e=> handleChange(e)}
    />
      {/* <Form.Field
        control={Select}
        options={genderOptions}
        label={{ children: 'State', htmlFor: 'form-select-control-gender' }}
        placeholder='State'
        search
        searchInput={{ id: 'form-select-control-gender' }}
         
        title ='state'
        onChange ={e => handleChange(e)}
      /> */}
      <select id="lang" name ='states' onChange={e => handleChange(e)} value={user.value}>
                  <option value="select">State</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option  value="Gujrat">Gujrat</option>
                  <option  value="Delhi">Delhi</option>
                  <option  value="Goa">Goa</option>
      </select>


<Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='City'
        placeholder='City'
        value = {city}
        name= 'city'
        onChange = {e => handleChange(e)}
    
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Pin Code'
        name= 'pincode'
       value ={pincode}
       onChange = {e=> handleChange(e)}
      />
    </Form.Group>




     
    
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Update'
      label='Label with htmlFor'
    />
  </Form>

  

  
)

}

export default EditUser;