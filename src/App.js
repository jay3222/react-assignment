import {BrowserRouter,Route,Switch} from 'react-router-dom'
// import './App.css';
import HeaderComponent from './Components/header'
import StudentTable from './Components/home_page'
import AddUser from './Components/users/AddUser'
import EditUser from './Components/users/edituser'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <HeaderComponent />
      <Switch>
     
        <Route exact path = '/' component = {StudentTable} />
        {/* <Route path = / */}
        <Route exact path ='/adduser' component ={AddUser}/>
        <Route exact path ='/edit/:id' component ={EditUser}/>
      </Switch>
      </BrowserRouter>
    
    
     
      
    </div>
  );
}

export default App;
