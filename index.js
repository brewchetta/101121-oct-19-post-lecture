// all our code goes here!
console.log("Welcome to the Console");
console.log("We've got fun and games...");

const h1 = document.querySelector('h1')

// declare variables --> grab our elements
const form = document.getElementById('chetts-form')
const list = document.querySelector('#thing-list')
const commentInput = document.getElementById('comment-input')
const destinationInput = document.getElementById('destination-input')
const button = document.querySelector('button')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  addToList()
})

function addToList() {

  // get the input of the text boxes
  const destination = destinationInput.value
  const comment = commentInput.value

  // create element
  const p = document.createElement('p')

  // change the text content
  p.textContent = `Destination: ${destination} ||| Comment: ${comment}`

  // append element to list
  list.append(p)

  p.addEventListener('click', (event) => {
    console.log(event);
    p.remove()
  })
}

button.addEventListener('click', (event) => {
  list.innerHTML = ''
})
