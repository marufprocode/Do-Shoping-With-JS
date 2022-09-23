let count = 0;
const productArray = [];


const addToCart = (event) => {
    const productName = event.parentNode.parentNode.children[0].innerText;
    const productPrice = event.parentNode.parentNode.children[1].children[0].innerText; 
    const tableBody = document.getElementById('products-cart');
    const totalProductsId = document.getElementById('total-products');
    count ++
    event.setAttribute('disabled', '');
    totalProductsId.innerText = count;
    tableBody.innerHTML='';

    const productObj = {
        productName: productName,
        productPrice: parseFloat(productPrice)
    }
    productArray.push(productObj);
    let totalPrice = 0;
    let newCount = 0;

    for (product of productArray){
        newCount++
        totalPrice += product.productPrice;
        const tableRow = document.createElement('tr');
        tableRow.innerHTML=`
            <th>${newCount}</th>
            <td>${product.productName}</td>
            <td>${product.productPrice}</td>
        `
        tableBody.appendChild(tableRow);
    }
    

    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
        <th></th>
        <td>Total Price</td>
        <td>${totalPrice}</td>
    `
    tableBody.appendChild(tableRow);
    

}





