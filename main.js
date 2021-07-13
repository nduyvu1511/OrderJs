const items = [
    {   name: "Pizza 001", 
        price: 6.9,
        quantity: 1 
    },
    {   name: "Pizza 002", 
        price: 5.9,
        quantity: 1 
    },
    { 
        name: "Pizza 003", 
        price: 7.9,
        quantity: 1 
    }
];

const SHIPPING  = 2 
function render() {
    let subTotal = 0
    items.forEach(item => {
        subTotal += item.quantity * item.price
    }) 
    const total = subTotal + SHIPPING

    const html = items.map(item => 
        `<li class="order-item">
        <span class="item-name">${item.name}</span>
        <span class="quantity">
            <button class = "decrease">-</button>
            <input type="number" class = "quantity" value="${item.quantity}"/>
            <button class = "increase">+</button>
        </span>
         <span class="price">
            <span>${(item.price * item.quantity).toFixed(2)}</span>
            <button class = "delete">X</button>
        </span>
    </li>`
    ).join('')
    document.querySelector('.btn-add').addEventListener('click', add)
    document.querySelector('.order-list').innerHTML = html
    document.querySelector('#sub-total').innerText = `${subTotal.toFixed(2)}`
    document.querySelector('#shipping').innerText = `${SHIPPING}`
    document.querySelector('#total').innerText = `${total.toFixed(2)}`
    const decreaseBtn1 = document.querySelectorAll('.decrease')
    const decreaseBtn = [...document.querySelectorAll('.decrease')]
    const increaseBtn = [...document.querySelectorAll('.increase')]
    const deleteBtn = [...document.querySelectorAll('.delete')]
    for(let i = 0; i<deleteBtn.length; i++) {
        decreaseBtn[i].addEventListener('click', () => {
            updateQuantity(i, items[i].quantity -1 )
        })

        increaseBtn[i].addEventListener('click', () => {
            updateQuantity(i, items[i].quantity + 1)
        })

        deleteBtn[i].addEventListener('click', () => {
            remove(i)
        })
    }

}

function remove(index) {
    items.splice(index, 1)
    render()
}

function updateQuantity(index, quantity) {
    if(quantity < 1) {
        return
    }

    items[index].quantity = quantity
    render()
}

function add() {
    items.push({
        name: `Pizza ${(Math.random()).toFixed(2)}`,
        quantity: 1,
        price: Math.random() * 10
    })

    render()
}


render()