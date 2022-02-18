import styles from './NavBar.module.css';
import { RiMenuLine } from 'react-icons/ri'
import { i18n } from '../../translate/i18n'
import React, { useState,} from 'react';

function NavBar(props) {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar_nav}>

                <NavItem icon={<RiMenuLine />}>
                    <DropDownMenu />
                </NavItem>

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



function DropDownMenu() {
    function DropDownItem(props) {
        return (
            <a href='#' className={styles.menu_item}>
                {props.children}
            </a>
        )
    }
    return (
        <div className={styles.dropDown}>
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