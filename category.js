// card-3
let fetchCard3 = async () => {
  let htmlCard3 = ''
  let resCard = await fetch('http://localhost:3004/caregory')
  let dataCard = await resCard.json()
  dataCard.forEach(elem => {
    let discountedPrice = elem.price - (elem.price * elem.discount) / 100

    htmlCard3 += `
    <div class="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 mx-auto mb-6 rounded-lg overflow-hidden max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
      <figure class="overflow-hidden rounded-t-lg">
        <img
          src="${elem.image}"
          alt="${elem.title}"
          class="w-full h-40 sm:h-48 md:h-52 object-cover transition-transform duration-300 hover:scale-105 hover:brightness-110"
        />
      </figure>
      <div class="p-4">
        <h2 class="text-base sm:text-lg md:text-xl font-bold text-black truncate">
          ${elem.title}
        </h2>
        <div class="flex justify-between items-center mt-3">
          ${
            elem.discount > 0
              ? `<span class="text-red-600 font-semibold text-sm sm:text-base">-${elem.discount}% تخفیف</span>`
              : `<span class="text-gray-600 font-medium text-sm sm:text-base">بدون تخفیف</span>`
          }
          <div class="flex items-center text-yellow-500 text-xs sm:text-sm">
            ${elem.rating} ⭐
          </div>
        </div>
        <div class="mt-3">
          ${
            elem.discount > 0
              ? ` 
                <div class="text-sm sm:text-lg">
                  <span class="line-through text-gray-500">${elem.price} تومان</span>
                  <span class="text-black font-bold ml-2">${discountedPrice} تومان</span>
                </div>
              `
              : `
                <div class="text-sm sm:text-lg text-black font-bold">${elem.price} تومان</div>
              `
          }
        </div>
        <a
          href='${elem.link}'
          class='btn mt-4 w-full bg-neutral-950 text-white py-2 rounded-md hover:bg-neutral-800 transition-colors duration-200 text-center block text-sm sm:text-base'
          >
          خرید
        </a>
      </div>
    </div>
  `
  })

  document.querySelector('div.card-container3').innerHTML = htmlCard3
}

document.addEventListener('DOMContentLoaded', fetchCard3)

document.addEventListener('DOMContentLoaded', function () {
  const filterBtn = document.getElementById('filter-btn')
  const filterSidebar = document.getElementById('filter-sidebar')
  const closeFilter = document.getElementById('close-filter')
  const modalOverlay = document.getElementById('modal-overlay')
  const filterModal = document.getElementById('filter-modal')
  const filterModalContent = document.getElementById('filter-modal-content')

  function addSizeButtonEvents () {
    document.querySelectorAll('#filter-modal .size-button').forEach(button => {
      button.addEventListener('click', function () {
        document
          .querySelectorAll('#filter-modal .size-button')
          .forEach(btn => btn.classList.remove('bg-black', 'text-white'))
        this.classList.add('bg-black', 'text-white')
      })
    })
    document.querySelectorAll('.size-button').forEach(button => {
      button.addEventListener('click', function () {
        document
          .querySelectorAll('.size-button')
          .forEach(btn => btn.classList.remove('bg-black', 'text-white'))
        this.classList.add('bg-black', 'text-white')
      })
    })
  }

  filterBtn.addEventListener('click', () => {
    filterModalContent.innerHTML = filterSidebar.innerHTML
    addSizeButtonEvents()
    filterModal.classList.remove('hidden')
    modalOverlay.classList.remove('hidden')
  })

  closeFilter.addEventListener('click', () => {
    filterModal.classList.add('hidden')
    modalOverlay.classList.add('hidden')
  })

  modalOverlay.addEventListener('click', () => {
    filterModal.classList.add('hidden')
    modalOverlay.classList.add('hidden')
  })

  addSizeButtonEvents()
})

