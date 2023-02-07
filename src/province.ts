import schoolsList from './assets/allSchools.json';
import pronvinceList from './assets/provinces.json';
import { ISchool } from './interface';
import _ from 'lodash';

function getProvinces() {
	return pronvinceList;
}


function getSchoolsOfProvince(province_name: string) : ISchool[] {
	if (!province_name) return [];

	let province_name_cap = _.startCase( _.toLower(province_name) );

	console.log(province_name_cap)

	const schools = schoolsList.data.filter((value:{jurisdiction: string})=>{
		return value.jurisdiction === province_name_cap
	});


	return schools;
}

function getSchoolsOfProvinceAndLocality(province_name: string, locality: string) : ISchool[] {
	if (!province_name) return [];
	if (!locality) return [];

	let province_name_cap = _.startCase( _.toLower(province_name) );
	let locality_cap = _.startCase( _.toLower(locality) );

	console.log(province_name_cap)
	console.log(locality_cap)

	const schools = schoolsList.data.filter((value:{jurisdiction: string, locality:string})=>{
		return value.jurisdiction === province_name_cap && value.locality === locality_cap
	});


	return schools;
}



export default {
	getProvinces,
	getSchoolsOfProvince,
	getSchoolsOfProvinceAndLocality
};