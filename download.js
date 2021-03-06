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
exports.downloadWorkspaceToFile = void 0;
var structurizr_typescript_1 = require("structurizr-typescript");
var fs_1 = require("fs");
var stringify_1 = require("./stringify");
var pullWorkspace = function (api) {
    var client = new structurizr_typescript_1.StructurizrClient(api.api_key, api.api_secret);
    return client.getWorkspace(api.workspace_id);
};
function downloadWorkspaceToFile(cfgFileName, yamlFileName) {
    return __awaiter(this, void 0, void 0, function () {
        var cfgFile, api, workspace, workspaceDTO, yamlString;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cfgFile = fs_1.readFileSync(cfgFileName, { encoding: 'utf-8' });
                    api = JSON.parse(cfgFile);
                    return [4 /*yield*/, pullWorkspace(api)];
                case 1:
                    workspace = _a.sent();
                    workspaceDTO = workspace.toDto();
                    yamlString = stringify_1.stringifySortedById(workspaceDTO);
                    fs_1.writeFileSync(yamlFileName, yamlString, { encoding: 'utf-8' });
                    return [2 /*return*/];
            }
        });
    });
}
exports.downloadWorkspaceToFile = downloadWorkspaceToFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bmxvYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkb3dubG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBcUU7QUFDckUseUJBQWlEO0FBSWpELHlDQUFrRDtBQUVsRCxJQUFNLGFBQWEsR0FBRyxVQUFDLEdBQWM7SUFFbkMsSUFBTSxNQUFNLEdBQUcsSUFBSSwwQ0FBaUIsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsRSxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FBQTtBQUVELFNBQXNCLHVCQUF1QixDQUFDLFdBQW1CLEVBQUUsWUFBb0I7Ozs7OztvQkFDL0UsT0FBTyxHQUFHLGlCQUFZLENBQUMsV0FBVyxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7b0JBQzNELEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBYyxDQUFDO29CQUMzQixxQkFBTSxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQUE7O29CQUFwQyxTQUFTLEdBQUcsU0FBd0I7b0JBQ3BDLFlBQVksR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ2pDLFVBQVUsR0FBRywrQkFBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDckQsa0JBQWEsQ0FBQyxZQUFZLEVBQUUsVUFBVSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7Ozs7O0NBQ2hFO0FBUEQsMERBT0MifQ==