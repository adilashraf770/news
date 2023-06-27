import React from 'react'

import news from 'assets/news.jpg'
import { useNavigate } from 'react-router-dom'
const Hero = () => {
    const navigate = useNavigate()
    return (
        <main className='home py-5 my-3 '>
            <div className="container">
                <div className="row text-center">
                    <div className="col-12 mb-2">
                        <h1 className='home-heading'>South Keroa</h1>
                    </div>
                    <div className="col-12 d-flex flex-column align-items-center ">
                        <div className="card " style={{ width: '18rem', cursor: 'pointer' }} >
                            <img src={news} className="card-img-top" alt=" news" onClick={() => navigate('/about')} />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >)
}

export default Hero