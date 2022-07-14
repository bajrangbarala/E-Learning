import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Prodected(props) {
    const {Component} = props;
    const navigate = useNavigate();
    useEffect(()=>{
        let Login =localStorage.getItem('Login');
        if (!Login){
            navigate('/Login')
        }
    });
  return (
    <>
        <Component/>
    </>
  )
}

export default Prodected