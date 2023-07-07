import cart from "../assets/carrito.png"

const styles = {
    img: {
        height: "2rem" ,
        width: "auto" ,
    } ,
    span: {
        color: "white",
        paddingLeft: 10,
    },
}


export const CartWidget = () => (
    <>
    <img src={cart} style={styles.img} alt="Changuito" />
    <span style={styles.span}>0</span>
    </>
) 