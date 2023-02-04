const textArea = document.querySelector("textarea");
textArea.addEventListener("keyup", e => {
  textArea.style.height = `16px`;
  let scHeight = e.target.scrollHeight;
  textArea.style.height = `${scHeight}px`;
})

const chat = document.querySelector(".chat")
chat.lastElementChild.scrollIntoView()

const chatMessages = {
  
}