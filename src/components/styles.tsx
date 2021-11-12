import styled from "styled-components";

export const TopMarginedDiv = styled.div`
  margin-top: 20px;
`;

export const TopMarginedTitleDiv = styled.div`
  margin-top: 20px;
`;

export const CenteredDiv = styled.div`
  text-align: center;
`;

export const ListDiv = styled.div`
  border: outset;
  margin-left: 50px;
  margin-bottom: 40px;
  padding-right: 20px;
  padding-left: 20px;
  width: fit-content;
  height: fit-content;
`;

export const FormattedDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const ListItemText = styled.span`
  padding-right: 20px;
  font-size: 17px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  text-decoration: underline;
`;

export const Input = styled.input`
  font-size: 15px;
  font-weight: 200;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const Title = styled.header`
  font-size: 40px;
  text-align: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 10%;
  margin-left: 10px;
  border: 1px solid black;
  background-color: #4aa14a;
  color: white;
`;

export const DeleteButton = styled.button`
  padding: 10px;
  border-radius: 10%;
  margin-left: 10px;
  border: 2px solid black;
  background-color: red;
  color: white;
`;
