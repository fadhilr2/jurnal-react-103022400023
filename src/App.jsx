import { useState } from 'react'
import './index.css';
import KartuMenu from './components/KartuMenu';

const namaPanggilan = "Fadiil Rizky Akbar"
const N = 23

function App() {
  const jam = 9
  

  return (
    <>
      <h1 className='judul' style={{color: 'blue', fontWeight: 800}}>Kantin {namaPanggilan}</h1>
      <p>{jam < 12 ? 'Selamat Pagi' : 'Selamat Siang'}</p>
      <p>Saldo Awal kantin: Rp {N * 1000}</p>
      <button disabled>Bayar</button>
      
    </>
  )
}

export default App
