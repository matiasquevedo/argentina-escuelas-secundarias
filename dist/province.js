"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const allSchools_json_1 = __importDefault(require("./assets/allSchools.json"));
const provinces_json_1 = __importDefault(require("./assets/provinces.json"));
const lodash_1 = __importDefault(require("lodash"));
function getProvinces() {
    return provinces_json_1.default;
}
function getSchoolsOfProvince(province_name) {
    if (!province_name)
        return [];
    let province_name_cap = lodash_1.default.startCase(lodash_1.default.toLower(province_name));
    console.log(province_name_cap);
    const schools = allSchools_json_1.default.data.filter((value) => {
        return value.jurisdiction === province_name_cap;
    });
    return schools;
}
function getSchoolsOfProvinceAndLocality(province_name, locality) {
    if (!province_name)
        return [];
    if (!locality)
        return [];
    let province_name_cap = lodash_1.default.startCase(lodash_1.default.toLower(province_name));
    let locality_cap = lodash_1.default.startCase(lodash_1.default.toLower(locality));
    console.log(province_name_cap);
    console.log(locality_cap);
    const schools = allSchools_json_1.default.data.filter((value) => {
        return value.jurisdiction === province_name_cap && value.locality === locality_cap;
    });
    return schools;
}
exports.default = {
    getProvinces,
    getSchoolsOfProvince,
    getSchoolsOfProvinceAndLocality
};
//# sourceMappingURL=province.js.map