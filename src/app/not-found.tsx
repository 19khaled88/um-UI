import React from "react";
import { Button, Result } from "antd";
import "@ant-design/v5-patch-for-react-19";

const NotFoundPage: React.FC = () => {
  return (
    <div style={{display:'flex', flexDirection:'row', justifyContent:'center',alignItems:'center',height:'100vh'}}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">Back Home</Button>}
      />
    </div>
  );
};

export default NotFoundPage;
