const CartWidget = () => {
    return (
        <div>
            <button className="btn btn-outline-primary position-relative buttonCW">
                <i className="bi bi-cart"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    3
                    <span className="visually-hidden">product in card</span>
                </span>
            </button>
        </div>

    )
}

export default CartWidget;