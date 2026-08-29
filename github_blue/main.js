document.title = '🤔'

const reactions = ['🤔', '😱', '😎']
const counters = document.querySelectorAll('.social-count, .Counter')
reactions.forEach((reaction, index) => {
  const counter = counters[index]
  if (counter) {
    counter.textContent = reaction
  }
})
