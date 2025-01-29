// card-3
let fetchCard3 = async () => {
  let htmlCard3 = ''
  let resCard = await fetch(' http://localhost:3004/caregory')
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

  document.querySelector('div.card-container3').innerHTML = htmlCard3
}

document.addEventListener('DOMContentLoaded', fetchCard3)
// card-3
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.size-button').forEach(button => {
    button.addEventListener('click', function () {
      document
        .querySelectorAll('.size-button')
        .forEach(btn => btn.classList.remove('bg-black', 'text-white'))
      this.classList.add('bg-black', 'text-white')
    })
  })
})
