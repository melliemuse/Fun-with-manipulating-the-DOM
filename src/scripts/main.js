
// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

const headerEl = document.querySelector('.article__header');
headerEl.textContent = `Welcome to the {insert your name here} blog`;

console.log(headerEl)

// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important

const allHeaderEls = document.querySelectorAll('.article__header')

allHeaderEls.forEach(function(element) {
    element.classList.add('important')
})

console.log(allHeaderEls)

const sections = document.querySelectorAll('section')
console.log(sections)

// Obtain a reference the element with a class of dashed and remove it.

const dashedEl = document.querySelector('.dashed')
dashedEl.classList.remove('dashed')
console.log(dashedEl)

// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.

const footerEl = document.querySelector('.article__footer')
footerEl.classList.add('goldenrod')
console.log(footerEl)