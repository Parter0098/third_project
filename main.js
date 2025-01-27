// card-1
let fetchCard = async () => {
  let htmlCard = ''
  let resCard = await fetch('http://localhost:3004/products')
  let dataCard = await resCard.json()
  dataCard.forEach(elem => {
    let discountedPrice = elem.price - (elem.price * elem.discount) / 100

    htmlCard += `
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

  document.querySelector('div.card-container').innerHTML = htmlCard
}

document.addEventListener('DOMContentLoaded', fetchCard)

// card-1

// card-2
let fetchCard2 = async () => {
  let htmlCard2 = ''
  let resCard = await fetch('http://localhost:3004/products2')
  let dataCard = await resCard.json()
  dataCard.forEach(elem => {
    let discountedPrice = elem.price - (elem.price * elem.discount) / 100

    htmlCard2 += `
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

  document.querySelector('div.card-container2').innerHTML = htmlCard2
}

document.addEventListener('DOMContentLoaded', fetchCard2)

// card-2

// customer
const slider = document.getElementById('testimonialSlider')

const fetchTestimonials = async () => {
  let htmlTestimonials = ''
  try {
    const resTestimonials = await fetch('http://localhost:3004/customer')
    const dataTestimonials = await resTestimonials.json()

    dataTestimonials.forEach(testimonial => {
      htmlTestimonials += `
            <div class="p-6 rounded-[15px] shadow-md bg-white flex-shrink-0 h-56 w-96 ml-4 border border-gray-200">
            <!-- بخش ستاره‌ها -->
            <div class="flex items-center mb-2">
              <div class="flex text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.57 8.332 1.151-6.001 5.848 1.42 8.263-7.419-3.892-7.419 3.892 1.42-8.263-6.001-5.848 8.332-1.151z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.57 8.332 1.151-6.001 5.848 1.42 8.263-7.419-3.892-7.419 3.892 1.42-8.263-6.001-5.848 8.332-1.151z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.57 8.332 1.151-6.001 5.848 1.42 8.263-7.419-3.892-7.419 3.892 1.42-8.263-6.001-5.848 8.332-1.151z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.57 8.332 1.151-6.001 5.848 1.42 8.263-7.419-3.892-7.419 3.892 1.42-8.263-6.001-5.848 8.332-1.151z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.57 8.332 1.151-6.001 5.848 1.42 8.263-7.419-3.892-7.419 3.892 1.42-8.263-6.001-5.848 8.332-1.151z"/></svg>
              </div>
            </div>
            <!-- نام و تأیید -->
            <div class="flex items-center mb-4">
              <h3 class="text-lg font-semibold text-gray-900">${testimonial.name}</h3>
              <span class="ml-2 text-green-600 text-lg">✔</span>
            </div>
            <!-- نقل قول -->
            <p class="text-gray-700 text-sm italic">"${testimonial.testimonial}"</p>
          </div>
      `
    })

    slider.innerHTML = htmlTestimonials
  } catch (error) {
    console.error('Error fetching testimonials:', error)
  }
}

document.addEventListener('DOMContentLoaded', fetchTestimonials)

// customer
