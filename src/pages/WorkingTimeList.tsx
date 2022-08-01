import { useState, useEffect } from "react";
import axios from "axios";
import { request } from "../resource/Request";

type WorkingTime = {
    user_name : string
    working_date : string
    attendance_time : string
    leaving_time : string
}

export const WorkingTimeList = () => {

    const [tableData, setTableData] = useState([])

    useEffect(() => {
        axios.get(request.getWorkingTimeList + "?username=testuser")
        .then((response) => {
            setTableData(response.data);
        })
        .catch((response) => {
            alert(response);
        })
    }, []);


    return (
        <div>
            {tableData.map((value : WorkingTime) => {
                return (
                    <ul>
                        <li>{value.user_name}</li>
                        <li>{value.working_date}</li>
                        <li>{value.attendance_time}</li>
                        <li>{value.leaving_time}</li>
                    </ul>
                )
            })}
        </div>
    );
};