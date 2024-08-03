import './NavBar.css'

function navBar() {
    return (
        <div className="NavBar">
            <input type="text" placeholder="Search"></input>
            <button className="btn">Search</button>
        </div>
    )
}

export default navBar;