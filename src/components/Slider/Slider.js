import React from 'react'
import {useState, useEffect} from "react";
import Slider from 'react-touch-drag-slider'
import styled, {createGlobalStyle} from 'styled-components'
import styles from './Slider.module.scss'
import {Gallery} from "@vkontakte/vkui";



export default function (props) {
    const [active, setActive] = useState(0)
    const [top, setTop] = useState(0)

    useEffect((e)=>{
        let doc=document.getElementById(`elemInSlider0`)
        setTop(doc.clientHeight)
    },[])

    return (
        <div id="top-container" className="vkui__root" style={{height:"fit-content", width:"100%"}} style={props.style}>
            <Indicator top={top} i={active} elems={props.children} padding={props.padding}/>

            <Gallery
                slideWidth="100%"
                style={{ height: "fit-content" }}
                onChange={slideIndex => {
                    let doc=document.getElementById(`elemInSlider${slideIndex}`)
                    setTop(doc.clientHeight)
                    setActive(slideIndex)
                }}
            >
                {props.children.map((e,i)=>{
                    return(
                        <div style={{height:"fit-content", padding:`0vw ${props.padding}vw`}} id={`elemInSlider${i}`}>
                            {e}
                        </div>
                    )
                })}
            </Gallery>

        </div>
    )
}

const Indicator = (props) => {
    return (
        <div className={styles.indicator} style={{marginTop: props.top-20, marginLeft:`${props.padding}vw`}}>
            {props.elems.map((e, i) => {
                return (<div active={(props.i === i).toString()} className={styles.component}></div>)
            })}
        </div>
    )
}

