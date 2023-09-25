import { Header } from "../widgets/Header";
import pexelsPropos from "../assets/img/pexelsPropos.jpg"
import { Contact } from "../widgets/Contact";




export function Propos () {



    return (

        <>
        
            <Header pageTitle="A propos de Elyft" srcImg={pexelsPropos} headerDescription="Depuis 2022, nous accompagnons les entreprises et leurs propriétaires en Afrique
            et en occident en construisant des applications qui boostent leurs croissances, créent de la proximité avec leurs collaborteurs
            et clients et améliorent l'expérience client et utilisateur." textUp="text-translate" activePropos="activePropos" />
        A propos
            <Contact/>
        
        
        
        </>



    )



}