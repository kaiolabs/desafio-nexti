import styles from './MenuAside.module.css'
import { useEffect, useState } from 'react'
import Card from './Card';

function MenuAside() {

    const [menus, setMenus] = useState([]);

    useEffect(() => {
        fetch("https://desafioreact.s3.amazonaws.com/menu/menu.json", {
            method: 'GET',
        })
            .then((resp) => resp.json())
            .then((data) => {
                setMenus(data.menus)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className={styles.div}>
            {
                menus.map((menu) => (
                    <Card key={menu.id} id = {menu.id} tarefa ={menu.name} subMenus = {menu.subMenus}/>
                ))
            }
        </div>
    );
}

export default MenuAside;
