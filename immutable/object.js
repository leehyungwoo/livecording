


//원본이 바뀌는현상
function fn1(person) {
    person.name = 'lee';
}

var o1 = { name: 'kim' }
fn1(o1)
console.log(o1)






// //해결법1
// function fn(person) {
//     person = Object.assign({}, person)
//     person.name = 'lee';
//     return person
// }

// var o1 = { name: 'kim' }
// var o2 = fn(o1)


// console.log(o1)
// console.log(o2)




// //해결법2

// function fn1(person) {
//     person.name = 'lee';
// }

// var o1 = { name: 'kim' }
// var o2 = Object.assign({}, o1)
// fn1(o2)

// console.log(o1)
// console.log(o2)