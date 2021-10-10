import styles from './Button.module.scss'

export default function (props){

    switch (props.type){
        case 'more':
            return(
                <button className={styles.moreButton} style={props.style}>
                    {props.children}
                </button>
            )
            break;
        default:
            return(
                <button className={styles.button} style={props.style}>
                    {props.children}
                </button>
            )
            break;

    }
}
