import { useRef, useState } from "react";
import styled from "styled-components";
import { CardData } from "./CardData";

export const Home = () => {
  const [inp1, setInp1] = useState("");
  const [inp2, setInp2] = useState("");
  const [inp3, setInp3] = useState("");
  const [inp4, setInp4] = useState("");
  const [card,setCard]=useState("")

  const inpRef1 = useRef(null);
  const inpRef2 = useRef(null);
  const inpRef3 = useRef(null);
  const inpRef4 = useRef(null);

  const handleChange1 = (e) => {
    
    let x = e.target.value.trim().split(" ").join("");
    if (x.length>4) {
      inpRef1.current.value = x.slice(0, 4);
      inpRef2.current.value = x.slice(4,8);
      inpRef3.current.value = x.slice(8, 12);
      inpRef4.current.value = x.slice(12, 16);
      inpRef4.current.focus();
    }
    if (x.length < 4) {
      setInp1(x);
    } else if (x.length === 4) {
      setInp1(x);
      inpRef2.current.focus();
    } 
  };

  const handleChange2 = (e) => {
    let x = e.target.value;

    if (x.length < 4) {
      setInp2(x);
    } else if (x.length === 4) {
      setInp2(x);
      inpRef3.current.focus();
    } 
  };

  const handleChange3 = (e) => {
    let x = e.target.value;

    if (x.length < 4) {
      setInp3(x);
    } else if (x.length === 4) {
      setInp3(x);
      inpRef4.current.focus();
    } 
  };

  const handleChange4 = (e) => {
    if (e.target.value.length <= 4) {
      setInp4(e.target.value);
    } else if (e.target.value.length > 4) {  
      inpRef4.current.value = e.target.value.slice(0,4);
    } 
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    let a = inpRef1.current.value.trim().split("").join(" ")
    let b = inpRef2.current.value.trim().split("").join(" ")
    let c = inpRef3.current.value.trim().split("").join(" ");
    let d = inpRef4.current.value.trim().split("").join(" ");
    setCard(a+ ",  " + b +  ",  " + c + ",  " + d)

  };

  const handleDelete = () => {
    setCard("");

    inpRef1.current.value = "";
    inpRef2.current.value = "";
    inpRef3.current.value = "";
    inpRef4.current.value = "";
  };

  return (
    <>
      <Form action="" onSubmit={handleSubmit}>
        <div className="inputs">
          <input
            // onPaste={handlePaste}
            ref={inpRef1}
            type="text"
            name=""
            id=""
            onChange={handleChange1}
          />
          <input
            ref={inpRef2}
            type="text"
            name=""
            id=""
            onChange={handleChange2}
          />
          <input
            ref={inpRef3}
            type="text"
            name=""
            id=""
            onChange={handleChange3}
          />
          <input
            ref={inpRef4}
            type="text"
            name=""
            id=""
            onChange={handleChange4}
          />
        </div>

        <input className="submit" type="submit" name="" id="" />
      </Form>
      {card.length === 37 ? <CardData handleDelete={handleDelete} card={card} /> :
        card.length?
          <p> Invalid card no</p> : <p> Please enter your card details</p>
      }
    </>
  );
};


const Form = styled.form`

width:70%;
margin:auto;
margin-top: 5rem;
height: 5rem;
/* border: 1px solid red; */

.inputs{
  display: flex;
  justify-content: space-between;

  input{
    letter-spacing: 2rem;
    width: 10rem;
    height: 1.5rem;
    font-size: 1rem;
    padding-left: 1.5rem;
    border: 1px solid blue;
    &:focus{
      outline: none;
    }
  }
}

.submit{
  width: 22%;
  justify-content: center;
  margin-top: 1rem;
  
}
`;