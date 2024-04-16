const anchors = document.querySelectorAll('a')

for (const a of anchors) {
  a.addEventListener('click', e => {
    e.preventDefault()

    const selector = a.hash // #section1
    const targetElement = document.querySelector(selector)
    
    targetElement.scrollIntoView({
      behavior: 'smooth'
    })
  })
}