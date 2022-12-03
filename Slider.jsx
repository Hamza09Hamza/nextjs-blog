import React from 'react'
import { useState } from 'react'
import { eventObj } from './SliderFunction'
import styles from "./Slider.module.css"
const Slider = () => {
    const [eventName, setEventName] = useState("stopped")
    const [Array, setArray] = useState(["red", "blue", "green", "yellow", "purple"])

    setTimeout(() => {
        if (eventName === "stopped") {
            setEventName("push")
        }
        else if (eventName === "push") {
            setEventName("change")
        }
        else if (eventName === "change") {

            setEventName("stopped");
            let Arr = Array;
            const FirstItem = Arr.shift();
            Arr.push(FirstItem);
            setArray(Arr);
        }
    }, 9000)
    return (<>
        <div className={styles.divSlider}>
            {Array.map((item) => {
                const ItemPlace = Array.indexOf(item)
                return (<>
                    <div
                        style={{ backgroundColor: item }}
                        className={styles.itemSlider + " " + eventObj(eventName, ItemPlace)}
                    >
                        <h1> Its here The  {item}</h1>
                    </div>
                </>)
            })
            }

        </div>
    </>);
}

export default Slider;
