let timer = setInterval(incrementTimer, 1000)

function incrementTimer(amount=1) {
    document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) + amount
}

let pauseButton = document.getElementById("pause")

pauseButton.addEventListener("click", toggleTimer)

function toggleTimer() {

    if (pauseButton.innerHTML === "pause") {
        // stop timer
        clearInterval(timer)
        pauseButton.innerHTML = "resume"
    } else {
        // start timer
        timer = setInterval(incrementTimer, 1000)
        pause.innerHTML = "pause"
    }

}

function changeTimer(amount) {
    incrementTimer(amount)
}

let plusButton = document.getElementById("+")
let minusButton = document.getElementById("-")
plusButton.addEventListener("click", function(){changeTimer(1)})
minusButton.addEventListener("click", function(){changeTimer(-1)})

let likeButton = document.getElementById("<3")

likeButton.addEventListener("click", likeTime)

let likedTimes = {}

function likeTime() {
    let currentTime = document.getElementById("counter").innerText
    if (likedTimes[currentTime]) {
        likedTimes[currentTime] += 1
    } else {
        likedTimes[currentTime] = 1
    }
    displayLikes()
}

function displayLikes() {
    var output = []
    var keys = Object.keys(likedTimes).sort(sortNumber)
    var likes_ul = document.getElementsByClassName("likes")[0]
    likes_ul.innerHTML = ""
    for (key of keys) {
        let displayString = `${key} liked ${likedTimes[key]} time`
        if (likedTimes[key] > 1) {displayString += 's'}
        displayString += "\n"
        likes_ul.innerText += displayString
    }
}

function sortNumber(a, b) {
    return a - b
}

let commentForm = document.getElementById("comment-form")
let commentList = document.getElementsByClassName("comments")[0]

commentForm.addEventListener("submit", function(e){
    e.preventDefault();
    newComment = this.getElementsByTagName("input")[0].value
    this.getElementsByTagName("input")[0].value = ""
    let node = document.createElement("div")
    node.innerHTML = newComment
    commentList.appendChild(node)
})