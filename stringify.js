"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifySortedById = exports.stringifySorted = void 0;
var yaml_1 = require("yaml");
var types_1 = require("yaml/types");
var sortItems = function (node, compareFn) {
    var sortRec = function (node) {
        if (node instanceof types_1.YAMLMap) {
            // sort element inside a node by key
            node.items.sort(function (_a, _b) {
                var a = _a.key;
                var b = _b.key;
                return a > b ? 1 : b > a ? -1 : 0;
            });
            node.items.forEach(function (_a) {
                var value = _a.value;
                return sortRec(value);
            });
        }
        else if (node instanceof types_1.YAMLSeq) {
            // sort elements inside an array by the given compare function
            if (compareFn !== undefined && node.items.length > 1) {
                node.items.sort(compareFn);
            }
            node.items.forEach(sortRec);
        }
    };
    sortRec(node);
};
var stringifySorted = function (o, compareFn) {
    var doc = new yaml_1.Document();
    doc.contents = yaml_1.createNode(o, false);
    sortItems(doc.contents, compareFn);
    return doc.toString();
};
exports.stringifySorted = stringifySorted;
var getIdOrTag = function (o) {
    if (o instanceof types_1.YAMLMap) {
        var r = o.get('id');
        if (typeof r === 'string') {
            return r;
        }
        var r2 = o.get('tag');
        if (typeof r2 === 'string') {
            return r2;
        }
    }
    return undefined;
};
var stringifySortedById = function (o) { return exports.stringifySorted(o, function (a, b) {
    var aid = getIdOrTag(a);
    var bid = getIdOrTag(b);
    if (aid !== undefined && bid !== undefined) {
        return Number(aid) - Number(bid);
    }
    else {
        return 0;
    }
}); };
exports.stringifySortedById = stringifySortedById;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5naWZ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RyaW5naWZ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZCQUE0QztBQUM1QyxvQ0FBOEM7QUFFOUMsSUFBTSxTQUFTLEdBQUcsVUFBQyxJQUFhLEVBQUUsU0FBOEM7SUFDOUUsSUFBTSxPQUFPLEdBQUcsVUFBQyxJQUFhO1FBRTVCLElBQUksSUFBSSxZQUFZLGVBQU8sRUFBRTtZQUMzQixvQ0FBb0M7WUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQyxFQUFVLEVBQUUsRUFBVTtvQkFBZixDQUFDLFNBQUE7b0JBQVcsQ0FBQyxTQUFBO2dCQUFPLE9BQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUExQixDQUEwQixDQUFDLENBQUM7WUFDeEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFTO29CQUFQLEtBQUssV0FBQTtnQkFBTyxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFBZCxDQUFjLENBQUMsQ0FBQztTQUNuRDthQUFNLElBQUksSUFBSSxZQUFZLGVBQU8sRUFBRTtZQUNsQyw4REFBOEQ7WUFDOUQsSUFBSSxTQUFTLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDcEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDNUI7WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUM1QjtJQUNILENBQUMsQ0FBQTtJQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNoQixDQUFDLENBQUE7QUFFTSxJQUFNLGVBQWUsR0FBRyxVQUFDLENBQVUsRUFBRSxTQUE4QztJQUN4RixJQUFNLEdBQUcsR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDO0lBQzNCLEdBQUcsQ0FBQyxRQUFRLEdBQUcsaUJBQVUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDbkMsT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDeEIsQ0FBQyxDQUFBO0FBTFksUUFBQSxlQUFlLG1CQUszQjtBQUVELElBQU0sVUFBVSxHQUFHLFVBQUMsQ0FBVTtJQUM1QixJQUFJLENBQUMsWUFBWSxlQUFPLEVBQUU7UUFDeEIsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRTtZQUN6QixPQUFPLENBQUMsQ0FBQztTQUNWO1FBQ0QsSUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixJQUFJLE9BQU8sRUFBRSxLQUFLLFFBQVEsRUFBRTtZQUMxQixPQUFPLEVBQUUsQ0FBQztTQUNYO0tBQ0Y7SUFDRCxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDLENBQUE7QUFFTSxJQUFNLG1CQUFtQixHQUFHLFVBQUMsQ0FBVSxJQUFhLE9BQUEsdUJBQWUsQ0FBQyxDQUFDLEVBQUUsVUFBQyxDQUFDLEVBQUUsQ0FBQztJQUNqRixJQUFNLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksR0FBRyxLQUFLLFNBQVMsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1FBQzFDLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNsQztTQUFNO1FBQ0wsT0FBTyxDQUFDLENBQUM7S0FDVjtBQUNILENBQUMsQ0FBQyxFQVJ5RCxDQVF6RCxDQUFBO0FBUlcsUUFBQSxtQkFBbUIsdUJBUTlCIn0=