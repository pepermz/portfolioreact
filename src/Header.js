import "./Header.css"

import Navigation from './Navigation';

function Header(props) {
    console.log(props.setCurrentlyShown)
    return (
        <div className='header'>
            <h1>Jose Ramirez</h1>
            <Navigation setCurrentlyShown={props.setCurrentlyShown} />
        </div>
    );
}

export default Header;