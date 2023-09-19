import homeHeader from "../assets/img/homeHeader.jpeg"
import LogoElyft from "../assets/logo/LogoElyft.jpg"
import "../styles/home.css"







export function Header() {




    return(


        <header className="header-content" id="bloc-page">

            <img src={homeHeader} className="home-header" alt="home-header"/>

            <div className="nav-bar-content">

                {/* <img src={LogoElyft} alt="logo-elyft" className="logo"/> */}
                <div className="logo-text">LOGO</div>

                <nav>

                    <ul className="nav-bar">

                        <li>SERVICES</li>
                        <li>TECHNOLOGIES</li>
                        <li>A PROPOS</li>
                        <li>BLOG</li>

                    </ul>

                </nav>

            </div>

            <h1 className="home-title">Construire des Technologies qui Transforment Votre Business</h1>
            
            <button className="btn-contact">Nous contacter</button>

            <div className="filtre"></div>

        </header>


    )







}