import fetcher from "../../Helpers/fetcher";

async function getJadwals({ query, page = 0 }, params) {
    try {
        const urlParams = new URLSearchParams({
            page: page,
            query: query,
        });

        return await fetcher(`jadwal?${urlParams.toString()}`, params);
    } catch (error) {
        return error;
    }
}

async function getJadwalCategory(params) {
    try {
        return await fetcher(`jadwal/category`, params);
    } catch (error) {
        return error;
    }
}

async function getJadwal({ id }, params) {
    try {
        return await fetcher(`jadwal/${id}`, {
            ...params,
        });
    } catch (error) {
        return error;
    }
}

async function postJadwal(data, params) {
    try {
        return fetcher(`jadwal`, {
            method: "POST",
            body: data,
            ...params,
        });
    } catch (error) {
        return error;
    }
}

async function putJadwal({ id, data }, params) {
    try {
        return fetcher(`jadwal/${id}`, {
            method: "POST",
            body: data,
            ...params,
        });
    } catch (error) {
        return error;
    }
}

async function deleteJadwal({ id }, params) {
    try {
        return fetcher(`jadwal/${id}`, {
            method: "DELETE",
            ...params,
        });
    } catch (error) {
        return error;
    }
}

export {
    getJadwals,
    getJadwal,
    postJadwal,
    putJadwal,
    getJadwalCategory,
    deleteJadwal,
};
