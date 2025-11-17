import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"

import Card from "../components/Card"

export default function Product() {

    const { id } = useParams()
    const [thisProduct, setThisProduct] = useState({})

    function fetchProduct() {

        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                setThisProduct(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(fetchProduct, []);

    return (

        <div className="container">

            <div class="card text-center">
                <div class="card-header">
                    {thisProduct.category}
                </div>
                <div class="card-body text-center">
                    <h5 class="card-title">{thisProduct.title}</h5>
                    <img src={thisProduct.image} alt="" className="card-img-center" />
                    <Link to={"/products"} class="btn btn-primary d-block">Torna al catalogo</Link >
                </div>
                <div class="card-footer text-body-secondary">
                    {thisProduct.price} &#8364;
                </div>
            </div>

        </div>
    )
}