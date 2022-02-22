import styles from './Card.module.css'
import { useState } from 'react'

// Cards do menu lateral

function Card({ id, tarefa, subMenus }) {

    const [open, setOpen] = useState(false)

    return (
        <div className={styles.card}>
            <li className={styles.li} key={id}><p key={id} onClick={() => setOpen(!open)}><span className={styles.span}> {`>`} </span> {`${tarefa}`}</p>
                {open &&
                    <ul>
                        {subMenus.map((sub) => (
                            <p className={styles.p} key={sub.id}> {`${sub.name}`} </p>
                        ))}
                    </ul>
                }
            </li>
        </div>
    );
}

export default Card;

