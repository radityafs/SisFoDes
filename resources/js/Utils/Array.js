import { isSameObject } from "./Object";

const isSameArray = (arr1, arr2) => {
    if (arr1 instanceof Array && arr2 instanceof Array) {
        if (
            arr1.length === arr2.length &&
            arr1.every((item, index) => {
                if (item instanceof Object && arr2[index] instanceof Object) {
                    return isSameObject(item, arr2[index]);
                } else if (
                    item instanceof Array &&
                    arr2[index] instanceof Array
                ) {
                    return isSameArray(item, arr2[index]);
                } else {
                    return item === arr2[index];
                }
            })
        ) {
            return true;
        }
    }
    return false;
};

export { isSameArray };
