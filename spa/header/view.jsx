var Header = React.createClass({
    render() {
        return (
            <header className="toolbarRisepic">
                <ul>
                    <li className="search-input" data-children-count="1">
                        <input type="search" />
                        <a className="Searchbtn"><img src="assets/images/Search_Icon.png"/></a>
                    </li>
                    <li className="Brandtoolbar">
                        <a className="brandsuntoolbar" href="./"><img src="assets/images/brand.png" /></a>
                    </li>
                    <li className="loggedtoolbar IMGPLAYER"><img className="icon_circle" src="./assets/images/DEAL.png" /></li>
                </ul>
            </header>
        );
    }
});