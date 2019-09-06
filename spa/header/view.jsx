var Header = React.createClass({
    render() {
        return (
            <header class="toolbarRisepic">
                <ul>
                    <li class="Searchimput" data-children-count="1">
                        <input type="search" />
                        <a class="Searchbtn"><img src="https://github.com/Risepic/Alpha/raw/master/img/Search_Icon.png"/></a>
                    </li>
                    <li class="Brandtoolbar">
                        <a class="brandsuntoolbar" href="./"><img src="https://github.com/Risepic/Alpha/raw/master/img/brand.png" /></a>
                    </li>
                    <li class="loggedtoolbar IMGPLAYER"><img class="icon_circle" src="./img/DEAL.png" /></li>
                </ul>
            </header>
        );
    }
});