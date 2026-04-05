function calcularTotalCarrito(productos)
{
    let total = 0;

    for (let producto of productos) {
        total += producto.calcularTotal();
    }

    return total;
}

module.exports ={ calcularTotalCarrito };