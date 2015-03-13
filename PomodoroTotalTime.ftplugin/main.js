define(function(require, exports, module) {
    var Extensions = require('ft/core/extensions').Extensions;

    Extensions.addInit(function (editor) {
      editor.addKeyMap({
            'Cmd-H' : function (editor) {
                var tree         = editor.tree();
                var pomodoros    = 0;
                var totalMinutes = 0;
                var totalHours   = 0;

                tree.nodes().forEach(function(node) {
                  if (!editor.nodeIsHiddenInFold(node)) {
                    tags = node.tags();

                    if (tags.p != undefined) {
                      pomodoros = pomodoros + tags.p.match(/x/g).length;
                    }

                    if (tags.pt != undefined) {
                      var minutesArray = tags.pt.split(',');

                      for(var i = 0, length = minutesArray.length; i < length; i++){
                          totalMinutes += parseInt(minutesArray[i]);
                      }
                    }

                  }
                });

                if (totalMinutes > 0) {
                  totalHours = totalMinutes / 60;
                }

                editor.replaceSelection('pomodoros: ' + pomodoros + '. hours: ' + totalHours);
            }
        });
    });
});
