const inputBtn = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")
const deleteBtn = document.querySelector("#delete-btn")
const tabBtn = document.querySelector("#tab-btn")

let myLeads = []


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}


inputBtn.addEventListener("click", function(){
    console.log("Save Input Button clicked!")
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    console.log("Local Storage Array: "+localStorage.getItem("myLeads"))
    render(myLeads)
})

tabBtn.addEventListener("click", function(){
    console.log("SAVE TAB btn clicked")

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        console.log(tabs[0].url)
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })

})


deleteBtn.addEventListener("dblclick", function(){
    console.log("Delete Button clicked twice")
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


// for loop logs out items in myLeads
function render(leads){
    let listItems = ""

    for(let i=0; i<leads.length; i++){
        listItems += `
            <li>
                <a target = "_blank" href = "${leads[i]}">
                    ${leads[i]}
                </a>
            </li>
        `
    }
    console.log(listItems)
    ulEl.innerHTML = listItems
}