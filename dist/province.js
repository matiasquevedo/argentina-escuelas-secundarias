"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const allSchools_json_1 = __importDefault(require("./assets/allSchools.json"));
function getSchoolsOfProvince(province_name) {
    if (!province_name)
        return [];
    const schools = allSchools_json_1.default.data.filter((value) => {
        return value.jurisdiction === province_name;
    });
    return schools;
}
exports.default = {
    getSchoolsOfProvince,
};
//# sourceMappingURL=province.js.map