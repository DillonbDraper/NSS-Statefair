// This is a module-level variable. It is not scoped to a function
const contentTarget = document.querySelector(".customers")
const eventHub = document.querySelector("#state-fair")
let visitors = 0

export const visitorCounter = () => {
    contentTarget.innerHTML = `Total tickets purchased: ${visitors}`
    // This variable is scoped to a function, not the module

    eventHub.addEventListener("click", e => {
        if (e.target.id.includes("Ticket")) {
            visitors += 1
            contentTarget.innerHTML = `Total tickets purchased: ${visitors}`
        }
    })


}