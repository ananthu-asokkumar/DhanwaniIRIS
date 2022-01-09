
import { AiOutlineDelete } from "react-icons/ai";
import styled from "styled-components";


export const CardData = ({handleDelete,card}) => {
    return (
        <Cards>
            <p>Card Number : {card}</p>
            <AiOutlineDelete className="delete" onClick={()=>{handleDelete()}}/>
        </Cards>
    )
}


const Cards = styled.div`
  width: 60%;
  margin: auto;

  height: 2rem;
  border: 1px solid blue;
  display: flex;
  justify-content: space-evenly;
  p {
    margin-top: 0;
    padding-top: 0.4rem;
  }

  .delete {
    color: red;
    font-size: 1.5rem;
    padding-top: 0.4rem;
  }
`;




