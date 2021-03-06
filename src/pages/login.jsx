import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Styled from 'styled-components';
import { userLogout } from '../helper/userLogin';
import { useStateValue } from '../context/state';

const Login = () => {
  const history = useHistory();
  const [state, dispatch] = useStateValue();
  const [userName, setUserName] = useState('');
  const [logout, setLogout] = useState(false);

  const handleChange = (e) => {
    setUserName(e.target.value);
  }

  const handleStart = () => {
    localStorage.setItem('login', userName);
    setUserName('');
    history.push('/home');
  }

  useEffect(() => {
    userLogout(dispatch, setLogout);
  }, [logout])

  return (
    <Container>
      <Box>
        <label>Usuário</label>
        <Input 
        type='text'  
        onChange={handleChange} 
        placeholder='Digite seu nome de usuário'
        value={userName}
        />
        <Button type='button'onClick={handleStart}>Entrar</Button>
      </Box>
    </Container>
  )
}

const Container = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 80%;
`;

const Box = Styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  height: 300px;
  width: 300px;
  border: 1px solid #CCC;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  > label {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const Input = Styled.input`
  height: 2rem;
  width: 80%;
  border: 1px solid #ccc;
  padding: 3px;
`;

const Button = Styled.button`
  height: 2rem;
  width: 40%;
  color: #FFF;
  background-color: #000;
  border-radius: 8px;
  margin-top: 10px;
  font-size: 1.3rem;

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

`;

export default Login