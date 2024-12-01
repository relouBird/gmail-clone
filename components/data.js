// class emailDataType {
//     constructor (sender, subject, content, date, type){
//         this.sender = sender
//         this.subject = subject
//         this.content = content
//         this.date = date
//         this.type = type
//     }
// }

// let allData = []

const emailData = [
    {
        sender: "Google",
        subject: "Alerte de sécurité",
        content: "Nous avons détecté une nouvelle connexion à votre compte Google depuis un Windows. Si c'était vous, aucune action de votre part n'est requise. Dans le cas contraire, nous vous aiderons à sécuriser votre compte.",
        date: "13 nov.",
        type: "unread",
    }, {
        sender: "Google",
        subject: "Nouvelle detection",
        content: "Nous avons détecté une nouvelle connexion à votre compte Google depuis un Windows. Si c'était vous, aucune action de votre part n'est requise.",
        date: "11 nov.",
        type: "unread",
    }, {
        sender: "Facebook",
        subject: "Nouvelle detection",
        content: "Nous avons détecté une nouvelle connexion à votre compte Google depuis un Windows. Si c'était vous, aucune action de votre part n'est requise.",
        date: "24 oct.",
        type: "read",
    }, {
        sender: "Google",
        subject: "Nouvelle detection",
        content: "Nous avons détecté une nouvelle connexion à votre compte Google depuis un Windows. Si c'était vous, aucune action de votre part n'est requise.",
        date: "15 oct.",
        type: "unread",
    }, {
        sender: "Instagram",
        subject: "Nouvelle Mise à jour",
        content: "Cet e-mail vous a été envoyé pour vous informer de modifications importantes apportées à votre compte et aux services Google que vous utilisez. 2024 Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA",
        date: "11 oct.",
        type: "read",
    },
]
// emailData.forEach(item =>{
//     const data = new emailDataType(item.sender,)
// })

export default emailData;