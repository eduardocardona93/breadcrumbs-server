import { Link } from 'react-router-dom'

import {React,useEffect, useState } from 'react'

import "../index.css";

const Breadcrumbs = ({currLocation}) => {
    
    const [dirs, setDirs] = useState([])
    useEffect( () => {
       setDirs(currLocation === "/" ? [""] : currLocation.split("/"));
    }, [currLocation]);
    
    const breadcrumbsList =  () =>{
        let routeAccum = "";
            return dirs.map((route,index) => {
                routeAccum += route.length > 0 ? `/${route}` : '';
                const last = index == dirs.length - 1   ;
                return ( last ? <div className='breadcrumb breadcrumb-active' key={routeAccum}>{route.length > 0 ? route : "/"}</div> :
                    <div key={routeAccum} className='breadcrumb-holder' >
                        <Link className='breadcrumb breadcrumb-not-active' to={routeAccum} > {route.length > 0 ? route : "/"} </Link>  
                           <div className="breadcrumb breadcrumb-arrow">&gt;</div>
                    </div>
    
                )
            })

    }
    return (<div className="breadcrumbsElement">{breadcrumbsList()}</div>)
}

export default Breadcrumbs