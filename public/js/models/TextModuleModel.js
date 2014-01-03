CourseEditor.service('TextModuleModel', function() {
  this.addTextModule = function(chapterId, moduleData, editor) {
    var current_chapter = JSON.parse(window.localStorage.getItem(chapterId));

    if (!current_chapter) {
      current_chapter = []
    }

    var textModule = {
      id: Math.random().toString(36).substring(7),
      moduletype: 'text',
      title: moduleData.title,
      text: editor
    };

    current_chapter.push(textModule);

    window.localStorage.setItem(chapterId, JSON.stringify(current_chapter));

  }
});