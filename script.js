document.getElementById('sellForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const game = document.getElementById('game').value;
    const details = document.getElementById('details').value;
    const price = document.getElementById('price').value;

    const productList = document.querySelector('.product-list');
    const product = document.createElement('div');
    product.classList.add('product');
    product.innerHTML = `
        <h3>${game}</h3>
        <p>${details}</p>
        <p>Price: $${price}</p>
    `;

    productList.appendChild(product);

    // Reset form
    this.reset();
});
