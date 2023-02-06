import schoolsList from './assets/allSchools.json';


function getSchoolsOfProvince(province_name: string) {
	if (!province_name) return [];

	const schools = schoolsList.data.filter((value:{jurisdiction: string})=>{
		return value.jurisdiction === province_name
	});


	return schools;
}


export default {
	getSchoolsOfProvince,
};