import { isSameArray } from "./Array";

const isSameObject = (obj1, obj2) => {
    if (obj1 instanceof Object && obj2 instanceof Object) {
        if (
            Object.keys(obj1).length === Object.keys(obj2).length &&
            Object.keys(obj1).every((key) => {
                if (
                    obj1[key] instanceof Object &&
                    obj2[key] instanceof Object
                ) {
                    return isSameObject(obj1[key], obj2[key]);
                } else if (
                    obj1[key] instanceof Array &&
                    obj2[key] instanceof Array
                ) {
                    return isSameArray(obj1[key], obj2[key]);
                }
            })
        ) {
            return true;
        }
    }
    return false;
};

export { isSameObject };
