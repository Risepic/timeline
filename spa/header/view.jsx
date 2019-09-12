var Header = React.createClass({
    render() {
        return (
            <header class="toolbarRisepic">
                <ul>
                    <li class="Searchimput" data-children-count="1">
                        <input type="search" />
                        <a class="Searchbtn"><img src="assets/images/Search_Icon.png"/></a>
                    </li>
                    <li class="Brandtoolbar">
                        <a class="brandsuntoolbar" href="./"><img src="assets/images/brand.png" /></a>
                    </li>
                    <li class="loggedtoolbar IMGPLAYER"><img class="icon_circle" src="./assets/images/DEAL.png" /></li>
                </ul>
            </header>
        );
    }
});