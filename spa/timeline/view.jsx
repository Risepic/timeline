var Timeline = React.createClass({
    requiredModules: [
        'spa/resumeContent',
        'spa/suggestionGroup'
    ],
    componentDidMount() {
        var _this = this;
        _this.controller.loadResumeContents().then(resumeContents => _this.setState({ resumeContents })).then(_this.controller.loadSuggestionGroups).then(suggestionGroups => _this.setState({ suggestionGroups }));
    },
    render() {
        return (
            <div className="thetimelinepage">
                <div className="c-resume-timeline">
                    {this.state && this.state.resumeContents && <div className="resumelastcontent">
                        <figure className="i-box-xxl">
                            <a className="resumeplay-l">RESUME</a>
                            <img className="BLURHOVER" src="assets/images/crash-course-in-security-best-a0f8f6f7-18e2-4d46-8470-8516102013fe-1592709136-180926144831-thumbnail-4.jpg" />
                        </figure>
                        <div className="resumeothercontents">
                            {this.state.resumeContents.map((it, index) =>
                                <ResumeContent key={index + ''} content={it} />
                            )}
                        </div>
                    </div>}
                    {this.state && this.state.suggestionGroups && this.state.suggestionGroups.map((it, index) =>
                        <SuggestionGroup key={index + ''} content={it} />
                    )}
                </div>
            </div>
        );
    }
});