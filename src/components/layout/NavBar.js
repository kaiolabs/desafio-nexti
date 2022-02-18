import styles from './NavBar.module.css';
import { RiMenuLine } from 'react-icons/ri'
import { i18n } from '../../translate/i18n'

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <button><RiMenuLine /></button>

            {/* <div className={styles.nav}>
                <input type="checkbox"/>
                    <div className={styles.menu}>
                        <li><a href="#">home</a></li>
                    </div>
            </div> */}

            <div>
                <button>{i18n.t('buttons.buttonAjuda')}</button>
                <button>{i18n.t('buttons.buttonConfg')}</button>
            </div>
        </nav>
    );
}

export default NavBar;