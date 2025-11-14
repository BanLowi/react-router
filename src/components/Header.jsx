import { NavLink } from "react-router-dom";

export default function Header() {

    return (
        <header>
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                <div class="container-fluid">
                    <NavLink to="/" className="navbar-brand"> Fake Store </NavLink>
                    <div class="collapse navbar-collapse" id="navbarID">
                        <div class="navbar-nav">
                            <NavLink to="/" className="nav-link active">Home Page</NavLink>
                            <NavLink to="/about" className="nav-link">Chi Siamo</NavLink>
                            <NavLink to="/products" className="nav-link">Prodotti</NavLink>

                        </div>
                    </div>
                </div>
            </nav>
        </header >
    )
}