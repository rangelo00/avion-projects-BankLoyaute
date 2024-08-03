import './NavBar.css'

function navBar() {
    return (
        <div className="NavBar">
            <input type="text" placeholder="Search"></input>
            <button className="btn">Search</button>
            <ul>Home</ul>
            <ul>Transactions</ul>
            <ul>Bank</ul>
        </div>
    )
}

export default navBar;