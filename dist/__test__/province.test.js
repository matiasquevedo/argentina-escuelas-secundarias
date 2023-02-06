"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const index_1 = require("../index");
(0, globals_1.describe)('Pronvice Modules', () => {
    (0, globals_1.test)('get all Schools From Mendoza', () => {
        const provinceSchools = index_1.Province.getSchoolsOfProvince("Mendoza");
        console.log(provinceSchools);
        (0, globals_1.expect)(provinceSchools).not.toBeNull();
    });
    (0, globals_1.test)('get all Schools From Mendoza', () => {
        (0, globals_1.expect)(index_1.Province.getSchoolsOfProvince("Mendoza").length).toBe(406);
    });
});
//# sourceMappingURL=province.test.js.map