import {describe, expect, test} from '@jest/globals';
import {Province} from '../index';

describe('Pronvice Modules', () => {
  test('get all Schools From Mendoza', () => {
  	const provinceSchools = Province.getSchoolsOfProvince("Mendoza")
  	console.log(provinceSchools)
    expect(provinceSchools).not.toBeNull();
  });

  test('get all Schools From Mendoza', () => {
    expect(Province.getSchoolsOfProvince("Mendoza").length).toBe(406);
  });
});