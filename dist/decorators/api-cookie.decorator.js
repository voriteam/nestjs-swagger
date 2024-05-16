"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiCookieAuth = void 0;
const api_security_decorator_1 = require("./api-security.decorator");
function ApiCookieAuth(name = 'cookie') {
    return (0, api_security_decorator_1.ApiSecurity)(name);
}
exports.ApiCookieAuth = ApiCookieAuth;
