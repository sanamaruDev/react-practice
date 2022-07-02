import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import './App.css';

export const App = () => {
  return (
    <Box justifyContent="center" margin="8">
      <Link to="/attendance">出勤時間登録</Link>
      <Link to="/leaving">退勤時間登録</Link>
      <Link to="/workingtimelist">一覧表示</Link>
    </Box>
  );
};
