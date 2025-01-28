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

const sizeButtons = document.getElementById('size-buttons')

sizeButtons.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    sizeButtons.querySelectorAll('button').forEach(btn => {
      btn.classList.remove('border-black', 'text-black')
    })
    e.target.classList.add('border-black', 'text-black')
  }
})

const slider1 = document.getElementById('testimonialSlider1')

const fetchTestimonials1 = async () => {
  let htmlTestimonials1 = ''
  try {
    const resTestimonials1 = await fetch('http://localhost:3004/customer')
    const dataTestimonials1 = await resTestimonials1.json()

    dataTestimonials1.forEach(testimonial1 => {
      htmlTestimonials1 += `
                <div class='bg-white p-4 rounded-xl shadow-lg border border-gray-200 flex flex-col h-full'>
                    <div class='flex items-center gap-2'>
                        <span class='text-black font-semibold'>${testimonial1.name}</span>
                        <span class='text-green-500'>✔</span>
                    </div>
                    <div class='flex mt-1 text-yellow-400'>⭐⭐⭐⭐⭐</div>
                    <p class='text-gray-700 mt-2 line-clamp-4'>${testimonial1.testimonial}</p>
                    <p class='text-gray-500 text-sm mt-2'>منتشر شده در 14 آگوست 2023</p>
                </div>
                `
    })

    slider1.innerHTML = htmlTestimonials1
  } catch (error) {
    console.error('Error fetching testimonials1:', error)
  }
}

document.addEventListener('DOMContentLoaded', fetchTestimonials1)

// card
let fetchCard3 = async () => {
  let htmlCard3 = ''
  let resCard = await fetch('http://localhost:3004/products')
  let dataCard = await resCard.json()
  dataCard.forEach(elem => {
    let discountedPrice = elem.price - (elem.price * elem.discount) / 100

    htmlCard3 += `
    <div class="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 mx-auto mb-8 rounded-lg overflow-hidden">
      <figure class="overflow-hidden rounded-t-lg">
        <img
          src="${elem.image}"
          alt="${elem.title}"
          class="w-full h-52 object-cover transition-transform duration-300 hover:scale-105 hover:brightness-110"
        />
      </figure>
      <div class="p-4">
        <h2 class="text-xl font-bold text-black truncate">
          ${elem.title}
        </h2>
        <div class="flex justify-between items-center mt-3">
          ${
            elem.discount > 0
              ? `<span class="text-red-600 font-semibold">-${elem.discount}% تخفیف</span>`
              : `<span class="text-gray-600 font-medium">بدون تخفیف</span>`
          }
          <div class="flex items-center text-yellow-500 text-sm">
            ${elem.rating} ⭐
          </div>
        </div>
        <div class="mt-3">
          ${
            elem.discount > 0
              ? `
                <div class="text-lg">
                  <span class="line-through text-gray-500">${elem.price} تومان</span>
                  <span class="text-black font-bold ml-2">${discountedPrice} تومان</span>
                </div>
              `
              : `
                <div class="text-lg text-black font-bold">${elem.price} تومان</div>
              `
          }
        </div>
        <button
          class="btn mt-4 w-full bg-neutral-950 text-white py-2 rounded-md hover:bg-neutral-800 transition-colors duration-200"
        >
          خرید
        </button>
      </div>
    </div>
  `
  })

  document.querySelector('div.card-container3').innerHTML = htmlCard3
}

document.addEventListener('DOMContentLoaded', fetchCard3)
// card
