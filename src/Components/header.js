import React from 'react'
import {Header,Segment,Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

  const HeaderComponent = () => {

    return (
        <Segment clearing>
        <Header as='h2' floated='left'>
          Task
        </Header>
        <Header as='h5' floated='right'>
          Home
        </Header>


        <Button className="ui primary button" as={Link} to='/adduser'>
  Add User
</Button>
      </Segment>
)
}

export default HeaderComponent;
