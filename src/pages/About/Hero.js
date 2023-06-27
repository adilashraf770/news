import React from 'react'
import fsdnews from 'assets/faisalabad.png'
const Hero = () => {
    return (
        <main>
            <div className="container py-3">
                <div className="row">
                    <div className="col text-center">
                        <img src={fsdnews} alt="news" className='img-fluid' />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Hero