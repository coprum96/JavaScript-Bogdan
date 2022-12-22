const  name = 'Stas'
const postsQty = 23 

const userProfile = {
    info: {
        name,
        postsQty,
        hasSignedAgreement: false 
    }
}

console.log(userProfile)

// глобальные объкт window

// window.console.log
// global.console.log

const myCity = {
    city: 'New York',
    cityGreeting () {
        console.log('Greetngs!!')
    }
}
console.log(myCity)
myCity.cityGreeting()
