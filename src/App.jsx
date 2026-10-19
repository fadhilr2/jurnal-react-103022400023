import { useState } from 'react'
import './index.css';
import Panel from './components/Panel';
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
      <Panel judul={"Menu Hari Ini"}>
        <KartuMenu nama={"Ayam Geprek"} harga={10000 + (N * 100) }></KartuMenu>
        <KartuMenu nama={"Es Teh Lemon"} harga={"Rp 6.000"} kategori={"Minuman"}></KartuMenu>
        <KartuMenu nama={"Mie Goreng Telur"} harga={"Rp 12.000"} kategori={"Makanan"}></KartuMenu>

      </Panel>
    </>
  )
}

export default App
