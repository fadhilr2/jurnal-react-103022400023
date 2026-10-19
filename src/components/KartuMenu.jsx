import '../index.css'
import './LabelHarga'
import LabelHarga from './LabelHarga'
export default function KartuMenu({nama, harga, kategori}){
    return(
        <div className='kartu'>
            <h3>{nama}</h3>
            <p>{kategori ? kategori : "Makanan"}</p>
            <LabelHarga nilai={harga}></LabelHarga>

        </div>
    )
}

