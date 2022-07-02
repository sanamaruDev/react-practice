import { Select } from "@chakra-ui/react"

const today = new Date();

export const Leaving = () => {
    return (
        <div>
            <h1>{today.getFullYear() + "/" + today.getMonth() + "/" + today.getDate()}</h1>
            <h1>退勤時間を設定</h1>
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
            <Select placeholder='select time'>          
                <option value='00'>00</option>
                <option value='15'>15</option>
                <option value='30'>30</option>
                <option value='45'>45</option>
            </Select>
            <button>退勤時間登録</button>
        </div>
    );
};