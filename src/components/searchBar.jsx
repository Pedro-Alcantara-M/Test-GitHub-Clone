import React from 'react'
import Styled from 'styled-components'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const SearchBar = () => {

  return(
    <Bar>
      <Input type='text' placeholder='Find a repository'/>
      <FormButton type='button'>Type <ArrowDropDownIcon/></FormButton>
      <FormButton type='button'>Language <ArrowDropDownIcon/></FormButton>
      <FormButton type='button'>Sort <ArrowDropDownIcon/></FormButton>
      <ButtonNew type='button'>New</ButtonNew>
    </Bar>
  )
}

const Bar = Styled.form`
  display: flex;
  flex-direction: row;
  margin: 15px 5px; 
  width: 100%;
  border-bottom: #000;

`;

const Input = Styled.input`
  width: 100%;
  padding: 5px 12px;
  border: 1px solid #CCC;
  font-size: 14px;
  line-height: 20px;
  border-radius: 6px;
  margin: 0 20px;
  outline: none;

  &:focus{
    outline: 2px solid #79b8ff
  }

`;

const FormButton = Styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px 16px;
  margin-right: 5px;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 20px;

  >svg {
    margin: 0;
  }
`;

const ButtonNew = Styled.button`
height: 30px;
color: #fff;
background-color: #30a14e;
border: 1px solid #ccc;
border-radius: 5px;
padding: 5px 16px;
margin-right: 5px;
font-size: 14px;
font-weight: 500;
line-height: 20px;
`;


export default SearchBar