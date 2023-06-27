import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Componants
import Header from 'componants/Header'
import Footer from 'componants/Footer'

// Pages
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Suggestions from './Suggestions'

const Index = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/suggestions' element={<Suggestions />} />
                <Route path='*' element={<h1>Error 404</h1>} />
            </Routes>
            <Footer />
        </>
    )
}

export default Index