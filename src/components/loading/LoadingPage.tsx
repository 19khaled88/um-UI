import React from 'react';
import { Flex, Spin } from 'antd';

const LoadingComponent: React.FC = () => {
 return (
     <Flex align="center" justify='center' style={{height:'100vh'}} gap="middle" >
    
     <Spin size="large"  fullscreen={true} />
     
   </Flex>
   );
};

export default LoadingComponent;