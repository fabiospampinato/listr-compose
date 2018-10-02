"use strict";
/* IMPORT */
Object.defineProperty(exports, "__esModule", { value: true });
var Listr = require("listr");
/* COMPOSE */
function compose() {
    var listrs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        listrs[_i] = arguments[_i];
    }
    var tasks = [];
    listrs.forEach(function (listr) {
        listr._tasks.forEach(function (_task) {
            var title = _task.title, task = _task.task, skip = _task.skip, enabled = _task.enabled;
            tasks.push({ title: title, task: task, skip: skip, enabled: enabled });
        });
    });
    return new Listr(tasks);
}
/* EXPORT */
exports.default = compose;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVk7O0FBRVosNkJBQStCO0FBRS9CLGFBQWE7QUFFYixTQUFTLE9BQU87SUFBRyxnQkFBUztTQUFULFVBQVMsRUFBVCxxQkFBUyxFQUFULElBQVM7UUFBVCwyQkFBUzs7SUFFMUIsSUFBTSxLQUFLLEdBQVUsRUFBRSxDQUFDO0lBRXhCLE1BQU0sQ0FBQyxPQUFPLENBQUcsVUFBQSxLQUFLO1FBRXBCLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFHLFVBQUEsS0FBSztZQUVuQixJQUFBLG1CQUFLLEVBQUUsaUJBQUksRUFBRSxpQkFBSSxFQUFFLHVCQUFPLENBQVU7WUFFM0MsS0FBSyxDQUFDLElBQUksQ0FBRSxFQUFFLEtBQUssT0FBQSxFQUFFLElBQUksTUFBQSxFQUFFLElBQUksTUFBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsQ0FBQztRQUU5QyxDQUFDLENBQUMsQ0FBQztJQUVMLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxJQUFJLEtBQUssQ0FBRyxLQUFLLENBQUUsQ0FBQztBQUU3QixDQUFDO0FBRUQsWUFBWTtBQUVaLGtCQUFlLE9BQU8sQ0FBQyJ9