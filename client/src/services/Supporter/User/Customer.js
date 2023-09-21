import { axios } from "../../HttpClient/HttpClient";

async function getById(userId) {
    let { data, status, ok } = await axios({
        url: `/api/user/${userId}`,
        method: "get",
    });
    return { data, isSuccess: ok && status === 200 };
}

export default { getById };