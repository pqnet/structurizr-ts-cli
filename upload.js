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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadWorkspaceFromFile = void 0;
var structurizr_typescript_1 = require("structurizr-typescript");
var fs_1 = require("fs");
var yaml_1 = __importDefault(require("yaml"));
var mkClient = function (api) {
    if (api.custom_url !== undefined && api.custom_url.length > 0) {
        return new structurizr_typescript_1.StructurizrClient(api.api_key, api.api_secret, api.custom_url);
    }
    return new structurizr_typescript_1.StructurizrClient(api.api_key, api.api_secret);
};
var pushWorkspace = function (api, workspace) {
    var client = mkClient(api);
    return client.putWorkspace(api.workspace_id, workspace);
};
function uploadWorkspaceFromFile(cfgFileName, yamlFileName) {
    return __awaiter(this, void 0, void 0, function () {
        var workspace, yamlFile, cfgFile, workspaceDTO, api, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    workspace = new structurizr_typescript_1.Workspace("name", "description");
                    yamlFile = fs_1.readFileSync(yamlFileName, { encoding: 'utf-8' });
                    cfgFile = fs_1.readFileSync(cfgFileName, { encoding: 'utf-8' });
                    workspaceDTO = yaml_1.default.parse(yamlFile);
                    api = JSON.parse(cfgFile);
                    workspace.fromDto(workspaceDTO);
                    return [4 /*yield*/, pushWorkspace(api, workspace)];
                case 1:
                    response = _a.sent();
                    if (response) {
                        console.log(response);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.uploadWorkspaceFromFile = uploadWorkspaceFromFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXBsb2FkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFxRTtBQUNyRSx5QkFBa0M7QUFJbEMsOENBQXdCO0FBRXhCLElBQU0sUUFBUSxHQUFHLFVBQUMsR0FBYztJQUM5QixJQUFJLEdBQUcsQ0FBQyxVQUFVLEtBQUssU0FBUyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUM3RCxPQUFPLElBQUksMENBQWlCLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUMzRTtJQUNELE9BQU8sSUFBSSwwQ0FBaUIsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM1RCxDQUFDLENBQUE7QUFFRCxJQUFNLGFBQWEsR0FBRyxVQUFDLEdBQWMsRUFBRSxTQUFvQjtJQUN6RCxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDMUQsQ0FBQyxDQUFBO0FBRUQsU0FBc0IsdUJBQXVCLENBQUMsV0FBbUIsRUFBRSxZQUFvQjs7Ozs7O29CQUMvRSxTQUFTLEdBQUcsSUFBSSxrQ0FBUyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztvQkFDakQsUUFBUSxHQUFHLGlCQUFZLENBQUMsWUFBWSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7b0JBQzdELE9BQU8sR0FBRyxpQkFBWSxDQUFDLFdBQVcsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO29CQUMzRCxZQUFZLEdBQUcsY0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDcEMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFjLENBQUM7b0JBQzdDLFNBQVMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ2YscUJBQU0sYUFBYSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsRUFBQTs7b0JBQTlDLFFBQVEsR0FBRyxTQUFtQztvQkFDcEQsSUFBSSxRQUFRLEVBQUU7d0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDdkI7Ozs7O0NBQ0Y7QUFYRCwwREFXQyJ9