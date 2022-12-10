import {React,useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../index.css";
const Browser = ({currLocation}) => {
  const [result, setResult] = useState({})

  useEffect(() => {
    getDir()

  }, [currLocation])
  
  const getDir =async () => {
    try{
      const response = await fetch(`http://localhost:3001/path${currLocation}`);
      const json = await response.json();
      setResult(json);
    }catch(error){
      setResult({type :'file'});
    }
  }

  const renderChildren = () => {
    if (result.type === 'dir') {
        return result.children.map((child) => {
            return (<Link className='childElement' to={`${currLocation !== "/" ? currLocation : ""}/${child.name}`} key={child.name}> {child.type === 'dir' ? <span className='childIcon'>&#10066;</span> : <span className='childIcon'>&#9993;</span>}  { child.name }</Link>)
        })
    }else{
      return (<div className='fileElement'> <h3>This is file:</h3> <h4>{currLocation.split("/").at(-1)}</h4></div>)

    }
  }
  return <div className="browserElement">{renderChildren()}</div>;
}

export default Browser