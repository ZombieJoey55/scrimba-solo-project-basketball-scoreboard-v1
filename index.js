let homeEl = document.getElementById("score-home-num")
let guestEl = document.getElementById("score-guest-num")
let home_count = 0
let guest_count = 0

function increment_home_1() {
    home_count += 1
    homeEl.textContent = home_count
}

function increment_home_2() {
    home_count += 2
    homeEl.textContent = home_count
}

function increment_home_3() {
    home_count += 3
    homeEl.textContent = home_count
}

function increment_guest_1() {
    guest_count += 1
    guestEl.textContent = guest_count
}

function increment_guest_2() {
    guest_count += 2
    guestEl.textContent = guest_count
}

function increment_guest_3() {
    guest_count += 3
    guestEl.textContent = guest_count
}


