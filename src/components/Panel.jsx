import { Children } from 'react'
import '../index.css'
export default function Panel({children, judul}){
    return (
        <div className="panel">
            {judul && <h2>{judul}</h2>}
            {children}
        </div>
    )

}