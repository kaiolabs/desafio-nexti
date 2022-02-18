import NavBar from "../components/layout/NavBar";
import styles from './Home.module.css'
import styled from "styled-components";
import { IoMdArrowDropdown } from 'react-icons/io'
import { useState, useEffect } from 'react'
import { i18n } from '../translate/i18n'
import api from "../services/api";


function Home({toogleTheme}) {

    const [user, setUser] = useState();

    useEffect(() => {
        api
          .get("https://desafioreact.s3.amazonaws.com/menu/menu.json")
          .then((response) => setUser(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);


      console.log(user)

    const Aside = styled.div`

        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        flex-wrap: nowrap;
        width: 100%;
        height: 16%;

        .avatar{
            background-color:  #79a6e2;
            
            width: 30px;
            padding: 7px;
            height: 30px;
            overflow: hidden;
            border-radius: 50%;
            align-items: center;
            display: flex;
            justify-content: center;
            font-size: 1.3em;
            text-transform: uppercase;
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
                    <NavBar toogleTheme = {toogleTheme}/>
                </header>

                <aside>
                    <Aside>
                        <div className="avatar">
                            <h1>{name}</h1>
                        </div>

                        <button>{i18n.t('buttons.buttonNovo')} <IoMdArrowDropdown /></button>
                        
                    </Aside>
                    <hr className={styles.linha}/>
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
                            <input className={styles.check} type="checkbox" name="check"/>
                            <div>
                                <button>{i18n.t('buttons.buttonAtribuir')}</button>
                                <button>{i18n.t('buttons.buttonArquivar')}</button>
                                <button>{i18n.t('buttons.buttonAgendar')}</button>
                            </div>
                        </div>
                    </div>

                    <div>
                        
                    </div>
                </main>

            </section>
        </div>
    );
}

export default Home;