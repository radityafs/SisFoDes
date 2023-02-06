import fetcher from "../../Helpers/fetcher";

const getUsers = async ({ query, page = 0 }, params) => {
    try {
        const urlParams = new URLSearchParams({
            page: page,
            query: query,
        });
        return await fetcher(`users?${urlParams.toString()}`, params);
    } catch (error) {
        return error;
    }
};

const getUser = (id, params) => {
    try {
        return fetcher(`users/${id}`, {
            method: "GET",
            ...params,
        });
    } catch (error) {
        return error;
    }
};

const putUserStatus = ({ id }, params) => {
    try {
        return fetcher(`user/${id}`, {
            method: "PUT",
            ...params,
        });
    } catch (error) {
        return error;
    }
};

export { getUsers, getUser, putUserStatus };
