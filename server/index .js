const express = require('express');
const app = express()
const port = 3005;


const car =
[
    {id: 1, "maker": 'Toyota', model:"Camry", "year": "2023", "color": "Silver", "quantity": "15", "dealer": "Toyota of Glendale" },
    {id: 2,  "maker": "Honda", "model": "Civic", "year": "2024", "color": "Black", "quantity": "20", "dealer": "Honda Downtown" },
    {id: 3, "maker": "Ford", "model": "F-150", "year": "2023", "color": "White", "quantity": "10", "dealer": "Ford of North Hollywood"},
    {id: 4,"maker": "Chevrolet", "model": "Tahoe", "year": "2024", "color": "Red", "quantity": "8", "dealer": "Chevy Malibu"},
    {id: 5, "maker": "Nissan", "model": "Rogue", "year": "2023", "color": "Blue", "quantity": "12", "dealer": "Nissan of Burbank" },
    {id: 6, "maker": "BMW", "model": "X5", "year": "2024", "color": "Gray", "quantity": "5","dealer": "BMW of Encino" },
    {id: 7, "maker": "Mercedes-Benz", "model": "C-Class", "year": "2023", "color": "Black", "quantity": "7", "dealer": "MB of Bev Hills"},
    {id: 8, "maker": "Hyundai", "model": "Elantra", "year": "2024", "color": "White", "quantity": "18", "dealer": "Hyundai of A"},
    {id: 9, "maker": "Toyota", "model": "RAV4","year": "2024","color": "Blue","quantity": "14", "dealer": "Toyota of Pasadena"},
    {id: 10, "maker": "Toyota", "model": "Corolla","year": "2024", "color": "White", "quantity": "22", "dealer": "Toyota of Glendale" },
    {id: 11, "maker": "BMW", "model": "3 Series", "year": "2023", "color": "Black", "quantity": "9", "dealer": "BMW of Beverly Hills" },

]
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hello World!")
})
//1.
app.get('/api/developer',(req,res) => {
    res.send('Lhance Bust')
})
//2.
app.get('/api/car', (req,res) => {
    res.json(car)

 })
// //3.
// app.post('/api/cars/:maker', (req,res) => {
//     const maker = String(req,URLSearchParams.maker)
//     const cars = DataTransfer.cars.find(s => s.maker === maker)

//     if(!cars){
//         return res.status(404).json({message: "error cars not found"})
//     }
//     res.json(cars)
// })
// //4.
// app.get('/api/cars/:id' , (req,res) =>{
//     const id = number(req.params.id)

//     const car = data.car.find(s => s.id === id)

//     if (!car){
//         return res.status(404).json ({message: "cars not found"})
//     }
//     res.status(car)
// })

// //5.
// app.post('/api/cars', (req, res) =>{
//     const newcars = req.body
    
//     data.car.push(newcars)
//     res.status(201).json({message: " cars added"})


// })

//6.

//7.



app.listen(port, () => {
  console.log(`http://localhost: ${port}`)

})