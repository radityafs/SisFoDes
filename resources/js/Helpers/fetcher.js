export default async function fetcher(url, params) {
    try {
        return await fetch(url, {
            ...params,
        }).then((res) => res.json());
    } catch (error) {
        return error;
    }
}
