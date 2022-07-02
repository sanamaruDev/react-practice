import { Box, Text, Select, Button } from "@chakra-ui/react"

const today = new Date();

export const Attendance = () => {
    return (
        <div>
            <Box display="flex" justifyContent="center" margin="8">
                <Text fontSize='3xl' fontFamily="Meiryo" marginInline="2">{today.getFullYear() + "/" + today.getMonth() + "/" + today.getDate()}</Text>
                <Text fontSize='3xl' fontFamily="Meiryo" marginInline="2">出勤時間を設定</Text>
            </Box>
            <Box display="flex" justifyContent="center" margin="8">
                <Select placeholder='select hour'>          
                    <option value='08'>08</option>
                    <option value='09'>09</option>
                    <option value='10'>10</option>
                    <option value='11'>11</option>
                    <option value='12'>12</option>
                    <option value='13'>13</option>
                    <option value='14'>14</option>
                    <option value='15'>15</option>
                </Select>
                <Text fontSize="3xl">：</Text>
                <Select placeholder='select time'>          
                    <option value='00'>00</option>
                    <option value='15'>15</option>
                    <option value='30'>30</option>
                    <option value='45'>45</option>
                </Select>
            </Box>
            <Box display="flex" justifyContent="center" margin="8">
                <Button>出勤時間登録</Button>
            </Box>
        </div>
    );
};
