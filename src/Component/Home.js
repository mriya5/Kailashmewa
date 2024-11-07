import React from 'react'
import './Home.css'
import Header from './Header'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const navigate = useNavigate();
  const handleMore=()=>{
    navigate(`/search`);
  }
  return (
    <div>
      <Header/>
      <div className='home'>
        <h1>Quality Matters</h1>
        <p>Good diet is a bank account.Good food choices are good investmnt</p>
      </div>
      <h1>Variety</h1>
      <div className='products'>
        <div className='varieties'>
          <img src='https://media.istockphoto.com/id/1143299497/photo/cashew-nuts-on-white.jpg?s=612x612&w=0&k=20&c=b-BiIXD66jVtrrdJFXS2Sb3VBrbKPeE7GfDIKFq05r0='/>
          <h5>Cashew</h5>
        </div>
        <div className='varieties'>
          <img src='https://media.istockphoto.com/id/153711056/photo/almonds.jpg?s=612x612&w=0&k=20&c=Tw_DRI4aBDp64AbK1PTQ6o_GGRnhi2IcrUoMwyfD6uQ='/>
          <h5>Almond</h5>
        </div>
        <div className='varieties'>
          <img src='https://media.istockphoto.com/id/171306112/photo/bunch-of-golden-yellow-raisins-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=i8NJ53z50QfJpawHaAy3nvFvAvICWJpxneekNpKAbws='/>
          <h5>Raisin</h5>
        </div>
        <div className='varieties'>
          <img src='https://media.istockphoto.com/id/1488545994/photo/dried-figs-or-anjeer-fruit-is-a-healthy-nutritional-food.jpg?s=612x612&w=0&k=20&c=LHIetuW2Fn1SEf5gpeCXaejlKV_LMJUmhnS-O9ZfDVM='/>
          <h5>Fig</h5>
        </div>
        <div className='varieties'>
          <img src='https://media.istockphoto.com/id/182904214/photo/walnut-cracked.jpg?s=612x612&w=0&k=20&c=6DaFJ3vsszbiYbTjMRiX90nDMLgtQVrKyhoab7vA6lg='/>
          <h5>Walnut</h5>
        </div>
        <div className='varieties'>
          <img src='https://media.istockphoto.com/id/641759514/photo/pistachio-nuts.jpg?s=612x612&w=0&k=20&c=DM4sBKMyJ6mguwXy2j55w0wIpIR0rvdaX9tIls7Hzc8='/>
          <h5>Pistachio</h5>
        </div>
        <div className='varieties'>
          <img src='https://media.istockphoto.com/id/171321093/photo/date-fruit.jpg?s=612x612&w=0&k=20&c=PueRA0XWKxk63d7z4nfGwoqG4z70YLVM85V_-LQ53fg='/>
          <h5>Dates</h5>
        </div>
        <div className='varieties'>
          <img src='https://media.istockphoto.com/id/1623383661/photo/fox-nuts-also-known-as-makhana-lotus-seeds-kamal-ka-phool-indian-fried-snacks-concept.jpg?s=612x612&w=0&k=20&c=Hrez7HBua4GOwNdYbFmyZcS9Q0BWUrT48sZBclLq5FA='/>
          <h5>Fox Nut</h5>
        </div>
        {/* <div style={{padding:"10% 5%",borderRadius: "20px"}}>
          <img style={{width: '30px', height:'30px'}}src='https://cdn-icons-png.flaticon.com/128/11530/11530073.png'/>
          <h5 style={{borderRadius:"20px", backgroundColor:"green", width:"fit-content", padding:"10%", color:'white'}}>SeeMore...</h5>
        </div> */}
      </div>
      <div>
        <h1>Best Seller</h1>
        <div className='products'>
        <div className='variety'>
          <img src='https://media.istockphoto.com/id/1696814461/photo/fresh-cashew-nuts-inside-a-glass-jar-with-a-closed-lid.jpg?s=612x612&w=0&k=20&c=v7_gcmCWTtX-PSSzWwZi2f2QUzYFOvavjRAxPh2MfIw='/>
          <h3>Cashew</h3>
          <p>Quanity: 250g-1000g</p>
          <p>Price: Contact Us </p>
          <button>Order Now</button>
        </div>
        <div className='variety'>
          <img src='https://media.istockphoto.com/id/890377420/photo/organic-almonds.jpg?s=612x612&w=0&k=20&c=R8eCXw0-AX6aKbh5WCIaOF_QvlSyYb_IW592DPdAJno='/>
          <h3>Almond</h3>
          <p>Quanity: 250g-1000g</p>
          <p>Price: Contact Us </p>
          <button>Order Now</button>
        </div>
        <div className='variety'>
          <img src='https://media.istockphoto.com/id/1441882246/photo/glass-bowl-filled-with-fresh-raisins-table-top-view.jpg?s=612x612&w=0&k=20&c=MEPYplby8l4YIZfwIFqo6dm4d7HtTVyLGzQPO3K22uk='/>
          <h3>Raisin</h3>
          <p>Quanity: 250g-1000g</p>
          <p>Price: Contact Us </p>
          <button>Order Now</button>
        </div>
        <div className='variety'>
          <img src='https://media.istockphoto.com/id/185257624/photo/dried-cranberries-on-a-bowl-from-directly-above.jpg?s=612x612&w=0&k=20&c=SV9PamDpZidQl72q95DPeAX8EawJu-GLs-IP8MvlB3g='/>
          <h3>Berries</h3>
          <p>Quanity: 250g-1000g</p>
          <p>Price: Contact Us </p>
          <button>Order Now</button>
        </div>
        <div className='variety'>
          <img src='https://media.istockphoto.com/id/1206457710/photo/dry-fruits-energy.jpg?s=2048x2048&w=is&k=20&c=sWiD3pEUtkWOV4oa-QUJsohzAs84bTFGu63w9CiknqU='/>
          <h3>Fig</h3>
          <p>Quanity: 250g-1000g</p>
          <p>Price: Contact Us </p>
          <button>Order Now</button>
        </div>
        <div className='variety'>
          <img src='https://media.istockphoto.com/id/2020005128/photo/pristine-pile-of-premium-dry-walnuts-in-a-wooden-bowl-ideal-for-culinary-creations-and.jpg?s=612x612&w=0&k=20&c=OVAYvzSTh_u8Gk6Ef9JNdk9vFf4u1A3ImqpxwTPiFV0='/>
          <h3>Walnut</h3>
          <p>Quanity: 250g-1000g</p>
          <p>Price: Contact Us </p>
          <button>Order Now</button>
        </div>
        <div className='variety'>
          <img src='https://media.istockphoto.com/id/893396112/photo/closeup-of-pistachio.jpg?s=612x612&w=0&k=20&c=l7Ox48xgmb-Qu4XJ1i_szqcs6ScMcQ8rIEjHjjfA46s='/>
          <h3>Pistachio</h3>
          <p>Quanity: 250g-1000g</p>
          <p>Price: Contact Us </p>
          <button>Order Now</button>
        </div>
        <div className='variety'>
          <img src='https://media.istockphoto.com/id/171580649/photo/dates.jpg?s=612x612&w=0&k=20&c=YRKli68jtdBrn2b_6AW97hymY6Bwmkh9GuybWswsoGo='/>
          <h3>Dates</h3>
          <p>Quanity: 250g-1000g</p>
          <p>Price: Contact Us </p>
          <button>Order Now</button>
        </div>
        <div className='variety'>
          <img src='https://media.istockphoto.com/id/1403264712/photo/close-up-of-salted-makhana-or-fox-nuts-in-a-glass-jar.jpg?s=612x612&w=0&k=20&c=fUR75GmLmiZeU9_OECTp7yE_CpbDzAM_YqZRckWRIc0='/>
          <h3>Fox Nut</h3>
          <p>Quanity: 250g-1000g</p>
          <p>Price: Contact Us </p>
          <button>Order Now</button>
        </div>
        <div style={{padding:"10% 5%",borderRadius: "20px"}} onClick={handleMore}>
          <img style={{width: '30px', height:'30px'}}src='https://cdn-icons-png.flaticon.com/128/11530/11530073.png'/>
          <h5 style={{borderRadius:"20px", backgroundColor:"green", width:"fit-content", padding:"10%", color:'white'}}>SeeMore...</h5>
        </div>
      </div>
      </div>
      <div className='video'>
        <h1>Buy a healthy habit for your family</h1>
      </div>
      <h1>Happy Customer</h1>
      <div className='feedback'>
        <div>
          <img src='https://cdn-icons-png.flaticon.com/128/3710/3710844.png'/>
          <h3>Pertyu</h3>
          <p>asdfghj kesdrtyfu gihojp kgfxcvbn cxfcgvhbjnkldfghjkv fghj jhgfghj jjxfc ghjh fdfg hc fvn n </p>
        </div>
        <div>
          <img src='https://cdn-icons-png.flaticon.com/128/11510/11510822.png'/>
          <h3>Tertyu</h3>
          <p>asdfghj kesdrtyfu gihojp kgfxcvbn cxfcgvhbjnkldfghjkv fghj jhgfghj jjxfc ghjh fdfg hc fvn n </p>
        </div>
        <div>
          <img src='https://cdn-icons-png.flaticon.com/128/3233/3233515.png'/>
          <h3>Yertyu</h3>
          <p>asdfghj kesdrtyfu gihojp kgfxcvbn cxfcgvhbjnkldfghjkv fghj jhgfghj jjxfc ghjh fdfg hc fvn n </p>
        </div>
        <div>
          <img src='https://cdn-icons-png.flaticon.com/128/6889/6889369.png'/>
          <h3>Qertyu</h3>
          <p>asdfghj kesdrtyfu gihojp kgfxcvbn cxfcgvhbjnkldfghjkv fghj jhgfghj jjxfc ghjh fdfg hc fvn n </p>
        </div>
        <div>
          <img src='https://cdn-icons-png.flaticon.com/128/11829/11829347.png'/>
          <h3>Aertyu</h3>
          <p>asdfghj kesdrtyfu gihojp kgfxcvbn cxfcgvhbjnkldfghjkv fghj jhgfghj jjxfc ghjh fdfg hc fvn n </p>
        </div>
        <div>
          <img src='https://cdn-icons-png.flaticon.com/128/4515/4515630.png'/>
          <h3>Dertyu</h3>
          <p>asdfghj kesdrtyfu gihojp kgfxcvbn cxfcgvhbjnkldfghjkv fghj jhgfghj jjxfc ghjh fdfg hc fvn n </p>
        </div>
        <div>
          <img src='https://cdn-icons-png.flaticon.com/128/3346/3346158.png'/>
          <h3>Hertyu</h3>
          <p>asdfghj kesdrtyfu gihojp kgfxcvbn cxfcgvhbjnkldfghjkv fghj jhgfghj jjxfc ghjh fdfg hc fvn n </p>
        </div>
        <div>
          <img src='https://cdn-icons-png.flaticon.com/128/6233/6233179.png'/>
          <h3>Lertyu</h3>
          <p>asdfghj kesdrtyfu gihojp kgfxcvbn cxfcgvhbjnkldfghjkv fghj jhgfghj jjxfc ghjh fdfg hc fvn n </p>
        </div>
      </div>
      <div className='foot'>
        <h5></h5>
      </div>
      <Footer/>
    </div>
  )
}
