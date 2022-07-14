import React   from 'react'
 import {FcTodoList} from 'react-icons/fc'
 import styled from 'styled-components'
function Navbar( ) {

    const Navbar = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
  text-align: center;
  /* background: #0a2663; */
  justify-content: center;
  text-align: center;
  border-radius: 15px;
    margin-top:  40px;
    `

    const Title = styled.h1`
     font-size: 40px;
     color: #fff;
     `
    return (



            <Navbar  >
            
                <Title>  <FcTodoList></FcTodoList>Todo </Title>
 
            </Navbar>

    )
}

export default Navbar