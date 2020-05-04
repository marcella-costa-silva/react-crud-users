import React, { Component } from 'react'
import Main from '../template/Main'

const headerProps = {
  icon: 'users',
  title: 'Users',
  subtitle: 'User Registration: Include, List, Update and Delete'
}

export default class UserCrud extends Component {
  render() {
    return (
      <Main {...headerProps}>
        User
      </Main>
    )
  }
}