const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", e => {
    if (e.target.id === "rideTicket") {
        const rideEvent = new CustomEvent("rideTicketPurchased", {
            detail: {
                rideTicketBought: true
            }
        })

        eventHub.dispatchEvent(rideEvent)
    }

    if (e.target.id === "foodTicket") {
        const foodEvent = new CustomEvent("foodTicketPurchased", {
            detail: {
                foodTicketBought: true
            }
        })

        eventHub.dispatchEvent(foodEvent)
    }

    if (e.target.id === "gameTicket") {
        const gameEvent = new CustomEvent("gameTicketPurchased", {
            detail: {
                gameTicketBought: true
            }
        })

        eventHub.dispatchEvent(gameEvent)
    }

    if (e.target.id === "sideshowTicket") {
        const sideshowEvent = new CustomEvent("sideshowTicketPurchased", {
            detail: {
                sideshowTicketBought: true
            }
        })

        eventHub.dispatchEvent(sideshowEvent)
    }

    if (e.target.id === "fullPackageTicket") {
        const fullPackageEvent = new CustomEvent("fullPackageTicketPurchased", {
            detail: {
                fullPackageTicketPurchased: true
            }
        })

        eventHub.dispatchEvent(fullPackageEvent)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
            <button id="fullPackageTicket">Full Package Ticket</button>
        </div>
    `
}

