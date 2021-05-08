import React, { Component } from 'react'
import Carousel from './Carousel'
import Footer from './Footer'
import Header from './Header'
import ListCard from './ListCard'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Carousel/>
                <ListCard/>
                <Footer/>
            </div>
        )
    }
}
