import Styles from './NavBar.module.css';
import { RiMenuLine } from 'react-icons/ri'
import { i18n } from '../../translate/i18n'

function NavBar() {
    return (
        <nav className={Styles.navbar}>
           <button><RiMenuLine/></button>

           <div>
               <button>{i18n.t('buttons.buttonAjuda')}</button>
               <button>{i18n.t('buttons.buttonConfg')}</button>
           </div>
        </nav>
    );
}

export default NavBar;