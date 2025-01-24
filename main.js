// card-1
let fetchCard = async () => {
  let htmlCard = ''
  let resCard = await fetch('http://localhost:3002/products')
  let dataCard = await resCard.json()
  dataCard.forEach(elem => {
    let discountedPrice = elem.price - (elem.price * elem.discount) / 100

    htmlCard += `
    <div class="card card-compact bg-base-100 sm:w-80 md:w-72 lg:w-64 xl:w-56 shadow-xl hover:shadow-2xl transition-all duration-300 mx-auto mb-8">
      <figure class="overflow-hidden rounded-lg">
        <img
          src="${elem.image}"
          alt="${elem.title}"
          class="w-full h-48 object-cover object-center"
        />
      </figure>
      <div class="card-body p-4">
        <h2 class="card-title text-lg font-semibold text-gray-800 truncate">
          ${elem.title}
        </h2>
        <div class="mt-2">
          <div class="flex justify-between items-center">
            ${
              elem.discount > 0
                ? `<span class="text-red-500 font-bold">-${elem.discount}%</span>`
                : `<span class="text-gray-500">بدون تخفیف</span>`
            }
          </div>
          <div class="text-yellow-500 flex items-center mt-1">${
            elem.rating
          } ⭐</div>
        </div>
        <div class="card-actions justify-between items-center mt-4">
          ${
            elem.discount > 0
              ? `<span class="line-through text-gray-500">${elem.price} تومان</span>
                 <span class="btn bg-red-500 text-white px-4 py-2 rounded-md">${discountedPrice} تومان</span>`
              : `<span class="btn bg-neutral-950 text-white px-4 py-2 rounded-md">${elem.price} تومان</span>`
          }
          <button
            class="btn bg-neutral-950 text-white px-6 py-2 rounded-md hover:bg-neutral-800 transition-colors duration-200"
            id="basket"
          >
            خرید
          </button>
        </div>
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
    <div class="card card-compact bg-base-100 sm:w-80 md:w-72 lg:w-64 xl:w-56 shadow-xl hover:shadow-2xl transition-all duration-300 mx-auto mb-8">
      <figure class="overflow-hidden rounded-lg">
        <img
          src="${elem.image}"
          alt="${elem.title}"
          class="w-full h-48 object-cover object-center"
        />
      </figure>
      <div class="card-body p-4">
        <h2 class="card-title text-lg font-semibold text-gray-800 truncate">
          ${elem.title}
        </h2>
        <div class="mt-2">
          <div class="flex justify-between items-center">
            ${
              elem.discount > 0
                ? `<span class="text-red-500 font-bold">-${elem.discount}%</span>`
                : `<span class="text-gray-500">بدون تخفیف</span>`
            }
          </div>
          <div class="text-yellow-500 flex items-center mt-1">${
            elem.rating
          } ⭐</div>
        </div>
        <div class="card-actions justify-between items-center mt-4">
          ${
            elem.discount > 0
              ? `<span class="line-through text-gray-500">${elem.price} تومان</span>
                 <span class="btn bg-red-500 text-white px-4 py-2 rounded-md">${discountedPrice} تومان</span>`
              : `<span class="btn bg-neutral-950 text-white px-4 py-2 rounded-md">${elem.price} تومان</span>`
          }
          <button
            class="btn bg-neutral-950 text-white px-6 py-2 rounded-md hover:bg-neutral-800 transition-colors duration-200"
            id="basket"
          >
            خرید
          </button>
        </div>
      </div>
    </div>
  `
  })

  document.querySelector('div.card-container2').innerHTML = htmlCard2
}

document.addEventListener('DOMContentLoaded', fetchCard2)
// card-2

