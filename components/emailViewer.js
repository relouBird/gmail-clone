export default function emailViewerButton(sender, subject, content, date, type) {
    let emailShort = document.createElement("div");
    let leftEmailSide = document.createElement("div")
    let rightEmailSide = document.createElement("div")

    // met l'element de gauche et l'element de droite dans la boite d'email
    if (type == "unread") {
        emailShort.setAttribute("class", "emailShort")
    } else if (type == "read") {
        emailShort.setAttribute("class", "emailShort unread")
    }
    emailShort.setAttribute("draggable", "true")
    leftEmailSide.setAttribute("class", "leftEmailSide")
    rightEmailSide.setAttribute("class", "rightEmailSide")
    emailShort.appendChild(leftEmailSide)
    emailShort.appendChild(rightEmailSide)

    //commencons par la partie gauche
    let actionOptions = document.createElement("div");
    let drag = document.createElement("button");
    let button = document.createElement("button");
    let selectAllBloc = document.createElement("div");
    let input = document.createElement("input");

    // ici on va gerer la parti qui gere les options d'actions
    actionOptions.setAttribute("class", "actionOptions")
    drag.setAttribute("class", "drag")
    selectAllBloc.setAttribute("class", "selectAllBloc")
    input.setAttribute("class","selectAll")
    input.setAttribute("type", "checkbox")
    input.setAttribute("name", "selectEmail")

    drag.innerHTML = `<svg width="11" height="22" viewBox="0 0 11 22" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.66667 16.8333C4.66667 17.8417 3.84167 18.6667 2.83333 18.6667C1.825 18.6667 1 17.8417 1 16.8333C1 15.825 1.825 15 2.83333 15C3.84167 15 4.66667 15.825 4.66667 16.8333ZM2.83333 9.5C1.825 9.5 1 10.325 1 11.3333C1 12.3417 1.825 13.1667 2.83333 13.1667C3.84167 13.1667 4.66667 12.3417 4.66667 11.3333C4.66667 10.325 3.84167 9.5 2.83333 9.5ZM2.83333 4C1.825 4 1 4.825 1 5.83333C1 6.84167 1.825 7.66667 2.83333 7.66667C3.84167 7.66667 4.66667 6.84167 4.66667 5.83333C4.66667 4.825 3.84167 4 2.83333 4ZM8.33333 7.66667C9.34167 7.66667 10.1667 6.84167 10.1667 5.83333C10.1667 4.825 9.34167 4 8.33333 4C7.325 4 6.5 4.825 6.5 5.83333C6.5 6.84167 7.325 7.66667 8.33333 7.66667ZM8.33333 9.5C7.325 9.5 6.5 10.325 6.5 11.3333C6.5 12.3417 7.325 13.1667 8.33333 13.1667C9.34167 13.1667 10.1667 12.3417 10.1667 11.3333C10.1667 10.325 9.34167 9.5 8.33333 9.5ZM8.33333 15C7.325 15 6.5 15.825 6.5 16.8333C6.5 17.8417 7.325 18.6667 8.33333 18.6667C9.34167 18.6667 10.1667 17.8417 10.1667 16.8333C10.1667 15.825 9.34167 15 8.33333 15Z"
                                            fill="black" fill-opacity="0.26" />
                                    </svg>`
    button.innerHTML = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.3875 15.1886L10.9999 14.9547L10.6124 15.1886L6.46912 17.6893L7.56864 12.9761L7.67148 12.5353L7.32933 12.2389L3.66788 9.06696L8.48749 8.65807L8.93814 8.61983L9.11462 8.20342L10.9999 3.7552L12.8852 8.20342L13.0617 8.61983L13.5124 8.65807L18.332 9.06696L14.6705 12.2389L14.3284 12.5353L14.4312 12.9761L15.5307 17.6893L11.3875 15.1886Z"
                                            stroke="black" stroke-opacity="0.54" stroke-width="1.5" />
                                    </svg>`

    selectAllBloc.appendChild(input)
    //
    actionOptions.appendChild(drag)
    actionOptions.appendChild(selectAllBloc)
    actionOptions.appendChild(button)


    // ajoute tout dans la partie gauche
    let emailSender = document.createElement("p");
    emailSender.setAttribute("class", "emailSender")
    emailSender.innerText = sender

    leftEmailSide.appendChild(actionOptions)
    leftEmailSide.appendChild(emailSender)

    //commencons par la partie droite
    //----------------------------
    let emailAllDetails = document.createElement("p")
    let time = document.createElement("p")
    let hiddenButtons = document.createElement("div")

    rightEmailSide.appendChild(emailAllDetails)
    rightEmailSide.appendChild(time)
    rightEmailSide.appendChild(hiddenButtons)

    // gerer les details de l'email
    let emailSubject = document.createElement("span")
    let separator = document.createElement("span")
    let emailContent = document.createElement("span")

    emailSubject.setAttribute("class", "emailSubject")
    separator.setAttribute("class", "separator")
    emailContent.setAttribute("class", "emailContent")

    emailSubject.innerText = subject // a verifier
    emailContent.innerText = content // a verifier
    separator.innerHTML = " - " // a verifier

    emailAllDetails.setAttribute("class", "emailAllDetails");
    emailAllDetails.appendChild(emailSubject)
    emailAllDetails.appendChild(separator)
    emailAllDetails.appendChild(emailContent)

    //gerer les details du temps
    time.setAttribute("class", "time")
    time.innerText = date;

    // gere les details des boutons caches
    let archiveEmail = document.createElement("button")
    let deleteEmail = document.createElement("button")
    let markReadEmail = document.createElement("button")
    let lookTimeEmail = document.createElement("button")
    let archiveEmailImage = document.createElement("img")
    let deleteEmailImage = document.createElement("img")
    let markReadEmailImage = document.createElement("img")
    let lookTimeEmailImage = document.createElement("img")

    //mets dans les images dans leur button respectifs
    archiveEmail.appendChild(archiveEmailImage)
    deleteEmail.appendChild(deleteEmailImage)
    markReadEmail.appendChild(markReadEmailImage)
    lookTimeEmail.appendChild(lookTimeEmailImage)

    // definissons les attributs
    archiveEmail.setAttribute("class", "archiveEmail")
    deleteEmail.setAttribute("class", "deleteEmail")
    markReadEmail.setAttribute("class", "markReadEmail")
    lookTimeEmail.setAttribute("class", "lookTimeEmail")
    archiveEmailImage.setAttribute("src", "../images/archiver.svg")
    deleteEmailImage.setAttribute("src", "../images/trash.svg")
    markReadEmailImage.setAttribute("src", "../images/envelope.svg")
    lookTimeEmailImage.setAttribute("src", "../images/time.svg")
    //
    hiddenButtons.setAttribute("class","hiddenButtons");
    hiddenButtons.appendChild(archiveEmail)
    hiddenButtons.appendChild(deleteEmail)
    hiddenButtons.appendChild(markReadEmail)
    hiddenButtons.appendChild(lookTimeEmail)

    return emailShort;
}