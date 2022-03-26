import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CartDetails.css'

const  CartDetails = ({product}) => {
    const {name, img} = product;
    return (
        <div className='cart-items-area d-flex align-items-center ms-2'>
            <span className="cart-image"><img className="img-fluid" src={img} alt="" /></span>
            <span className='cart-text fw-bold'><li>{name}</li></span>
            <FontAwesomeIcon className="icon" icon= {faShoppingCart}></FontAwesomeIcon>

        </div>
    );
};

export default CartDetails;