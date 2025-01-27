function updateQuantity (change) {
  const quantityElement = document.getElementById('quantity')
  let quantity = parseInt(quantityElement.textContent)
  quantity = Math.max(1, quantity + change)
  quantityElement.textContent = quantity
}

document.addEventListener('DOMContentLoaded', () => {
  let cartCount = 0
  const cartCountElement = document.getElementById('cart-count')
  const addToCartButton = document.querySelector('button.bg-black')

  addToCartButton.addEventListener('click', () => {
    cartCount++
    cartCountElement.textContent = cartCount
    cartCountElement.classList.remove('hidden')
  })
})
