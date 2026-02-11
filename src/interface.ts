//interface user mahasiswa

interface UserMhs{
    id: number
    name: string
    nim: number
    isActive: boolean
    email?: string //email with ? is optional
}

const newUser: UserMhs = {
    id: 2,
    name: "Sauzan Faza",
    nim: 48639368,
    isActive: true
}

console.log(newUser)