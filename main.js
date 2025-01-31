// card-1
let axiosCard = async () => {
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
        <a
          href='${elem.link}'
          class='btn mt-4 w-full bg-neutral-950 text-white py-2 rounded-md hover:bg-neutral-800 transition-colors duration-200 text-center block'
        >
          خرید
        </a>
      </div>
    </div>
  `
  })

  document.querySelector('div.card-container').innerHTML = htmlCard
}

document.addEventListener('DOMContentLoaded', axiosCard)

// card-1

// card-2
let axiosCard2 = async () => {
  let htmlCard2 = ''
  let resCard = await fetch('http://localhost:3004/products2')
  let dataCard = await resCard.json()
  dataCard.forEach(elem => {
    let discountedPrice = elem.price - (elem.price * elem.discount) / 100

    htmlCard2 += `
    <div class="font- card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 mx-auto mb-8 rounded-lg overflow-hidden">
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
        <a
          href='${elem.link}'
          class='btn mt-4 w-full bg-neutral-950 text-white py-2 rounded-md hover:bg-neutral-800 transition-colors duration-200 text-center block'
        >
          خرید
        </a>
      </div>
    </div>
  `
  })

  document.querySelector('div.card-container2').innerHTML = htmlCard2
}

document.addEventListener('DOMContentLoaded', axiosCard2)

// card-2

// customer
const slider = document.getElementById('testimonialSlider')

const fetchTestimonials = () => {
  let htmlTestimonials = ''

  $.ajax({
    url: 'http://localhost:3004/customer',
    method: 'GET',
    dataType: 'json',
    success: function (dataTestimonials) {
      dataTestimonials.forEach(testimonial => {
        htmlTestimonials += `
          <div class="p-6 rounded-[15px] shadow-md bg-white flex-shrink-0 h-56 w-96 ml-4 border border-gray-200">
            <!-- بخش ستاره‌ها -->
            <div class='flex mt-1 text-yellow-400'>⭐⭐⭐⭐⭐</div>
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
    },
    error: function (error) {
      console.error('Error fetching testimonials:', error)
    }
  })
}

$(document).ready(fetchTestimonials)

// customer
