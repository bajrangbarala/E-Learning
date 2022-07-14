import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const params = useParams();
    const {name} = params
  return (
    <>
    <div>this is user {name} name</div>
    <div>this is user {name} name</div>
    <div>this is user {name} name</div>
    <div>this is user {name} name</div>
    <div>this is user {name} name</div>
    <div>this is user {name} name</div>
    <div>this is user {name} name</div>

    </>
  )
}

export default User