
import "./Navigation.css"

function Navigation(props) {
    return (
        <nav className='Navigation'>
            <ul>
                <li className="nav-item" onClick={() => { console.log('clicked'); props.setCurrentlyShown('About') }}>About Me</li>
                <li className="nav-item" onClick={() => props.setCurrentlyShown('Portfolio')}>Portfolio</li>
                <li className="nav-item" onClick={() => props.setCurrentlyShown('Contact')}>Contact</li>
                <li className="nav-item" onClick={() => props.setCurrentlyShown('Resume')}>Resume</li>
            </ul>
        </nav>
    );
}

export default Navigation;