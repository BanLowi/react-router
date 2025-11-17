import { Link } from "react-router-dom";

export default function Products({ products }) {

    /*
    log di products quando entro in products
    console.log(products); */


    return (
        <>
            <h1>Pagina Prodotti</h1>

            <div className="container">
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">

                    {
                        products.map(product => (
                            <div key={product.id} className="col">
                                <div className="card h-100">
                                    <div className="card-header bg-transparent border-0 text-center h-50">
                                        <h6>{product.title}</h6>
                                    </div>
                                    <img src={product.image} alt={product.title} className="card-img-top object-fit-contain" height={100} />
                                    <div className="card-body text-center">
                                        <Link className="btn btn-sm btn-primary" to={`products/${product.id}`}>VIEW</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    )
}