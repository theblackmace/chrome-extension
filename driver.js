const inputBtn = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")

let myLeads = []

inputBtn.addEventListener("click", function(){
    console.log("Button clicked!")
    myLeads.push(inputEl.value)
    console.log(myLeads)
    inputEl.value = ""
    renderLeads()
})

// for loop logs out items in myLeads
function renderLeads(){
    let listItems = ""

    for(let i=0; i<myLeads.length; i++){
        listItems += `
            <li>
                <a target = "_blank" href = "${myLeads[i]}">
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    console.log(listItems)
    ulEl.innerHTML = listItems
}