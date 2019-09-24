const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name)=>{
sgMail.send({
    to:'ilis_vlad1990@yahoo.com',
    from: 'ilis_vlad1990@yahoo.com',
    subject:'This is my first email',
    text:`I hope this one actualy gets to you,${name}`
})
}

const sendCancelationEmail = (email,name) =>{
    sgMail.send({
        to:email,
        from:'ilis_vlad1990@yahoo.com',
        subject:'Sorry to see you go',
        text:`Goodby ${name}.I hope to see you back`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}