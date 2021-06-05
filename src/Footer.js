import "./Footer.css"
import Linkedin from "./linkedin.png"
import Facebook from "./facebook.png"
import Github from "./github.png"

function Footer() {
    return (
        <div className='footer'>
            <center>Jose Ramirez</center>
            <center>2021</center>

            <p className='container'>
                <center>
                    <a href="https://www.linkedin.com/in/jose-ramirez-1b9ba8169/">
                        <img alt="Linkedin" src={Linkedin} width="30" height="30"></img>
                    </a>
                    <a href="https://www.facebook.com/pepepeperam">
                        <img alt="Facebook" src={Facebook} width="30" height="30"></img>
                    </a>
                    <a href="https://www.github.com/pepermz">
                        <img alt="Github" src={Github} width="30" height="30"></img>
                    </a>
                </center>

            </p>
        </div>
    )
}

export default Footer;