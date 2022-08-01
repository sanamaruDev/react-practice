const BASE_URL = process.env.REACT_APP_BASE_URL

export const request = {
    registAttendance : BASE_URL + "/attendance",
    registLeaving : BASE_URL + "/leaving",
    getWorkingTimeList : BASE_URL + "/workinglist",
}
