import emailData from "./components/data.js"
import emailViewerButton from "./components/emailViewer.js"

let seeRightBar = document.querySelector(".shrinkSidebar")
let rightbar = document.querySelector(".rightbar")
let emailSection = document.querySelector("div.emailSection")
let selectAllEmail = document.querySelector(".selectBlocGlobal")
let checkbox = document.querySelector(`input[type="checkbox"]`)
let allChoiceEmailTypes = document.querySelectorAll(".choiceEmailType")
let allEmails = document.querySelectorAll(".emailShort")
let EmailBox = document.querySelector(".emails")



seeRightBar.addEventListener("click", (event) => {
    event.preventDefault()
    if (seeRightBar.classList.contains("active")) {
        seeRightBar.classList.remove("active")
        rightbar.classList.remove("inactive")
        emailSection.style.width = "76.5%"
    } else {
        seeRightBar.classList.add("active")
        rightbar.classList.add("inactive")
        emailSection.style.width = "81%"
    }
})


selectAllEmail.addEventListener("click", (event) => {
    if (selectAllEmail.classList.contains('inactive') || checkbox.checked) {
        selectAllEmail.style.background = '#00000018'
        selectAllEmail.style.border = "1px solid #00000015"
        selectAllEmail.classList.remove('inactive')
        
    } else {
        selectAllEmail.style.background = 'transparent'
        selectAllEmail.style.border = "1px solid transparent"
        selectAllEmail.classList.add('inactive')
    }
    if(checkbox.checked){
        for(let i = 0; i < EmailBox.children.length ; i++){
            let element = EmailBox.children[i] 
            element.classList.add("checked")
            element.querySelector("input").checked = true
        }
    } else {
        for(let i = 0; i < EmailBox.children.length ; i++){
            let element = EmailBox.children[i] 
            element.classList.remove("checked")
            element.querySelector("input").checked = false
        }
    }
})

allChoiceEmailTypes.forEach(item => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
        if (item.classList.contains("active")) {
            // nothings
        } else {
            allChoiceEmailTypes.forEach(item => {
                if (item.classList.contains("active")) {
                    item.classList.remove("active")
                }
            })
            item.classList.add("active")
        }
    })
})


emailData.forEach(item => {
    let but = emailViewerButton(item.sender, item.subject, item.content, item.date, item.type)
    EmailBox.appendChild(but)
});

// console.log(EmailBox.children)
for(let i = 0; i < EmailBox.children.length ; i++){
    let element = EmailBox.children[i]
    let inputCheckOff = element.querySelector("input")
    let tab = []
    inputCheckOff.addEventListener("click", (event)=>{
        // surveille la case qui coche et decoche tout
        for(let i = 0; i < EmailBox.children.length ; i++){
            let element = EmailBox.children[i]
            tab.push(element.querySelector("input").checked)
        }
        if (tab.includes(false) && tab.includes(true)){
            // nothing here
        } else if (tab.includes(false) && !tab.includes(true)) {
            checkbox.checked = false
        } else if (!tab.includes(false) && tab.includes(true)) {
            checkbox.checked = true
        }
        tab = [];
        if ( inputCheckOff.checked &&  !element.classList.contains("checked")) {
            element.classList.add("checked")
        } else if (inputCheckOff.checked &&  element.classList.contains("checked")) {
            // leave and continue
        } else {
            element.classList.remove("checked")
        }
    })
}