import styles from './HomeWidget.module.scss'
import Slider from "../Slider/Slider";
import "@vkontakte/vkui/dist/vkui.css";
import Button from "../Button/Button";
export default function (props) {
    return(
        <div>
            <div className={styles.parent}>
                <Slider padding={10} style={{ height:"fit-content",width:"100%", overflowX:"hidden"}}>
                    <div style={{display:"flex", alignItems:"center"}}>
                       <div style={{maxWidth:"500px"}}>
                           <h1 style={{padding:"0px", margin:"0px"}}>Библиотеки Москвы</h1>
                           <div >Попробуйте наши рекомендации. Система подберёт по вашей истории книги, которые вам могут понравится.</div>
                       </div>
                        <div className={styles.buttonRight}>
                            <Button>Попробовать</Button>
                        </div>
                    </div>
                    <div>
                        <div style={{maxWidth:"500px"}}>Попробуйте наши рекомендации. Система подберёт по вашей истории книги, которые Вам могут понравиться.</div>
                    </div>
                </Slider>

            </div>
            <div className={styles.searchContainer}>
                <input/>
                <Button style={{flex:"1 1 auto"}}>Найти</Button>
                <Button style={{flex:"1 1 auto"}} type={"more"}>Избранное</Button>
                <Button style={{flex:"1 1 auto"}} type={"more"}>Кабинет читателя</Button>
            </div>
        </div>
    )
}
