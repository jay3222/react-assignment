import React,{useState} from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const genderOptions = [
    { key: 'm', text: 'Maharashtra', value: 'Maharashtra' },
    { key: 'f', text: 'Goa', value: 'Goa' },
    { key: 'o', text: 'Gujrat', value: 'Gujrat' },
    { key: 'o', text: 'Delhi', value: 'Delhi' },
  ]
const AddUser = () =>{
    let history = useHistory()
  const [user,setUser] = useState({
      first_name:'',
       last_name :'',
       email:'',
       state :'',
       city:'',
       pincode:''   
  })

const {first_name,last_name,email,pincode,state,city} = user;

const handleChange = e => {
    // console.log(e)
    // console.log(e.target.title)
    // if(e.target.value == undefined){
    //     setUser({...user,[e.target.name]:e.target.textContent})
    // }
    setUser({...user,[e.target.name]:e.target.value})
    
}
console.log("state --",state.user)
console.log("state --",user)

const onSubmit = async e =>{
    e.preventDefault();
    const params = {
        param2:user.first_name,
        param3:user.last_name,
        param1:user.email,
        param6 :user.state,
        param5:user.city,
        param4:user.pincode
    }

    const res = await axios.get('https://c0ri699qs5.execute-api.us-east-1.amazonaws.com/v1/add', { params});

    // res.data.args;

    
    // await axios.get('https://c0ri699qs5.execute-api.us-east-1.amazonaws.com/v1/add',user)
    history.push('/')
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
      placeholder='joe@schmoe.com'
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
      <select id="lang" name ='state' onChange={e => handleChange(e)} value={user.value}>
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
      content='Add User'
      label='Label with htmlFor'
    />
  </Form>
)

}

export default AddUser;