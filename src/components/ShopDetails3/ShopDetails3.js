import React,{useState} from 'react'
import Naira from 'react-naira'
import {useHistory , Link} from 'react-router-dom'
import Spare from './images/spare.jpg'
import {CaretLeft, MapPin ,  ArrowLeft , ArrowRight} from 'phosphor-react'
import './ShopDetails3.scss'

const ShopDetails3 = () => {
    let history =  useHistory()
    const [show , setShow] = useState(false)
    return (
        <div className="ShopDetails3">
            <div className="ShopDetails3__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Category</h5>
            </div>
            <div className="search-section">
                 <input name="search" type="text" className="search" id="search"  placeholder="Search for a product" />
                 <input name="search" value="Search" type="submit" className="search-btn" id="search-btn" />
             </div>
          
          <div className="ShopDetails3__items">

          <div className="ShopDetails3__item">
                    
                    <div className="row1">

                        <img className="image" src={Spare}></img>
                        <div className="row1__half2">
                            <h3>Headlamp Gx Q460 2021</h3>
                            <button className="btn rand">Rand number</button>
                            <div className='location'>   <div className="map">   <MapPin color="rgb(148, 144, 144)" size={15} /></div> <p className="locate"> Lagos, Mushin</p></div>
                            <h1><Naira>36000</Naira></h1>
                            <button className="btn btn2">Buy now</button>
                      </div>

                     

                    </div>
                    <div className="row2">
                          <p>Show Contact</p>
                          <p>Pay later accepted</p>
                      </div>


               </div>


               <div className="ShopDetails3__item">
                    
                    <div className="row1">

                        <img className="image" src={Spare}></img>
                        <div className="row1__half2">
                            <h3>Headlamp Gx Q460 2021</h3>
                            <button className="btn rand">Rand number</button>
                            <div className='location'>   <div className="map">   <MapPin color="rgb(148, 144, 144)" size={15} /></div> <p className="locate"> Lagos, Mushin</p></div>
                            <h1><Naira>36000</Naira></h1>
                            <button className="btn btn2">Buy now</button>
                      </div>

                     

                    </div>
                    <div className="row2">
                          <p>Show Contact</p>
                          <p>Pay later accepted</p>
                      </div>


               </div>


               <div className="ShopDetails3__item">
                    
                    <div className="row1">

                        <img className="image" src={Spare}></img>
                        <div className="row1__half2">
                            <h3>Headlamp Gx Q460 2021</h3>
                            <button className="btn rand">Rand number</button>
                            <div className='location'>   <div className="map">   <MapPin color="rgb(148, 144, 144)" size={15} /></div> <p className="locate"> Lagos, Mushin</p></div>
                            <h1><Naira>36000</Naira></h1>
                            <button className="btn btn2">Buy now</button>
                      </div>

                     

                    </div>
                    <div className="row2">
                          <p>Show Contact</p>
                          <p>Pay later accepted</p>
                      </div>


               </div>


               <div className="ShopDetails3__item">
                    
                    <div className="row1">

                        <img className="image" src={Spare}></img>
                        <div className="row1__half2">
                            <h3>Headlamp Gx Q460 2021</h3>
                            <button className="btn rand">Rand number</button>
                            <div className='location'>   <div className="map">   <MapPin color="rgb(148, 144, 144)" size={15} /></div> <p className="locate"> Lagos, Mushin</p></div>
                            <h1><Naira>36000</Naira></h1>
                            <button className="btn btn2">Buy now</button>
                      </div>

                     

                    </div>
                    <div className="row2">
                          <p>Show Contact</p>
                          <p>Pay later accepted</p>
                      </div>


               </div>


               <div className="ShopDetails3__item">
                    
                    <div className="row1">

                        <img className="image" src={Spare}></img>
                        <div className="row1__half2">
                            <h3>Headlamp Gx Q460 2021</h3>
                            <button className="btn rand">Rand number</button>
                            <div className='location'>   <div className="map">   <MapPin color="rgb(148, 144, 144)" size={15} /></div> <p className="locate"> Lagos, Mushin</p></div>
                            <h1><Naira>36000</Naira></h1>
                            <button className="btn btn2">Buy now</button>
                      </div>

                     

                    </div>
                    <div className="row2">
                          <p>Show Contact</p>
                          <p>Pay later accepted</p>
                      </div>


               </div>


               <div className="ShopDetails3__item">
                    
                    <div className="row1">

                        <img className="image" src={Spare}></img>
                        <div className="row1__half2">
                            <h3>Headlamp Gx Q460 2021</h3>
                            <button className="btn rand">Rand number</button>
                            <div className='location'>   <div className="map">   <MapPin color="rgb(148, 144, 144)" size={15} /></div> <p className="locate"> Lagos, Mushin</p></div>
                            <h1><Naira>36000</Naira></h1>
                            <button className="btn btn2">Buy now</button>
                      </div>

                     

                    </div>
                    <div className="row2">
                          <p>Show Contact</p>
                          <p>Pay later accepted</p>
                      </div>


               </div>




          </div>
         <Link to="shopdetails"> <div className="previous"> <ArrowLeft size={20} /><p>Back</p></div></Link>
         <Link to="shopdetailstwo"> <div className="next"><p>Next</p> <ArrowRight size={20} /></div></Link>
        </div>
    )
}

export default ShopDetails3
