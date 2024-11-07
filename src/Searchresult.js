import React, { useState } from 'react'
import './Searchresult.css'
import Header from './Component/Header'
import Footer from './Component/Footer'
export default function Searchresult() {
    const [price, setPrice]=useState(0)
  return (
    <>
        <Header/>
        <div className='searchbar'>
        <div className='filters'>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center", width:"200px", height:"50px", padding:"20px"}}>
                <img style={{height:'30px', width:'30px'}}src='https://cdn-icons-png.flaticon.com/128/7094/7094575.png'/>
                <h5 style={{fontSize:"20px", marginLeft:"10px"}}>Apply filter</h5>
            </div>
            <div style={{ marginBottom: '20px', width:"60%" ,padding:"10px" }}>
                <label>Number of Years</label>
                <div style={{display:"flex", flexDirection:"row", width:"300px"}}>
                    <input type="range" min="0" max="1000" step="1" value={price} onChange={(e) => setPrice(Number(e.target.value))} style={{ width: '100%' }}/>
                    <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} style={{ width: '100px', textAlign: 'center', marginLeft: '10px' }}/>
                </div>
            </div>
            <div style={{display:"flex", alignItems:"flex-start", flexDirection:"column"}}>
                <label style={{fontSize:"25px", fontWeight:"bold"}}>Size chart</label>
                <div style={{margin:"20px"}}><input type='checkbox'/>50g</div>
                <div style={{margin:"20px"}}><input type='checkbox'/>100g</div>
                <div style={{margin:"20px"}}><input type='checkbox'/>200g</div>
                <div style={{margin:"20px"}}><input type='checkbox'/>250g</div>
                <div style={{margin:"20px"}}><input type='checkbox'/>500g</div>
                <div style={{margin:"20px"}}><input type='checkbox'/>1000g</div>
            </div>
            <img style={{height:"350px", width:"300px", borderRadius:"50%", marginTop:"100px"}} src='https://media.istockphoto.com/id/1304925651/photo/healthy-snack-of-nuts-and-dried-fruit.jpg?s=612x612&w=0&k=20&c=CtO8PGqH_wixbLAymw690heXa0qAEuDyS0H2N7PXi-g='/>
        </div>
        <div className='searched'>
            <div className='searcheditems'>
                <img src='https://media.istockphoto.com/id/946465954/photo/mixed-dried-fruits.jpg?s=612x612&w=0&k=20&c=hyVgAkKo3M2gdO0Owloq4qPTnpMGezZ4L2XhRDe22pE='/>
                <h5>Mixes</h5>
                <p>200g</p>
            </div>
            <div className='searcheditems'>
                <img src='https://media.istockphoto.com/id/1290648117/photo/almonds-nuts-with-healthy-food-top-view-on-dark-wooden-background-with-copy-space.jpg?s=612x612&w=0&k=20&c=mZxYsQl0X--ylf5sj8G1q2qz1Z5bwbZaTQW1isKuks0='/>
                <h5>Almond</h5>
                <p>200g</p>
            </div>
            <div className='searcheditems'>
                <img src='https://media.istockphoto.com/id/483675933/photo/healthy-food.jpg?s=612x612&w=0&k=20&c=dNzP3GRQ7NDJqFCtByrkn8lW5pNpiL5mrSu_S3IRewc='/>
                <h5>Dryfruits</h5>
                <p>200g</p>
            </div>
            <div className='searcheditems'>
                <img src='https://media.istockphoto.com/id/660791106/photo/mixed-nuts-and-dried-fruits-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=DYYaBB9p1H69sDjoI0jXOIugyEjJnXPeQsPYwTJpQNw='/>
                <h5>Mix Seeds</h5>
                <p>200g</p>
            </div>
            <div className='searcheditems'>
                <img src='https://media.istockphoto.com/id/1137723863/photo/mix-of-dried-and-candied-fruit-in-bowl-on-a-wooden-background-top-view.jpg?s=612x612&w=0&k=20&c=JcYOWK7XXYWaDVqnH9e0ceKG6V8BUaLVjZLp4rqR-TI='/>
                <h5>Dryfruits</h5>
                <p>200g</p>
            </div>
            <div className='searcheditems'>
                <img src='https://media.istockphoto.com/id/906015518/photo/chia-seeds-berries-and-nuts-for-a-healthy-breakfast.jpg?s=612x612&w=0&k=20&c=yUlUjL3au_7Y8bnsBJj82815r65SAePZ9V8jSX1pvAs='/>
                <h5>Berries</h5>
                <p>200g</p>
            </div>
            <div className='searcheditems'>
                <img src='https://media.istockphoto.com/id/483675381/photo/healthy-food.jpg?s=612x612&w=0&k=20&c=RnW-pnoFIksHDRmwqiK5JXKGzpJzgSU8S5qRt7mjZSg='/>
                <h5>Seed Mix</h5>
                <p>200g</p>
            </div>
            <div className='searcheditems'>
                <img src='https://media.istockphoto.com/id/875013894/photo/mixture-of-dried-fruits-and-nuts-in-a-bowl-and-wooden-scoop.jpg?s=612x612&w=0&k=20&c=YjIc077JvZLa3EYE7L9BUPZYo3Gj4ZcFnBCLFGQPL74='/>
                <h5>Mixes</h5>
                <p>200g</p>
            </div>
            <div className='searcheditems'>
                <img src='https://media.istockphoto.com/id/1295460588/photo/dried-fruits-and-nuts-mix-in-a-wooden-bowl-assortment-of-candied-fruits-judaic-holiday-tu.jpg?s=612x612&w=0&k=20&c=v7rEP0gXB089W8u1N7_o7iDVUTLQk2twJ4baUcYLBYk='/>
                <h5>fig</h5>
                <p>200g</p>
            </div>
            <div className='searcheditems'>
                <img src='https://media.istockphoto.com/id/1662888672/photo/cooking-a-wholesome-breakfast-granola-with-various-dried-fruits-and-nuts-in-a-bowl-the.jpg?s=612x612&w=0&k=20&c=Sq3YkFxquDG-lwUXZ9Vcx1ifvgzE0eNvfFcd31zloXk='/>
                <h5>Mix Berries</h5>
                <p>200g</p>
            </div>
            <div className='searcheditems'>
                <img src='https://media.istockphoto.com/id/872760992/photo/dried-fruit-and-mixed-nuts-in-a-wooden-bowl.jpg?s=612x612&w=0&k=20&c=lqGRqdp7GyTLvYQ4teDhstjHKg56RsPLnltOfpmG3IQ='/>
                <h5>Mix Seeds</h5>
                <p>200g</p>
            </div>
            <div className='searcheditems'>
                <img src='https://media.istockphoto.com/id/980809934/photo/almond-in-small-white-bowl-and-other-superfoods.jpg?s=612x612&w=0&k=20&c=vwk74IVimvCYsdFqVMqPFrHaZyhyOwfXUFz9Aa9SBD0='/>
                <h5>Nuts</h5>
                <p>200g</p>
            </div>
            <div className='searcheditems'>
                <img src='https://media.istockphoto.com/id/1438676729/photo/closeup-shot-of-a-bunch-of-nuts-in-a-bowl.jpg?s=612x612&w=0&k=20&c=iKUXrGmeboei1n5hYKUhc1t2eH8HAC63guP9MJ8x8sA='/>
                <h5>Mix Seeds</h5>
                <p>200g</p>
            </div>
            <div className='searcheditems'>
                <img src='https://media.istockphoto.com/id/1129552372/photo/mix-dry-fruits-in-bowl.jpg?s=612x612&w=0&k=20&c=-9tHtJe3vUj-odhP6QZJXuR1slje30j2VVzjKdGeB0c='/>
                <h5>Mix Seeds</h5>
                <p>200g</p>
            </div>
            <div className='searcheditems'>
                <img src='https://media.istockphoto.com/id/503540448/photo/dried-fruits-and-nuts-symbols-of-judaic-holiday-tu-bishvat.jpg?s=612x612&w=0&k=20&c=3vVfsu9ZhGOW2cvP0QvOT97lUSJ7VVPQcPgoGm5b2x4='/>
                <h5>Mix Seeds</h5>
                <p>200g</p>
            </div>
            <div className='searcheditems'>
                <img src='https://media.istockphoto.com/id/1150484411/photo/mix-of-dried-fruits-and-nuts-on-a-white-plate-apricot-almond-raisin-dates-fruit-on-a-beige.jpg?s=612x612&w=0&k=20&c=-gdIDEowEzXw9RAGh94YgVtqfXwt_Ixd-UYWH5YKbkQ='/>
                <h5>Berry Mix</h5>
                <p>200g</p>
            </div>
            <div className='searcheditems'>
                <img src='https://media.istockphoto.com/id/1206377892/photo/healthy-dried-ingredients-containing-minerals-carbohydrates-and-dietary-fiber-nutritious.jpg?s=612x612&w=0&k=20&c=9Z-ZAIznEqDf-U-UQ8K5fbTrMLRiD083cXPRbS1iZcE='/>
                <h5>Nuts</h5>
                <p>200g</p>
            </div>
            <div className='searcheditems'>
                <img src='https://media.istockphoto.com/id/1756948834/photo/assorted-nuts-on-a-wooden-plate-on-a-light-wooden-background-nuts.jpg?s=612x612&w=0&k=20&c=RhvaytX5jM_koHXZ714asKjS2OnDqq_-kwiQNaQYU7k='/>
                <h5>Nuts & Seeds</h5>
                <p>200g</p>
            </div>
            <div className='searcheditems'>
                <img src='https://media.istockphoto.com/id/630041344/photo/oat-cereal-on-table.jpg?s=612x612&w=0&k=20&c=_klo3GE6KrhToHcqogzilGfgJl-ujh8EJqmOD66nNXo='/>
                <h5>Mix Seeds</h5>
                <p>200g</p>
            </div>
        </div>
    </div>
        <Footer/>
    </>
  )
}
