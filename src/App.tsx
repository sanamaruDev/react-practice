import { Link } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
        <div>
          <Link to="/attendance">出勤時間登録</Link>
          <Link to="/leaving">退勤時間登録</Link>
        </div>
    </div>
  );
}

export default App;
