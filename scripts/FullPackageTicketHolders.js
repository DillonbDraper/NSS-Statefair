const foodTarget = document.querySelector(".games")
const rideTarget = document.querySelector(".rides")
const gameTarget = document.querySelector(".food")
const sideshowTarget = document.querySelector(".sideshow")
const targetArray = [foodTarget, rideTarget, gameTarget, sideshowTarget]
const eventHub = document.querySelector("#state-fair")

export const FullPackageTicketHolders = () => {
    eventHub.addEventListener("fullPackageTicketPurchased", e => {
        for (const targetHTML of targetArray) {
        targetHTML.innerHTML += `
            <div class="person bigSpender"></div>
        `
        }
    })
}