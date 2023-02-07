import {describe, expect, test} from '@jest/globals';
import {Province} from '../index';

describe('Esculas por provincia', () => {

  test('todas las provincias', () => {
    const provincias = Province.getProvinces()
    console.log(provincias)
    expect(provincias.length).not.toBe(0);
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