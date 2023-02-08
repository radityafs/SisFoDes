export const jsonToFormData = (json) => {
    const formData = new FormData();

    for (const key in json) {
        if (json[key] instanceof Array) {
            json[key].forEach((value, index) => {
                formData.append(`${key}[${index}]`, value);
            });
        } else if (json[key] instanceof Object) {
            for (const subKey in json[key]) {
                formData.append(`${key}[${subKey}]`, json[key][subKey]);
            }
        } else if (json[key] instanceof Boolean) {
            formData.append(key, json[key] ? 1 : 0);
        } else {
            formData.append(key, json[key]);
        }
    }

    return formData;
};
