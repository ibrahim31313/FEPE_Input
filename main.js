//maxlenght            ====> 100%
//input.value.length   ====> ?

let input = document.querySelector("input")
let progress = document.querySelector(".progress")
let message = document.querySelector(".message")
console.log(input)

input.oninput = function() {
    // console.log(input.value.length)
    progress.style.width = `${(this.value.length * 100) / this.maxLength}%`
    if (this.value.length < 8) {
        progress.style.backgroundColor = "#CD0404"
        message.innerHTML ="weak password"
        message.style.color ="#CD0404"
    }else if (this.value.length >= 8 && this.value.length < 12  ) {
        progress.style.backgroundColor = "#FF8B13"
        message.innerHTML ="good password"
        message.style.color ="#FF8B13"
    }else  {
        progress.style.backgroundColor = "#03C988"
        message.innerHTML ="powerfull password"
        message.style.color ="#03C988"
    }
}