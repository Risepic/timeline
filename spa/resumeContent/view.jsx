var ResumeContent = React.createClass({
    render() {
        return (
            <figure className="i-box-xxl-2">
                <a className="resumeplay-l">RESUME</a>
                <img className="BLURHOVER" src={this.props.content} />
            </figure>
        );
    }
});