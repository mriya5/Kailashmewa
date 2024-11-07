import React from 'react'
import './Header.css'
export default function Footer() {
  return (
    <div className='footer'>
        <div className='footercontact'>
            <img src='kailash.png'/>
            <div className='footerdetails'>
                <p><img src='https://cdn-icons-png.flaticon.com/128/535/535137.png'/>123, X-Floor, Street Name, sector-AB, City</p>
                <p><img src='https://cdn-icons-png.flaticon.com/128/4213/4213179.png'/>9876543210</p>
                <p><img src='https://cdn-icons-png.flaticon.com/128/18154/18154191.png'/>kailashmewa@gmail.com</p>
            </div>
        </div>
        <div className='footerdivs'>
            <div>
                <h3>Track Order</h3>
                <p>Where is my order</p>
            </div>
            <div>
                <h3>Track Order</h3>
                <p>Where is my order</p>
                <p>Where is my order</p>
                <p>Where is my order</p>
                <p>Where is my order</p>
            </div>
            <div>
                <h3>Track Order</h3>
                <p>Where is my order</p>
                <p>Where is my order</p>
                <p>Where is my order</p>
                <p>Where is my order</p>
                <p>Where is my order</p>
            </div>
            <div>
                <h3>Track Order</h3>
                <p>Where is my order</p>
                <p>Where is my order</p>
                <p>Where is my order</p>
            </div>
        </div>
        <h2>Don't miss out the special offer</h2>
        <div className='footersearch'>
            <input type='text' placeholder="Contact Number"/>
            <img src='https://cdn-icons-png.flaticon.com/128/1538/1538493.png'/>
        </div>
        <h2>We accept for payment</h2>
        <div className='footerpay'>
            <img src='https://cdn-icons-png.flaticon.com/128/825/825454.png'/>
            <img src='data:image/png;base64,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'/>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXxVGDtMW3oDqnu_ICHDG4CuXwoFv1Qptpig&s'/>
        </div>
    </div>
  )
}
