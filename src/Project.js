import "./Project.css"
import Recess from "./Recess.png"
import Safeflight from "./Safeflight.png"
function Project() {
    return (
        <div className='projects'>
            <a href="https://pacific-inlet-95494.herokuapp.com/">
                <img alt="Recess" className='img' src={Recess} width="300px" height="200px"></img>
            </a>
            <a href="https://n8dogg59.github.io/teamTravel/">
                <img alt="Safeflight" className='img2' src={Safeflight} width="300px" height="200px"></img>
            </a>
        </div>
    )
}

export default Project;