import image from '../../assets/feature.png'
import DrinkMenu from '../DrinkMenu/DrinkMenu';
import LoginForm from '../LoginForm/LoginForm'
import styles from './Feature.module.css'
import { useNavigate } from 'react-router-dom';

export default function Feature () {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/');
    };


    return (
        <>
        <div className={styles.Feature}>
            <img src={image} />
            <div className={styles.new}>
                <h1>NEW RELEASE</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis.</p>
                <div>
                    <button handleClick = {handleClick}>Customize</button>
                    <button handleClick = {handleClick}>add to cart</button>
                 </div>
            </div>
        </div>

        <DrinkMenu />
        </>
    )
}