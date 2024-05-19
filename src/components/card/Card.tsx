'use client'
import './card.css'
import custom from './custom.module.scss'
import {useState} from "react";
import {clsx} from "clsx";
export default function Card() {
    const [expading, setExpading] = useState(false)
    return (
        <div onClick={()=> {setExpading(!expading)}} className={clsx('card', {
            [custom.card] : expading
        })}>Card
        </div>
    )
}