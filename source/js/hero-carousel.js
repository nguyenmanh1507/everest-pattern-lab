// import { Siema } from 'siema'

const heroCarousel = new Siema({
  selector: '#hero-carousel'
})

const prev = document.querySelector('#hero-carousel-prev')
const next = document.querySelector('#hero-carousel-next')

prev.addEventListener('click', () => {
  heroCarousel.prev()
})

next.addEventListener('click', () => {
  heroCarousel.next()
})

export default heroCarousel
