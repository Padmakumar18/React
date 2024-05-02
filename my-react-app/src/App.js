import './App.css'
import { useState } from 'react'

function App() 
{
  const[input,setInput] = useState({});
  function setValue(e)
  {
    const name = e.target.name ;
    const value = e.target.value ;
    setInput((prev)=>
    {
      return {...prev,[name]:value} ;
    })
  }
  function submit(e)
  {
    e.preventDefault();
    console.log(input)
  }
  return (
    <>
      <form onSubmit={submit}>
        <label> Name : <input name="name" onChange={setValue}  required /></label>
        <br/><label> Age : <input name="age" onChange={setValue}  required /></label>
        <br/><label> Mail : <input name="email" onChange={setValue} value={input.email}  required /></label>
        <br/><label> Phno: : <input name="phno" onChange={setValue} value={input.phno}  required /></label>
        <br/><label> Country: : <select name="country" onChange={setValue} value={input.phno}  required >
          <option value={"India"}>Ind</option>
          <option value={"Australia"}>Aus</option>
          <option value={"USA"}>USA</option>
          </select></label>
        <br/><input type='submit' value={'Submit Form'}/>
      </form>
    </>
  );
}

export default App;