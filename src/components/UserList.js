import React from "react"
import { connect } from "react-redux"

import { fetchUser } from "../actions/userActions"

function mapStoreToProps(store) {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
  };
}

class UserList extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser())
  }

  render() {
    const { user } = this.props;

    return <div>
      <h1>{user.name}</h1>
    </div>
  }
}

export default connect(mapStoreToProps)(UserList);