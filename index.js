const myEmojis = ["🎮", "🏒", "🍚", "🐶"]

function renderEmojis() {
    const emojiContainer = document.getElementById("emoji-container")
    emojiContainer.innerHTML = "" 
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}
renderEmojis()

// To push the emoji to the end of the array.
const pushBtn = document.getElementById("push-btn") 
pushBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input")
    if(emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = "" // The user cannot submit and an empty value.
        renderEmojis()
    }
})
// To add an emoji at the beginning of the array.
const unshift = document.getElementById("unshift-btn")
unshift.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input")
    if(emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
});

// To remove an emoji from the end of the array
const popBtn = document.getElementById("pop-btn")
popBtn.addEventListener("click", function(){
    myEmojis.pop()
    renderEmojis()
})
//To remove an emoji from the beginning of the array
const shiftBtn = document.getElementById("shift-btn") 
shiftBtn.addEventListener("click", function(){
    myEmojis.shift()
    renderEmojis()
})