var SuggestionGroup = React.createClass({
    render() {
        var content = this.props.content;
        return (
            <div className="c-suggestion-otherfrom">
                <h2>{content.title} {content.icon && <i className={"em em-" + content.icon}></i>}</h2>
                <div className="timeline timeline-XL">
                    {content && content.items && content.items.map(suggestion =>
                        <a href="javascript:;" className="i-box-m">
                            <span className="typeofcontent"><i className={"em em-" + suggestion.icon}></i></span>
                            <img className="BLURHOVER" src={suggestion.image}/>
                        </a>
                    )}
                </div>
            </div>
        );
    }
});