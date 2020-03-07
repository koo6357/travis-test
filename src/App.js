import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

const Container = styled.div`
    
`;

const Header = styled.header`
    border-bottom:1px solid #eee;
    height: 70px;
    display:flex;
    align-items:center;
    padding: 0 50px;
    .logo {
        margin-right: 150px;
        img {
          width: 60px;
        }
    }
`;

const Nav = styled.nav`
    display:flex;
    align-items:center;
    a {
      display:block;
      padding: 20px;
      margin: 0 20px;
      font-size: 16px;
      text-transform:uppercase;
      font-weight: 500;
      color:#333;
      text-decoration:none;
    }
`;

function App() {
  return (
    <Container>
      <Header>
          <div className="logo">
              <img src={logo} alt="logo" />
          </div>

          <Nav>
              <a href="#!">Home</a>
              <a href="#!">Task</a>
              <a href="#!">Service</a>
              <a href="#!">Connect</a>
          </Nav>
      </Header>



    </Container>
  );
}

export default App;
