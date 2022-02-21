import {RiMessage2Fill} from 'react-icons/ri'
import styles from './CardEmails.module.css'

function CardEmails({name, id, subMenuItems}) {
    
    return ( 
        <div className={styles.card}>

            <div className={styles.parte1}>
                <div className={styles.name}>
                    {subMenuItems.owner}
                </div>
            </div>

            <div className={styles.parte2}>
                <h3>{subMenuItems.name}</h3>
                <p className={styles.msg}><RiMessage2Fill/> {subMenuItems.subject}</p>
            </div>

            <div className={styles.parte3}>
                {
                    subMenuItems.users.map((sub) => (
                        <p className={styles.users}>{sub}</p>
                    ))
                }
            </div>
            
        </div>
     );
}

export default CardEmails;