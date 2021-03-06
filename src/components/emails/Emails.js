import { useEffect, useState } from 'react'
import CardEmails from './CardEmails';

// Componente responsável por carregar os e-mails da caixa de e-mails.

function Emails() {

    const [itens, setItens] = useState([]);
   
    useEffect(() => {
        fetch("https://desafioreact.s3.amazonaws.com/menu/itens.json", {
            method: 'GET',
        })
            .then((resp) => resp.json())
            .then((data) => {
                setItens(data.items)
            })
            .catch((err) => console.log(err))
    }, [])

    
    return (
        <div>
            {
                itens.map((email) => (
                    email.subMenuItems.map((sub) => (
                        <CardEmails key={sub.id}  subMenuItems ={sub}/>
                    ))
                ))
                
            }
           
        </div>
    );
}

export default Emails;