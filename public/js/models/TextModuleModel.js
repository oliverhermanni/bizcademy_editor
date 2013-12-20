CourseEditor.service('TextModuleModel', function() {
  this.addTextModule = function(chapterId, moduleData) {
    var current_chapter = window.localStorage.getItem(chapterId);

    if (!current_chapter) {
      current_chapter = {
        modules: []
      }
    }

    var textModule = {
      id: Math.random().toString(36).substring(7),
      title: moduleData.title,
      text: moduleData.text
    }

    current_chapter.modules.push(textModule);

    window.localStorage.setItem(chapterId, JSON.stringify(current_chapter));

  }
});