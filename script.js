let seeRightBar = document.querySelector(".shrinkSidebar")
let rightbar = document.querySelector(".rightbar")
let emailSection = document.querySelector("div.emailSection")
let selectAllEmail = document.querySelector(".selectBlocGlobal")
let checkbox = document.querySelector(`input[type="checkbox"]`)
let allChoiceEmailTypes = document.querySelectorAll(".choiceEmailType")
let allEmails = document.querySelectorAll(".emailShort")

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
})

allChoiceEmailTypes.forEach(item => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
        if(item.classList.contains("active")) {
            // nothings
        } else {
            allChoiceEmailTypes.forEach(item => {
                if(item.classList.contains("active")) {
                    item.classList.remove("active")
                }
            })
            item.classList.add("active")
        }
    })
})

allEmails.forEach((item)=> {
    let inputCheckOff =item.querySelector("input")
    inputCheckOff.addEventListener("click", (event)=> {
        if (inputCheckOff.checked && !item.classList.contains("checked")) {
            item.classList.add("checked")
        } else if (inputCheckOff.checked && item.classList.contains("checked")) {
            // leave and continue
        }else {
            item.classList.remove("checked")
        }
    })
})