import { RiMessage2Fill } from 'react-icons/ri'
import styles from './CardEmails.module.css'
import styled from 'styled-components'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'


// Componente caixa de e-mails.


function CardEmails({ subMenuItems }) {

    const { colors } = useContext(ThemeContext)

    const Card = styled.div`
    
    .card{
        background-color: ${colors.backgroundCard};
        width: 75vw;
        height: 25vh;
        border-bottom: 1px solid gray;
        margin: 10px;
        display: flex;
        flex-direction: row;
}

    `;

    return (
        <Card>
            <div className='card'>

                <div className={styles.parte1}>
                    <div className={styles.name} data-id={subMenuItems.id}>
                        {subMenuItems.owner}
                    </div>
                </div>

                <div className={styles.parte2}>
                    <h3>{subMenuItems.name}</h3>
                    <p className={styles.msg}><RiMessage2Fill /> {subMenuItems.subject}</p>
                </div>

                <div className={styles.parte3}>
                    {
                        subMenuItems.users.map((sub) => (
                            <p className={styles.users} >{sub} </p>
                        ))
                    }
                </div>

            </div>
        </Card>
    );
}

export default CardEmails;