import Select from 'react-select';

const optionsHours = [
    { value: '08', label: '08' },
    { value: '09', label: '09' },
    { value: '10', label: '10' },
    { value: '11', label: '11' },
    { value: '12', label: '12' },
    { value: '13', label: '13' },
    { value: '14', label: '14' },
    { value: '15', label: '15' }
];

const optionsTimes = [
    { value: '00', label: '00' },
    { value: '15', label: '15' },
    { value: '30', label: '30' },
    { value: '45', label: '45' }
];

const today = new Date();

export const Attendance = () => {
    return (
        <div>
            <h1>{today.getFullYear() + "/" + today.getMonth() + "/" + today.getDate()}</h1>
            <h1>出勤時間を設定</h1>
            <Select options={optionsHours}/>          
            <Select options={optionsTimes}/>
            <button>出勤時間登録</button>
        </div>
    );
};
