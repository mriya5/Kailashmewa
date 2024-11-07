import React, { useState } from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
export default function Header() {
    const [searchitem, setSearchitem]=useState('')
    const navigate = useNavigate();
    const handleSearch=(e)=>{
        setSearchitem(e.target.value)
    }
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
          console.log("Searching for:", setSearchitem);
        //   navigate(`/search/${setSearchitem}`);
            navigate(`/search`);
            setSearchitem('')
        }
      };
  return (
    <div className='header'>
        <div className='leftheader'>
            <img className='logo' src='/kailash.png' alt="Screen logo"/>
        </div>
        <div className='rightheader'> 
            <div className='upperheader'>
                <div className='search'>
                    <img style={{height:' 30px', width:' 30px',marginRight: '1%', marginLeft: '1%'}} src='https://cdn-icons-png.flaticon.com/128/751/751381.png'/>
                    <input type='text' placeholder='search here...' value={searchitem} onChange={handleSearch} onKeyPress={handleKeyPress}/>
                </div>
                <div className='icons'>
                    <img src='https://cdn-icons-png.flaticon.com/128/6460/6460789.png'/>
                    <img src='https://cdn-icons-png.flaticon.com/128/535/535285.png'/>
                    <img src='https://cdn-icons-png.flaticon.com/128/743/743007.png'/>
                </div>
            </div>
            <div className='lowerheader'>
                <p>DryFruit</p>
                <p>Mixes</p>
                <p>Cashew</p>
                <p>Nuts</p>
                <p>Berries</p>
                <p>Almond</p>
            </div>
        </div>
    </div>
  )
}
