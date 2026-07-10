import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewAllCars = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/car-data.json").then((response) => {
            changeData(response.data)
        }).catch()
    }

    useEffect(
        () => {
            fetchData()
        },[]
    )

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            
                            {data.map(
                                (value, index) => {
                                    return (
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                            <div class="card">
                                                <img src={value.image} height="300px" class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h6 class="card-title">{value.carId}</h6>
                                                    <h6 class="card-title">{value.brand}</h6>
                                                    <h6 class="card-title">{value.model}</h6>
                                                    <h6 class="card-title">{value.fuelType}</h6>
                                                    <h6 class="card-title">{value.transmission}</h6>
                                                    <h6 class="card-title">{value.price}</h6>
                                                    <h6 class="card-title">{value.color}</h6>
                                                    <h6 class="card-title">{value.year}</h6>
                                                    <h6 class="card-title">{value.desciption}</h6>
                                                    <a href="#" class="btn btn-success">Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )}
                           </div>
                        </div>
                        </div>
                        </div>
                        </div>
)
}

export default ViewAllCars