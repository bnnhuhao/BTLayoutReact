import React, { Component } from 'react'
import Card from './Card'

export default class ListCard extends Component {
    render() {
        return (
            <div className="container">
                <div className="row text-center">
                    <div className="col-lg-3 col-md-6 mb-4">
                        <Card/>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <Card/>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <Card/>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <Card/>
                    </div>
                </div>
            </div>
        )
    }
}
