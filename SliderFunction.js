import styles from "../styles/Slider.module.css"
export const eventObj = (eventName, Index) => {
    let styleName = " "
    if (1 == Index) {
        if (eventName == "stopped") {
            styleName = styleName.includes(styles.second) ? styleName.split(' ')[0] : styles.second
        } else if (eventName == "push") {
            styleName = styles.UpgradeSecondeToFirst + " " + styles.first
        }
        else {
            styleName = styleName.includes(styles.first) ? styleName.split(' ')[0] : styles.first
        }
    } else if (0 == Index) {
        if (eventName == "stopped") {
            styleName = styleName.includes(styles.first) ? styleName.split(' ')[0] : styles.first
        } else if (eventName == "push") {
            styleName = styles.DowngradeFirstToSecond
        }
        else {
            styleName = styleName.includes(styles.last) ? styleName.split(' ')[0] : styles.last
        }
    }
    else if (2 == Index) {
        if (eventName == "stopped") {
            styleName = styleName.includes(styles.last) ? styleName.split(' ')[0] : styles.last
        }
        else if (eventName == "push") {
            styleName = styles.second + "  " + styles.UpgradeLasttoSecond
        }
        else {
            styleName = styleName.includes(styles.second) ? styleName.split(' ')[0] : styles.second
        }
    }
    else if (Index > 2) {
        styleName = styles.last
    }
    return styleName
}


export const ItemClass = (Number) => {
    if (Number >= 2) {
        return styles.last
    }
}