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
                                    <img src={product.image} alt={product.title} className="card-img-top" height={200} />
                                    <div className="card-header">
                                        <h5>{product.title}</h5>
                                    </div>
                                    <div className="card-body h-25">
                                        <small>{product.category}</small>
                                        <div className="description_box">

                                            <p className="card-text">
                                                {product.description}
                                            </p>
                                        </div>

                                        <button className="btn btn-sm btn-primary">COMPRA</button> <span>{product.price} &#8364; </span>
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