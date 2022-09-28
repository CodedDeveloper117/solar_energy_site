let currentIndex = 0;

const lessons = [
    {
        title: "CSS Properties",
        description: 'Cascading Style Sheet(CSS) is used to set the style in web pages that contain HTML elements.' + 
        ' It sets the background color, font-size, font-family, color, … etc property of elements on a web page, these attributes are known as CSS Properties' + 
        " which can be applied to elements on the DOM",
    },
    {
        title: "CSS Selectors",
        description: "A CSS selector is the first part of a CSS Rule. It is a pattern of elements and other terms that tell" + 
        " the browser which HTML elements should be selected to have the CSS property values inside the rule applied to them. There are ways of selecting elements on the DOM which we will discuss" ,
    },
    {
        title: "Text and Font",
        description: "We will discuss some properties concerning Text and fonts",
    },
    {
        title: "Images in CSS",
        description: "Concepts of Images in css with figures and figcaption in CSS3",
        image: ""
    },
    {
        title: "Box Model",
        description: "Shared Resource website, https://www.w3schools.com/css/css_boxmodel.asp.",
        image: ""
    },
    {
        title: "px vs em vs rem",
        description: "The px stands for pixels. This is mostly designed for CSS and it is one of the most used absolute length. Although it comes under absolute lengths it’s length vary relative to the device types and that is the reason, even W3C recommends to use the pixel unit for display screen. " 
        + "On a few occasions, you can also use it for print devices like printers as well." + 
        "1Pixel = 1/96inch \n"
        + "Relative units such as rem sets properties sizes based on the font-size of the root element, in this case html element.\n"
        + "Em is also a relative unit that sets properties based on the font size of the current element.\n"
        + "There are also other relative units like vh, vw, percentages(%) etc.\n"
    },
    {
        title: "Layout",
        description: "Layouts basically define how an element arranges it's child elements. There are a couple of them, but "
        + "something notable is that these layouts are normally set with the 'display' property on the parent element, there is the "
        + "Normal flow of elements by default in html based on whether or not the elements are inline, inline-block or block elements "
        + ". They modern layouts are the CSS flexbox which is the short name for the Flexible Box Layout CSS module, designed to make it easy for us to lay things out in one dimension — either as a row or as a column or even in a grid format"
        + ". The next one is CSS grid, Grid Layout is designed for two dimensions — lining things up in rows and columns.",
    },
    {
        title: "Flexbox",
        description: "We've discussed it already",
    },
    {
        title: "Responsiveness",
        description: "Setting max-width and min-width with media queries. Examples",
        image: ""
    }
]

const nextButton = document.querySelector('.fa-chevron-right');
const lessonHeader = document.querySelector('.carousel h1');
const lessonContent = document.querySelector('.carousel p')
const lessonContainer = document.querySelector('.lesson_content')
const modalButton = document.querySelector('.modal_button')

nextButton.addEventListener('click', (e) => {
    updateUi(lessons[currentIndex])
})

modalButton.addEventListener('click', (e) => {
    console.log(lessonContainer.classList)
    lessonContainer.classList.toggle('hide')
})

const updateUi = (lesson) => {
    lessonHeader.textContent = lesson.title;
    lessonContent.textContent = lesson.description;
    if (currentIndex + 1 == lessons.length) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
}

updateUi(lessons[currentIndex])