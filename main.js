#!/usr/bin/node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var upload_1 = require("./upload");
var download_1 = require("./download");
var process_1 = require("process");
var main = function () {
    var argv = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        argv[_i] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var cfgFileName, yamlFileName, command;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cfgFileName = argv[2];
                    yamlFileName = argv[3];
                    command = argv[4];
                    if (!(argv.length === 5 && "UPLOAD".startsWith(command.toUpperCase()))) return [3 /*break*/, 2];
                    return [4 /*yield*/, upload_1.uploadWorkspaceFromFile(cfgFileName, yamlFileName)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 2:
                    if (!(argv.length === 5 && "DOWNLOAD".startsWith(command.toUpperCase()))) return [3 /*break*/, 4];
                    return [4 /*yield*/, download_1.downloadWorkspaceToFile(cfgFileName, yamlFileName)];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    console.log(process_1.argv0);
                    console.log("Usage: " + argv[0] + " " + argv[1] + " <cfgFileName> <yamlFileName> <COMMAND>");
                    console.log("where <COMMAND> is either UPLOAD or DOWNLOAD");
                    process.exit(1);
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    });
};
main.apply(void 0, process.argv).catch(function (e) { return console.error(e); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbUNBQW1EO0FBQ25ELHVDQUFxRDtBQUNyRCxtQ0FBZ0M7QUFFaEMsSUFBTSxJQUFJLEdBQUc7SUFBTyxjQUFpQjtTQUFqQixVQUFpQixFQUFqQixxQkFBaUIsRUFBakIsSUFBaUI7UUFBakIseUJBQWlCOzs7Ozs7O29CQUM3QixXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN0QixZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN2QixPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUVwQixDQUFBLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUEsRUFBL0Qsd0JBQStEO29CQUNqRSxxQkFBTSxnQ0FBdUIsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLEVBQUE7O29CQUF4RCxTQUF3RCxDQUFDOzs7eUJBQ2hELENBQUEsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQSxFQUFqRSx3QkFBaUU7b0JBQzFFLHFCQUFNLGtDQUF1QixDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsRUFBQTs7b0JBQXhELFNBQXdELENBQUM7OztvQkFFekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFLLENBQUMsQ0FBQztvQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFVLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLDRDQUF5QyxDQUFDLENBQUM7b0JBQ25GLE9BQU8sQ0FBQyxHQUFHLENBQUMsOENBQThDLENBQUMsQ0FBQztvQkFDNUQsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7O0NBRW5CLENBQUE7QUFFRCxJQUFJLGVBQUksT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUMifQ==