import NavBar from "../components/layout/NavBar";
import styles from './Home.module.css'
import { useState, useEffect } from 'react'
import api from "../services/api";

function Home() {

    const [user, setUser] = useState();


    useEffect(() => {
        api
          .get("/menu/menu.json")
          .then((response) => setUser(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);


      console.log(user)


    return ( 
        <div>
            <section className={styles.grid}>

                <header>
                    <NavBar/>
                </header>

                <aside>
                    <div className={styles.asideTop}>

                    </div>
                </aside>

                <main>
                    <div className={styles.mainTop}>

                    </div>
                </main>

            </section>
        </div>
     );
}

export default Home;