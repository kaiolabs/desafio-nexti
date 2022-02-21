import MenuAside from '../components/menu/MenuAside'
import { IoMdArrowDropdown } from 'react-icons/io'
import NavBar from '../components/layout/NavBar'
import Emails from '../components/emails/Emails'
import { i18n } from '../translate/i18n'
import styled from 'styled-components'
import styles from './Home.module.css'
import { useState } from 'react'



function Home() {

    const Aside = styled.div`

        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        flex-wrap: nowrap;
        width: 100%;
        height: 16%;

        .backAvatar{
            display: flex;
            justify-content: center;

        }
        
        .avatar{
            background-color:  #79a6e2;
            
            width: 40px;
            padding: 7px;
            height: 40px;
            border-radius: 50%;
            align-items: center;
            display: flex;
            justify-content: center;
            font-size: 1.3em;
            text-transform: uppercase;
        }

        .on{
            width: 5px;
            height: 5px;
            border-radius: 50%;
            padding: 5px;
            position: relative;
            left: 55px;
            top: 35px;
            background-color: #3dc73d;
            border: 1px solid #EFEFEF;

        }

        button{
            font-family: 'Roboto', sans-serif;
            margin: 0;
            background: none;
            border: none;
            color:#1A73E8;
            font-weight: 600;
            font-size: 1.2em;
            align-items: center;
            display: flex;
            justify-content: center;
            text-align: center;
        }

        svg{
            padding-left: 5px;
        }
    `;


    const [name] = useState(localStorage.getItem("name"))
    const [pesquisa, setPesquisa] = useState()


    return (
        <div>
            <section className={styles.grid}>

                <header>
                    <NavBar />
                </header>

                <aside className={styles.aside}>
                    <Aside>
                        <div className="backAvatar">
                            <div className="on"></div>
                            <div className="avatar">
                                <h1>{name}</h1>
                            </div>
                        </div>
                        <button>{i18n.t('buttons.buttonNovo')} <IoMdArrowDropdown/> </button>

                    </Aside>

                    <hr className={styles.linha} />

                    <MenuAside />

                </aside>

                <main>
                    <div className={styles.mainTop}>
                        <div>
                            <input
                                className={styles.input}
                                type="text"
                                name="pesquisa"
                                autoComplete="on"
                                value={pesquisa}
                                placeholder={i18n.t('messages.pesquisa')}
                                onChange={e => setPesquisa(e.target.value)}
                            />
                        </div>
                        <div className={styles.buttons}>
                            <input className={styles.check} type="checkbox" name="check" />
                            <div>
                                <button>{i18n.t('buttons.buttonAtribuir')}</button>
                                <button>{i18n.t('buttons.buttonArquivar')}</button>
                                <button>{i18n.t('buttons.buttonAgendar')}</button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.mainEmails}>
                        <Emails/>
                    </div>
                </main>


            </section>
        </div>
    );
}

export default Home;