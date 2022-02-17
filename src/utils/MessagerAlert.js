import Styles from './MessagerAlert.module.css';
import { useState, useEffect } from 'react';

function MessagerAlert({ type, msg }) {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!msg) {
            setVisible(false)
            return
        }
        setVisible(true)
        const timer = setTimeout(() => {
            setVisible(false)
        }, 2000)
        return () => clearTimeout(timer)
    }, [msg]);

    return (
        <>
            {visible && (
                <div className={`${Styles.message} ${Styles[type]}`}>{msg}</div>
            )}
        </>
    );
}

export default MessagerAlert;