var TimelineController = function(view) {
    var context = this;
    context.view = view;

    context.loadResumeContents = function loadResumeContents() {
        return context.loadJSON('data/resumeContents.json');
    }

    context.loadSuggestionGroups = function loadSuggestionGroups() {
        return context.loadJSON('data/suggestionGroups.json');
    }

    context.loadJSON = async function loadJSON(path) {
        return JSON.parse(await Utils.AJAXRequest(path));
    }
};