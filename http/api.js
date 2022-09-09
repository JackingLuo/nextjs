import request from "./request";


//代理是为了解决跨域,而区分环境是为了不同环境的数据

const baseUrl = "http://localhost:3000";

export const GET_TEST_INFO = (data) => {
    return request.get(`${baseUrl}/api/getLoginInfo`, data);
}