import Select from "react-select";

const optionsHours = [
    { value: '12', label: '12' },
    { value: '13', label: '13' },
    { value: '14', label: '14' },
    { value: '15', label: '15' },
    { value: '16', label: '16' },
    { value: '17', label: '17' },
    { value: '18', label: '18' },
    { value: '19', label: '19' },
    { value: '20', label: '20' },
    { value: '21', label: '21' },
    { value: '22', label: '22' },
    { value: '23', label: '23' },
    { value: '24', label: '24' },
    { value: '25', label: '25' },
    { value: '26', label: '26' }
];

const optionsTimes = [
    { value: '00', label: '00' },
    { value: '15', label: '15' },
    { value: '30', label: '30' },
    { value: '45', label: '45' }
];

const today = new Date();

export const Leaving = () => {
    return (
        <div>
            <h1>{today.getFullYear() + "/" + today.getMonth() + "/" + today.getDate()}</h1>
            <h1>退勤時間を設定</h1>
            <Select options={optionsHours} />
            <Select options={optionsTimes} />
            <button>退勤時間登録</button>
        </div>
    );
};