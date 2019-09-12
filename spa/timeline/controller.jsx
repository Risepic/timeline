var TimelineController = function(view) {
    var context = this;
    context.view = view;
    
    context.loadResumeContents = async function loadResumeContents() {
        return JSON.parse(await Utils.AJAXRequest('data/resumeContents.json'));
    }
};