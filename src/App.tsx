import { useNavigate } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

import './App.css';

export const App = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Box display="flex" justifyContent="center" margin="8">
        <Button onClick={() => navigate('/attendance')}>出勤時間登録</Button>
      </Box>
      <Box display="flex" justifyContent="center" margin="8">
        <Button onClick={() => navigate('/leaving')}>退勤時間登録</Button>
      </Box>
      <Box display="flex" justifyContent="center" margin="8">
        <Button onClick={() => navigate('/workingtimelist')}>一覧表示</Button>
      </Box>
    </div>
  );
};
