import styles from './DrinkMenu.module.css'
import image from '../../assets/feature.png'

export default function DrinkMenu () {
    return (
       
         <div className={styles.DrinkMenu}>
            <div className={styles.DrinkNew}>
                <h1>MENU</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis.</p>
                <button>menu</button>
            </div>
           
            <div className={styles.emptyDrinks}>
                <div><img className={styles.drinkImg} src='https://www.graphicpear.com/wp-content/uploads/2019/07/Coffee-Cup-Mockup-Blank-Mode.jpg' /></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
       
    )
}