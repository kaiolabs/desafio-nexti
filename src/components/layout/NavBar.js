import styles from './NavBar.module.css';
import { RiMenuLine } from 'react-icons/ri'
import { BsSun, BsMoon } from 'react-icons/bs'
import { useState, useContext } from 'react';
import { i18n } from '../../translate/i18n'
import { ThemeContext } from 'styled-components'
import Switch from 'react-switch'

// Componente barra de navegação.

function NavBar({ toogleTheme }) {

    const [openMenu, setOpenMenu] = useState(false)

    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar_nav}>

                <div className={styles.menu}>
                    <p onClick={() => setOpenMenu(!openMenu)} ><RiMenuLine /></p>

                    {openMenu &&
                        <DropDownMenu toogleTheme={toogleTheme} />
                    }
                </div>

                <div>
                    <NavItem icon={i18n.t('buttons.buttonAjuda')} />
                    <NavItem icon={i18n.t('buttons.buttonConfg')}>
                        <DropDownConfg />
                    </NavItem>
                </div>

            </ul>
        </nav>
    );
}

export default NavBar;



function NavItem(props) {

    const [open, setOpen] = useState(false)

    return (
        <li className={styles.nav_item} onClick={() => setOpen(!open)}>
            <a className={styles.icon_button}>
                {props.icon}
            </a>
            {open && props.children}
        </li>
    )
}



function DropDownMenu({toogleTheme}) {

    const I18N_STORAGE_KEY = 'i18nextLng'

    const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY))

    const { colors, title } = useContext(ThemeContext)


    const handleSelectChange = event => {
        localStorage.setItem(
            I18N_STORAGE_KEY,
            event.target.value
        )
        window.location = window.location
    }

    return (
        <div className={styles.dropDownMenu}>
            <h3>{i18n.t('titles.menuIdioma')}</h3>

            <select className={styles.linguagem} onChange={handleSelectChange} value={language}>
                <option>Linguagem</option>
                <option value='pt-BR'>PT-BR</option>
                <option value='en-US'>EN-US</option>
                <option value='es-ES'>ES-ES</option>
            </select>

            <h3>{i18n.t('titles.menuTemas')}</h3>

            <div className={styles.switch}>

                <BsSun className={styles.sun}/>
                
                <Switch
                    className={styles.switchButton}
                    onChange={toogleTheme}
                    checked={title === 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    onColor={colors.primary}
                />

                <BsMoon className={styles.moon}/>

            </div>

        </div>
    )
}



function DropDownConfg() {
    function DropDownItem(props) {
        return (
            <a href='/' className={styles.menu_item}>
                {props.children}
            </a>
        )
    }
    return (
        <div className={styles.dropDownConfg}>
            <DropDownItem> {i18n.t('buttons.buttonLogout')} </DropDownItem>
        </div>
    )
}