import { useState } from 'react'
import './index.css';
import Panel from './components/Panel';
import KartuMenu from './components/KartuMenu';

const namaPanggilan = "Fadiil Rizky Akbar"
const N = 23

function App() {
  const jam = 9
  const dataMenu = [
    {id: "1", nama: "Ayam Geprek", harga: 10000 + (N * 100), kategori: "makanan"},
    {id: "2", nama: "Es Teh Lemon", harga: "6000", kategori: "Minuman"},
    {id: "3", nama: "Mie Goreng Telur", harga: 12000, kategori: "makanan"},
    {id: "4", nama: "Ayam Geprek", harga: 10000 + (N * 100), kategori: "makanan"},
    {id: "5", nama: "Ayam Geprek", harga: 10000 + (N * 100), kategori: "makanan"}
    
  ]

  return (
    <>
      <h1 className='judul' style={{color: 'blue', fontWeight: 800}}>Kantin {namaPanggilan}</h1>
      <p>{jam < 12 ? 'Selamat Pagi' : 'Selamat Siang'}</p>
      <p>Saldo Awal kantin: Rp {N * 1000}</p>
      <button disabled>Bayar</button>
      <button>Balik Urutan</button>
      <Panel judul={"Menu Hari Ini"}>
        {dataMenu.map(x => {
          return (
            <KartuMenu key={x.id} nama={x.nama} harga={x.harga} kategori={x.kategori}></KartuMenu>
          )
        })}
      </Panel>
    </>
  )
}

export default App
