import { Header } from "../widgets/Header";
import pexelsFauxels from "../assets/img/pexelsFauxels.jpg";
import { Contact } from "../widgets/Contact";











export function Services () {




    return (


        <>
        
            <Header pageTitle="Votre Transformation Numérique Commence Ici." srcImg={pexelsFauxels} headerDescription="Réimaginez Votre business avec des technologies sur-mesure, améliorer l'expérience client" activeServices="activeServices" />

               <section className="body-content">

                    <span className="section-title">NOS Services</span>
                    <h2 className="sub-section-title">Nous Pouvons Vous Aider</h2> 

                    <p className="value-txt">Vous cherchez peut-etre à mettre sur pied une nouvelle solution numérique pour vous rapprocher de vos clients,
                        ou a construire une technologie pour soutenir votre entreprise? Nous sommes là pour vous aider. Du developement d'une application mobile
                        à la refonte.
                    </p>

                    <div className="card-items">

                        <div className="card-item">

                            <div className="card-img"></div>

                            <span className="card-title">Développement D'Appli Mobile</span>

                            <span className="card-text">Une application web intuitive et conviviale peut aider votre équipe à devenir plus éfficace, stimuler l'engagement
                            des utilisateurs, vous différencier de la concurrence, et bien plus encore...  </span>

                            <span className="plus">En savoir plus</span>

                        </div>

                        <div className="card-item"></div>

                        <div className="card-item"></div>

                        <div className="card-item"></div>

                        <div className="card-item"></div>

                        <div className="card-item"></div>



                    </div>

               </section>

            <Contact/>
        
        
        
        
        
        
        </>





    )











}