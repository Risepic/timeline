var Timeline = React.createClass({
    requiredModules: [
        'spa/resumeContent'
    ],
    componentDidMount() {
        var _this = this;
        _this.controller.loadResumeContents().then(resumeContents => _this.setState({resumeContents}));
    },
    render() {
        return (
            <div className="thetimelinepage">
                <div className="c-resume-timeline">
                    <div class="resumelastcontent">
                        <figure class="i-box-xxl">
                            <a class="resumeplay-l">RESUME</a>
                            <img class="BLURHOVER" src="assets/images/crash-course-in-security-best-a0f8f6f7-18e2-4d46-8470-8516102013fe-1592709136-180926144831-thumbnail-4.jpg" />
                        </figure>
                        <div class="resumeothercontents">
                            {this.state && this.state.resumeContents && this.state.resumeContents.map((it, index) => 
                                <ResumeContent key={index + ''} content={it}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});