const objectA = {
    a: 10,
    b: true
}

const copy0fA = objectA 
console.log(objectA)

copy0fA.a = 20 
console.log(objectA)
copy0fA.b = false 
console.log (objectA)
copy0fA.c = 'abc'
console.log(objectA)

let a = 10
a = true 
a = 'Bogdan'
a = undefined

const myCity = {
    city: 'New York',
    info: {
        popular: true,
        country: 'USA',
        bestcolour: 'blue',
        info: {
            economy: 'favority'
    }
    }
}
 
myCity.popular = true
myCity.city = 'SPB'
myCity.hymne = 'national'

delete myCity.hymne

myCity['popular'] = true

const countryPropertyName = 'country'
myCity[countryPropertyName] = 'Russia'

const bestcolourPropertyNAme = 'bestcolour'
myCity[bestcolourPropertyNAme] = 'black'

const bestdautherPropertyNAme = 'dauther'
myCity[bestdautherPropertyNAme] = 'LIZA'



console.log (myCity)
console.log (myCity.info.popular)
console.log (myCity.info)

delete myCity[bestdautherPropertyNAme]


console.log (myCity)


