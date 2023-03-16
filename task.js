const fs = require('fs')
const crypto = require('crypto')

const password1 = 'hello password'
const password2 = 'bye bye password'

function hashmyPass(password){
    const pass = crypto.createHash('sha256').update(password).digest('hex')
    fs.writeFile('crypto1/password.txt', pass, (err) => {
        if (err) throw err;
})
}

function comparemyPass(password){
    return fs.readFile('crypto1/password.txt', (err, data) => {
        if (err) throw err;
    const pass = crypto.createHash('sha256').update(password).digest('hex')
    const pass1 = data.toString()
    if (pass===pass1) console.log('Passwords match')
    else console.log('Passwords do not match')
    })
}

hashmyPass(password1)

comparemyPass(password1)
comparemyPass(password2)