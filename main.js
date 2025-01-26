// card-1
let fetchCard = async () => {
  let htmlCard = ''
  let resCard = await fetch('http://localhost:3002/products')
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
  let resCard = await fetch('http://localhost:3002/products2')
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
// کد جاوا اسکریپت برای بارگذاری داده‌ها و نمایش کارت‌ها

const slider = document.getElementById('testimonialSlider')

// بارگذاری داده‌ها از JSON و ساخت کارت‌ها
function loadTestimonials () {
  fetch('http://localhost:3002/customer')
    .then(response => response.json())
    .then(data => {
      data.forEach(testimonial => {
        // ایجاد هر کارت به صورت داینامیک
        const card = document.createElement('div')
        card.classList.add(
          'testimonial-card',
          'p-6',
          'rounded-lg',
          'shadow-md',
          'bg-white',
          'flex-shrink-0',
          'w-80',
          'h-56',
          'ml-4'
        ) // w-80 را به عنوان اندازه ثابت برای عرض و h-auto برای ارتفاع ثابت اضافه می‌کنیم

        card.innerHTML = `
          <div class="flex items-center mb-4">
            <img src="${testimonial.avatar}" alt="Avatar" class="w-10 h-10 rounded-full">
            <div class="ml-3">
              <h3 class="text-lg font-semibold">${testimonial.name}</h3>
              <p class="text-gray-500 text-sm">${testimonial.role}</p>
            </div>
          </div>
          <p class="text-gray-700">${testimonial.testimonial}</p>
        `

        slider.appendChild(card) // اضافه کردن کارت به اسلایدر
      })
    })
    .catch(error => console.error('Error loading the testimonials:', error))
}

// بارگذاری اولیه داده‌ها
loadTestimonials()

// customer
