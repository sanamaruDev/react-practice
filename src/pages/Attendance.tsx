import { Box, Text, Select, Button } from "@chakra-ui/react"
import React from "react";
import axios from "axios";
import { formatDate } from "../utils/util";
import "../setting";

const BASE_URL = process.env.REACT_APP_BASE_URL

const today = new Date();
const postUrl = BASE_URL + "/attendance/regist";

export const Attendance = () => {

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
    const aryHour = ["08","09","10","11","12","13","14","15"];
    const aryTime = ["00","15","30","45"];

    const regist = () => {
        axios.post(postUrl, {
            "user_name":"testuser",
            "working_date":formatDate(today, "yyyyMMdd"),
            "attendance_time":hour + time,
            "leaving_time":""
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
                <Text fontSize='3xl' fontFamily="Meiryo" marginInline="2">出勤時間を設定</Text>
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
                <Button onClick={regist}>出勤時間登録</Button>
            </Box>
        </div>
    );
};
