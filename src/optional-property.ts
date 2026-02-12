type User = {
    id: number
    name: string
    age?: number
}

const user1: User = {
    id:1,
    name: "susan"
}

const user2: User = {
    id:2,
    name: "faza",
    age: 21
}

//Union Type: Variabel bisa punya lebih satu kemungkinan tipe
let id: string | number

id = 10
id = "10"

//atau
function printId(id: string | number) {
    console.log("ID:", id)
}
// union type itu dia belum otomatis tau kita lagi pegang yang mana, dia cmn bisa tau salah satu dari 2 tipe data
//biasanya dipake bareng type narrowing
function processInput(input: string | number) {
    if(typeof input === "string") {
        console.log(input.toUpperCase())
    } else {
        console.log(input.toFixed(2))
    }
}

//jadi union itu buat bikin banyak kemungkinan, 
//type narrowing buat kita pastiin kagi yang mana