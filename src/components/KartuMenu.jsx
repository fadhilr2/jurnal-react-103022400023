import '../index.css'
import './LabelHarga'
import LabelHarga from './LabelHarga'
import { useState } from 'react'

export default function KartuMenu({nama, harga, kategori}){
    const [jumlah, setJumlah] = useState(0)
    const [catatan, setCatatan] = useState()
    return(
        <div className='kartu'>
            <h3>{nama}</h3>
            <p>{kategori ? kategori : "Makanan"}</p>
            <LabelHarga nilai={harga}></LabelHarga>
            <div className='kontrol'>
                <button onClick={() =>{
                    setJumlah(jumlah - 1)
                }} disabled={jumlah == 0}>-</button>
                <p>{jumlah}</p>
                <button onClick={() => {
                    setJumlah(jumlah + 1)
                }}>+</button>
            </div>
            {jumlah >= 5 && <p className='badge'>Pesanan Banyak</p>} 
            <p>{jumlah == 0 ? <p>Belum dipesan</p> : <p>Subtotal: Rp {harga * jumlah}</p>}</p>
            <div className='kontrol'>
                <p>Catatan Pesanan</p>
                <input value={catatan} onChange={evt => setCatatan(evt.target.value)} type="text" />
            </div>
            <div className='kontrol'>
                <p>catatan: </p>
                <p>{catatan}</p>
            </div>
            <button>Hapus</button>
        </div>
    )
}

