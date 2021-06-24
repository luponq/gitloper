const textElement = document.querySelector(`.lesson_text`);

const textElementContent = textElement.innerHTML;
console.log(textElementContent);

textElement.innerHTML = 
    `<p>$(textElementContent)</p> <p>Live, and work in
    your free time</p>`;

console.log(textElement.innerHTML);