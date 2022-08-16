const contenedorProductos = document.getElementById(`contenedor-productos`)
const contenederCarrito = document.getElementById(`carrito-contenedor`)
const botonVaciar = document.getElementById(`vaciar-carrito`)
let carrito = []

botonVaciar.addEventListener(`click`, () => {
    carrito.length = 0
    actualizarCarrito()
})
const tortas = [{
        id: 1,
        nombre: "Cheesecake con Frutos Rojos",
        description: "No esta de mas aclarar que es 100% casero.. aca no usamos gelatina ni mermeladas, una vez que lo pruebes vas a sentir la diferencia 😉",
        precio: 2500,
        img: `../img/Cheesecake.jpg`
    },
    {
        id: 2,
        nombre: "Lemon Pie",
        description: "Frescura asegurada con esta combinación de sabores que no puede faltar en tus tardes de merienda. Que estas esperando para tener esta clásica bomba en tu heladera?",
        precio: 1600,
        img: `../img/LemonPie.jpg`
    },
    {
        id: 3,
        nombre: "Tarta Crema pastelera y Frutillas",
        description: "Para estos dias de intenso calor te recomendamos que pruebes nuestra tarta de crema pastelera y frutillas. Ideal para darle un toque fresco y rico a esas meriendas con 30 grados de calor..",
        precio: 2000,
        img: `../img/Pastelera.jpg`
    },
    {
        id: 4,
        nombre: "Torta Brownie",
        description: "No te olvides de encargar está bomba con mucho ddl y merengue. Podes pedirla con o sin nueces!",
        precio: 1800,
        img: `../img/Brownie.jpg`
    },
    {
        id: 5,
        nombre: "Gâteau oreo",
        description: "Su base está hecha con Oreos y café, rellena con una mousse de dulce de leche y mas oreos... Un giro totalmente distinto a lo que seria una chocotorta de oreo normal. Pecado no es comerla si no, no encargarla.",
        precio: 2300,
        img: `../img/Oreo.jpg`
    },
    {
        id: 6,
        nombre: "Apple Crumble",
        description: "Seguimos con los clásicos en Notre y a partir de hoy vas a poder encargar este delicioso crumble de manzana. Acompañalo con una bocha de helado de americana para aportarle un toque de frescura y mas placer 🤤",
        precio: 2500,
        img: `../img/Crumble.jpg`
    },
    {
        id: 7,
        nombre: "Brownies",
        description: "Estos brownies son súper húmedos por dentro y crocantes por fuera....un viaje de ida. Podes pedirlos con o sin nuez, como mas te guste!",
        precio: 3500,
        img: `../img/Brownies.jpg`
    },
    {
        id: 8,
        nombre: "Tiramisu Cheesecake",
        description: "Suave crema de queso, vainillas bañadas en café, con un toque de cacao amargo",
        precio: 2000,
        img: `../img/Tiramisu.jpg`
    },
    {
        id: 9,
        nombre: "Dark Lemon Pie",
        description: "Este giro de rosca al clasico Lemon Pie es algo que se tiene que quedar. Estamos muy seguros que una vez que lo pruebes, va a ser amor a primer bocado. No te quedes sin el tuyo!",
        precio: 1600,
        img: `../img/ChocoLemonPie.jpg`
    },
    {
        id: 10,
        nombre: "Carrot Cake",
        description: "Date el gusto de probar algo nuevo y pedi nuestra dulce torta de zanahoria. Tiene pasas de uva, nueces y un toque de canela que le da ese extra de sabor!",
        precio: 1400,
        img: `../img/CarrotCake.jpg`
    },
    {
        id: 11,
        nombre: "Red Velvet",
        description: "Si alguna vez quisite comer algo tradicional de la pasteleria estadounidense, esta es tu oportunidad! Te presentamos el famoso pastel de terciopelo rojo para tu disfrute.",
        precio: 1700,
        img: `../img/RedVelvet.jpg`
    },
    {
        id: 12,
        nombre: "Flan al Caramelo",
        description: "Lo clasico nunca falla dicen, por eso nosotros te traemos el postre mas clasico de todos. Asi solo es una delicia pero como todos sabemos, lo mas recomendable es que los pidas con crema y ddl.",
        precio: 1600,
        img: `../img/Flan.jpg`
    },

]
tortas.forEach((tortas) => {
    const div = document.createElement(`div`)
    div.classList.add(`producto`)
    div.innerHTML = `
    <section class="site-container">
    <div class="article-container">
    <article class="article-card">
    <figure class="article-image">
    <img src=${tortas.img} alt="">
    </figure>
    <div class="article-content">
    <h3 class="card-title">${tortas.nombre}</h3>
    <p class="card-excerpt" >${tortas.description}</p>
    <p class="card-category">${tortas.precio}</p>
    <a class="boton" href="">Agregar al Carro</a>
    </div>
    </article>
    </div>
    </section>
    `


    contenedorProductos.appendChild(div)
    const boton = document.getElementById(`agregar${tortas.id}`)

    boton.addEventListener(`click`, () => {
        agregarAlCarrito(tortas.id)
    })
})

const agregarAlCarrito = (tortasId) => {
    const item = tortas.find((tor) => tortas.id === tortasId)
    carrito.push(item)
    actualizarCarrito()
}

const eliminarDelCarrito = (tortasId) => {
    const item = carrito.find((tor) => tortas.id === tortasId)
    const indice = carrito.idexOf(item)
    carrito.splice(indice,1) 
}

const actualizarCarrito = () => {
    const div = document.createElement(`div`)
    div.className = (`productoEnCarrito`)
    div.innerHTML = `
    <p>${tortas.nombre}</p>
    <p>Precio: ${tortas.precio}</p>
    <p>Cantidad: <span id="cantidad">${tortas.cantidad}</span></p>
    <button onclick = "eliminarDelCarrito(${tortas.id})
    `
    contenederCarrito.appendChild(div)
}

const confirmarCompra = () => {
    swal("Perfecto", "Confirmaste tu compra!", "success");
}