

const host = 'http://localhost:3090';

export const fetchStudentCounts = host + '/api/student/counts'
export const getStudents = host + '/api/students'
export const getStudentWithId = host + '/api/student/'
export const getVaccinatedStudents = host + '/api/students/vaccinated'
export const getUnVaccinatedStudents = host + '/api/students/unvaccinated'

export const updateStudent = host + '/api/student/'

export const getReports = host + '/api/reports'

export const getAllVaxDrives = host + '/api/vaccinationDrives'
export const getPastVaxDrives = host + '/api/vaccinationDrives/past'
export const getUpcomingVaxDrives = host + '/api/vaccinationDrives/upcoming'

export const  getDrivesForStudent = host + '/api/vaccinationDriveRegistration/drivesRegisteredForStudent/'
