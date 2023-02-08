"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const index_1 = require("../index");
(0, globals_1.describe)('Esculas por provincia', () => {
    (0, globals_1.test)('todas las provincias', () => {
        const provincias = index_1.Province.getProvinces();
        console.log(provincias);
        (0, globals_1.expect)(provincias.length).not.toBe(0);
    });
    // test('todas las Escuelas de Mendoza', () => {
    // 	const provinceSchools = Province.getSchoolsOfProvince("Mendoza")
    //   expect(provinceSchools).not.toBeNull();
    // });
    // test('hay escuelas en Mendoza', () => {
    //   expect(Province.getSchoolsOfProvince("Mendoza").length).not.toBe(0);
    // });
    // test('hay escuelas en MENDOZA', () => {
    //   expect(Province.getSchoolsOfProvince("MENDOZA").length).not.toBe(0);
    // });
    // test('hay escuelas en mendoza', () => {
    //   expect(Province.getSchoolsOfProvince("mendoza").length).not.toBe(0);
    // });
    // test('hay escuelas en San Rafael Mendoza', () => {
    //   expect(Province.getSchoolsOfProvinceAndLocality("Mendoza","SAN RAFAEL").length).not.toBe(0);
    // });
    // test('no hay escuelas para una provincia que no existe', () => {
    // 	const schools: any = Province.getSchoolsOfProvince("San Rafael")
    // 	expect(schools.length).toEqual(0);
    // });
});
//# sourceMappingURL=province.test.js.map