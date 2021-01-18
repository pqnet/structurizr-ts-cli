import { createNode, Document } from 'yaml';
import { YAMLMap, YAMLSeq } from 'yaml/types';

const sortItems = (node: unknown, compareFn?: (a: unknown, b: unknown) => number) => {
  const sortRec = (node: unknown) => {

    if (node instanceof YAMLMap) {
      // sort element inside a node by key
      node.items.sort(({ key: a }, { key: b }) => a > b ? 1 : b > a ? -1 : 0);
      node.items.forEach(({ value }) => sortRec(value));
    } else if (node instanceof YAMLSeq) {
      // sort elements inside an array by the given compare function
      if (compareFn !== undefined && node.items.length > 1) {
        node.items.sort(compareFn);
      }
      node.items.forEach(sortRec)
    }
  }
  sortRec(node);
}

export const stringifySorted = (o: unknown, compareFn?: (a: unknown, b: unknown) => number) => {
  const doc = new Document();
  doc.contents = createNode(o, false);
  sortItems(doc.contents, compareFn);
  return doc.toString();
}

const getIdOrTag = (o: unknown): string | undefined => {
  if (o instanceof YAMLMap) {
    const r = o.get('id');
    if (typeof r === 'string') {
      return r;
    }
    const r2 = o.get('tag');
    if (typeof r2 === 'string') {
      return r2;
    }
  }
  return undefined;
}

export const stringifySortedById = (o: unknown): string => stringifySorted(o, (a, b) => {
  const aid = getIdOrTag(a);
  const bid = getIdOrTag(b);
  if (aid !== undefined && bid !== undefined) {
    return Number(aid) - Number(bid);
  } else {
    return 0;
  }
})