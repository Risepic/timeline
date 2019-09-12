var ResumeContent = React.createClass({
    render() {
        return (
            <figure class="i-box-xxl-2">
                <a class="resumeplay-l">RESUME</a>
                <img class="BLURHOVER" src={this.props.content} />
            </figure>
        );
    }
});