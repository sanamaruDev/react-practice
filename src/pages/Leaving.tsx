import { Box, Text, Select, Button } from "@chakra-ui/react"
import React from "react";
import axios from "axios";
import { formatDate } from "../utils/util";
import "../setting";
import { request } from "../resource/Request";

const today = new Date();

export const Leaving = () => {

    // userState
    const [hour, setHour] = React.useState("");
    const [time, setTime] = React.useState("");
    
    const handleChangeHour = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setHour(e.target.value)
    }

    const handleChangeTime = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTime(e.target.value)
    }

    // selectBox
    const aryHour = ["12","13","14","15","16","17","18","19","20","21","22","23","24","25","26"];
    const aryTime = ["00","15","30","45"];
    
    const regist = () => {
        axios.post(request.registAttendance, {
            "user_name":"testuser",
            "working_date":formatDate(today, "yyyyMMdd"),
            "attendance_time":"",
            "leaving_time":hour + time
        })
        .then((response) => {
            alert(response);
        })
        .catch((response) => {
            alert(response);
        })
    }

    return (
        <div>
            <Box display="flex" justifyContent="center" margin="8">
                <Text fontSize='3xl' fontFamily="Meiryo" marginInline="2">{formatDate(today, "yyyy/MM/dd")}</Text>
                <Text fontSize='3xl' fontFamily="Meiryo" marginInline="2">退勤時間を設定</Text>
            </Box>
            <Box display="flex" justifyContent="center" margin="8">
                <Select placeholder='select hour' onChange={(e) => handleChangeHour(e)}>
                    {
                        aryHour.map(output => <option value={output}>{output}</option>)
                    }
                </Select>
                <Text fontSize="3xl">：</Text>
                <Select placeholder='select time' onChange={(e) => handleChangeTime(e)}>          
                    {
                        aryTime.map(output => <option value={output}>{output}</option>)
                    }
                </Select>
            </Box>
            <Box display="flex" justifyContent="center" margin="8">
                <Button onClick={regist}>退勤時間登録</Button>
            </Box>
        </div>
    );
};