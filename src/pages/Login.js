import { useState } from 'react';
import Container from '../components/layout/Container';
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom'
import MessagerAlert from '../utils/MessagerAlert'
import Switch from 'react-switch'
import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { i18n } from '../translate/i18n'

const I18N_STORAGE_KEY = 'i18nextLng'

function Login({ toogleTheme }) {

    // Input de dados
    const [nomeDeUsuario, setNomeDeUsuario] = useState('')
    const [senhaDeUsuario, setSenhaDeUsuario] = useState('')

    //Modo Dark / White 
    const { colors, title } = useContext(ThemeContext)

    // Alerta de erro
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')

    // Rota
    const history = useNavigate()

    /* 
    Nessa parte pensei em 3 formas de fazer a autenticação do login
    1 - Criar uma API para armazena os usuários
    2 - Usar o Firebase ou o Supabase para fazer a autenticação
    3 - Localmente por meio de VAR essa foi a que usei já que era para utilizar um login fixo 
    */

    var bancoDeUsuarios = {
        userName: 'user',
        password: 123
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const onLinkClick = (e) => {
        e.preventDefault()

        // Verifica se os campos foram preenchidos corretamente
        if (nomeDeUsuario == bancoDeUsuarios.userName && senhaDeUsuario == bancoDeUsuarios.password) {
            history('/Home')
            // Salva as iniciais do usuário
            localStorage.setItem("name", nomeDeUsuario.substring(0 , 2))
        } else {
            setMessage(`${i18n.t('messages.messagesError')}`)
            setType('erro')
        }

        const timer = setTimeout(() => {
            setMessage('')
        }, 2000)
        return () => clearTimeout(timer)
    }

    //Essa parte e responsável por fazer à troca das linguagens.
    const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY))

    const handleSelectChange = event => {
        localStorage.setItem(
            I18N_STORAGE_KEY,
            event.target.value
        )
        window.location = window.location
    }


    return (
        <Container customClass="center">

            <div className={styles.structure}>

                <div className={styles.boxConfig}>
                    <div>
                        <select className={styles.linguagem} onChange={handleSelectChange} value={language}>
                            <option>Linguagem</option>
                            <option value='pt-BR'>PT-BR</option>
                            <option value='en-US'>EN-US</option>
                            <option value='es-ES'>ES-ES</option>
                        </select>
                    </div>
                    <Switch
                        onChange={toogleTheme}
                        checked={title === 'dark'}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        onColor={colors.secundary}
                    />
                </div>

                <div className={styles.boxLogin}>

                    {/* Mensagem de alerta para o usuário caso erre a senha ou o nome de usuário. */}
                    
                    {message && <MessagerAlert type={type} msg={message} />}

                    <h2>{i18n.t('titles.title')}</h2>
                    <form className={styles.formularioDeLogin} onSubmit={handleSubmit}>

                        <input
                            type="text"
                            name="usuário"
                            autoComplete="on"
                            placeholder={i18n.t('messages.placeholderUser')}
                            value={nomeDeUsuario}
                            onChange={e => setNomeDeUsuario(e.target.value)}
                        />
                        <input
                            type="password"
                            name="password"
                            autoComplete="on"
                            placeholder={i18n.t('messages.placeholderPassword')}
                            value={senhaDeUsuario}
                            onChange={e => setSenhaDeUsuario(e.target.value)}
                        />
                        <button onClick={onLinkClick} type='submit'>{i18n.t('buttons.save')}</button>
                    </form>
                </div>
            </div>
        </Container>
    );
}

export default Login;