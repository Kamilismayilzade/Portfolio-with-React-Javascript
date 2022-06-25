import "./productList.css";
import Product from "../product/Product";
import {products} from "../../data"

const ProductList = () => {
    return (
        <div className = "pl">

            <div className="pl-texts">
                <h1 className = "pl-title">Create & inspire. Its's Kamil</h1>
                <p className = "pl-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis officia dolore.
                    Ea cum molestiae tempore excepturi, sunt accusamus rerum.
                </p>
            </div>

            <div className="pl-list">
                {products.map(item =>(
                    <Product key = {item.id} img = {item.img} link = {item.link} />
                ))}
                
            </div>

        </div>
    )
}

export default ProductList
