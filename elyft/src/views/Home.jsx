import { Header } from "../widgets/Header";
import chartSimpleSolid from "../assets/icons/chartSimpleSolid.svg";
import yougCoupleWork from "../assets/img/yougCoupleWork.jpeg";
import pexelsEunice from "../assets/img/pexelsEunice.jpg";
import teamWork from "../assets/img/teamWork.jpeg";
import pexelsDarlene from "../assets/img/pexelsDarlene.jpg";
import chevronRight from "../assets/icons/chevronRight.svg";
import usersSolid from "../assets/icons/usersSolid.svg";
import trophySolid from "../assets/icons/trophySolid.svg"
import { Contact } from "../widgets/Contact";
import {useNavigate} from "react-router-dom";
import homeHeader from "../assets/img/homeHeader.jpeg";







export function Home() {


    let navigate = useNavigate();

    const handleServices = ()=>{

      return  navigate('/services');

    }

    return(

        <div className="bloc-page">
        
        
        <Header pageTitle="Construire des Technologies qui Transforment Votre Business" srcImg={homeHeader} active="active" />

        <section className="body-content">

            <h2>Nous aidons nos clients</h2>

            <p>Afin d'aider nos clients à atteindre leurs objectifs marketing et commerciaux, nous mettons à leur disposition des solutions sur mesure.</p>

            <div className="help-customer-content">

                <div className="help-customer-items">

                    <div className="help-customer">

                        <img src={chartSimpleSolid} alt="icon-illustrator" className="icon-illustrator"/>
                        <span>Optimiser les processus métiers</span>

                    </div>

                    <div className="help-customer">

                        <img src={usersSolid} alt="icon-illustrator" className="icon-illustrator"/>
                        <span>Augmenter la rétention client</span>

                    </div>

                    <div className="help-customer">

                        <img src={trophySolid} alt="icon-illustrator" className="icon-illustrator"/>
                        <span>Rester compétitif et innovant</span>

                    </div>

                </div>

                <div className="proximity-customer">

                    <img src={yougCoupleWork} alt="proximity-customer" />
                    <span>Créez plus de proximité avec vos clients, optimiser vos processus</span>
                    <div className="filtre"></div>

                </div>

            </div>

            <>
            
                <span className="section-title">Nos valeurs</span>
                <h2 className="sub-section-title">Ce qui nous animes</h2>   
                <p className="value-txt">Chez Elyft, l'équipe est unie autour de valeurs auxquelles chacun s'identifie</p>         
            
                <div className="values-items">

                    <div className="value-bx">

                        <img src={chartSimpleSolid} alt="equité" className="value-item" />
                        <span>Equité</span>

                    </div>

                    <div className="value-bx">

                         <img src={chartSimpleSolid} alt="respect" className="value-item" />
                         <span>Respect</span>

                    </div>

                    <div className="value-bx">

                         <img src={chartSimpleSolid} alt="excellence" className="value-item" />
                         <span>Excellence</span>

                    </div>


                </div>
            </>

            <>
            
                <span className="section-title" id="services">Nos services</span>
                <h2 className="sub-section-title">Ce que nous proposons</h2> 
                <p className="description">Notre équipe est spécialiste de produit numérique et de développeurs, travaille avec vous pour transformer votre entreprise.Nous utilisons
                    les bonnes méthodes, les connaissance adéquates et les bons outils et les bonnes
                    technologies pour procurer les meilleurs expériences possibles.</p>  
            
            <div className="values-items">

                    <div className="service">

                        <img src={chartSimpleSolid} alt="application mobile" className="value-item" />
                        <span>Application Mobile</span>

                    </div>

                    <div className="service">

                         <img src={chartSimpleSolid} alt="application web" className="value-item" />
                         <span>Application web</span>

                    </div>

                    <div className="service">

                         <img src={chartSimpleSolid} alt="excellence" className="value-item" />
                         <span>Logiciel Personnalisées</span>

                    </div>

                     <div className="service">

                         <img src={chartSimpleSolid} alt="excellence" className="value-item" />
                         <span>UI/UX Design</span>

                    </div>

                        
                </div>
                
                <div className="slider-indicator">

                    <span>...</span>

                    <button onClick={handleServices} className="services">Voir les services</button>

                </div>
            
            </>

            <div className="team-pd">

                <div className="team-work">

                    <div>

                        <img src={pexelsEunice} alt="" className="img-team-bg"/>
                        <img src={teamWork}  alt="" className="img-team-bg" id="img-team"/>

                    </div>

                    <div className="description-work">

                        <span>UNE EQUIPE AGILE</span>
                        <span className="description-title"><br/>Collaborations Efficaces</span>
                        <p className="description-text">Chez Elyft, chaque produit numérique et projet doit etre continuellement amélioré afin de satisfaire les
                        cleints et les utilisateurs.Nous sommes les partenaires d'innovation que vous avez longtemps cherché.
                        </p>
                        <p className="work-heart">Le coeur  de notre message étant la proximité, nous travaillons en collaboration étroite
                        avec chaque client , pour un rendu final satisfaisant.
                        </p>

                    </div>

                </div>

            </div>

            <span className="section-title">ECOUTEZ NOS CLIENTS</span>
            <h2 className="sub-section-title">ils nous font confiance</h2> 

            <div  >
                
                <div className="customer-slider">

                    <div className="slider-content">

                    <div></div>

                    <div>

                            <img src={pexelsDarlene} alt="" className="img-customer"/>

                    </div>

                    <div className="next-slider">

                        <img src={chevronRight} alt="" className="chevron-right"/>

                    </div>
                    
                    
                    
                    </div>                                    
                    
                
                </div>  

                <div>
                    
                    <div className="customer-avis">
                        
                        <p className="customer-comment">Une équipe formidable! Nous n'avions encore jamais travaillé avec une équipe 
                        au professionalisme aussi élevé. Ils nous ont guidé tout au long du processus
                        et ont traité notre projet comme une affaire personnelle. ils ne sont
                        pas contenté de créer ce qu'on leur a demandé, mais de faire des etudes approfondies sur des
                        élements a revoir pour en tirer le meilleur</p>   

                        <span className="indicator-slide">...</span>           
                        
                    
                    </div>       
                
                
                </div>                        
            
            </div> 
        
        </section> 

        <Contact/>

        
        
        
        
        
    </div>



    )





}