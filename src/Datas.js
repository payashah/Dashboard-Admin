let Xdata = [
    { "name": "jun", "sale": 420_000 },
    { "name": "Feb", "sale": 110_000 },
    { "name": "March", "sale": 700_000 },
    { "name": "Avrl", "sale": 180_000 },
    { "name": "May", "sale": 310_000 },
    { "name": "Jon", "sale": 190_000 },
    { "name": "July", "sale": 600_000 },
    { "name": "Agust", "sale": 230_000 },
    { "name": "Sep", "sale": 650_000 },
    { "name": "Octobr", "sale": 840_000 },
    { "name": "Nev", "sale": 320_000 },
    { "name": "Des", "sale": 630_000 },
]
const NewJoin = [
    { id: 1, img: "/pic/react.jpg", name: "Paya", job: "React Dev" },
    { id: 2, img: "/pic/redux.jpg", name: "AmirAli", job: "Redux Dev" },
    { id: 3, img: "/pic/tailWind.jpg", name: "Omid", job: "Css TL Dev" },
    { id: 4, img: "/pic/js.jpg", name: "Reza", job: "Java S Dev" },
]
const NewTransActions = [
    { id: 1, img: "/pic/react.jpg", name: "Paya", date: "1987/04/28", amount: 5000, status: "Approved" },
    { id: 2, img: "/pic/redux.jpg", name: "AmirAli", date: "1987/04/27", amount: 4000, status: "Pendding" },
    { id: 3, img: "/pic/tailWind.jpg", name: "Omid", date: "1987/04/26", amount: 3000, status: "Declined" },
    { id: 4, img: "/pic/js.jpg", name: "Reza", date: "1987/04/25", amount: 2000, status: "Removed" },
]
let UserRows = [
    { id: 1, userName: "paya", img: "./pic/react.jpg", status: "Active", transAction: 120, email: "paya.shah@gmail.com" },
    { id: 2, userName: "AmirAli", img: "./pic/redux.jpg", status: "unActive", transAction: 520, email: "AmirAli.gharibi@gmail.com" },
    { id: 3, userName: "Omid", img: "./pic/tailwind.jpg", status: "Removed", transAction: 364, email: "Omid.baba@gmail.com" },
    { id: 4, userName: "Reza", img: "./pic/js.jpg", status: "Approved", transAction: 218, email: "Reza.shah@gmail.com" },
    { id: 5, userName: "Mani", img: "./pic/js.jpg", status: "Actived", transAction: 500, email: "Nabi.shah@gmail.com" },
]
let AllProducts = [
    { id: 1, name: "Mobile", price: "$ 4000", img: "./pic/mobile.jpg" },
    { id: 2, name: "Kole", price: "$ 500", img: "./pic/kole.jpg" },
    { id: 3, name: "Shirt", price: "$ 800", img: "./pic/shirt.jpg" },
    { id: 4, name: "Sharzher", price: "$ 150", img: "./pic/sharzher.jpg" },
    { id: 5, name: "Glasses", price: "$ 700", img: "./pic/glasses.jpg" },
    { id: 6, name: "Atr", price: "$ 1200", img: "./pic/atr.jpg" },
]
const ProductData = [
    { "name": "Jun", "sale": 420_000 },
    { "name": "Feb", "sale": 110_000 },
    { "name": "March", "sale": 700_000 },
]
let newUser = [
    { id: 1, title: "First Name", placeholder: "first name ..." },
    { id: 2, title: "Last Name", placeholder: "last name ..." },
    { id: 3, title: "UserName", placeholder: "username ..." },
    { id: 4, title: "Password", placeholder: "password ..." },
    { id: 5, title: "Mobile", placeholder: "09 ..." },
    { id: 6, title: "Email", placeholder: "...@gmail.com" },
    { id: 7, title: "Sex", placeholder: "Male or Female" },
    { id: 8, title: "Address", placeholder: "address ..." },
]
export { Xdata, NewJoin, NewTransActions, UserRows, AllProducts, ProductData, newUser }