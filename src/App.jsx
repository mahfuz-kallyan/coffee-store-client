
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard'
import { useState } from 'react'
import Home from './Components/Home'

function App() {

  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees]= useState(loadedCoffees)

  return (
    <div>
      <Home></Home>
       <h1 className='text-6xl text-purple-600 text-center m-20'>Coffess:{coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-6 p-12'>
      {
        coffees.map(coffee=> <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
      }
      </div>
    </div>
  )
}

export default App
