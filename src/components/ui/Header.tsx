import {Avatar, Button, Dropdown, Layout, MenuProps, Row, Space} from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation'
import { getUserInfo, removeUserInfo } from '@/service/auth.service'
import { authKey } from '@/types'
import { useEffect, useState } from 'react'
import { USER_ROLE } from '@/constants/role'
const {Header:AndHeader} = Layout
const Header = () =>{
    const router = useRouter();
    const [role, setRole] = useState<USER_ROLE | null>(null)

    const logOut = () =>{
        removeUserInfo(authKey);
        router.push('/login');
    }
    const items :MenuProps['items']=[{
        key:'0',
        label:<Button onClick={logOut} type='text' danger>Logout</Button>
    }]

    useEffect(()=>{
        const userInfo = getUserInfo(authKey);
                
        if(userInfo && typeof userInfo !== 'string' && Object.values(USER_ROLE).includes(userInfo.role as USER_ROLE)){
            setRole(userInfo.role as USER_ROLE)
        } else {
            setRole(USER_ROLE.STUDENT)
        }
    },[])
    return <AndHeader style={{backgroundColor:'purple'}}>
        <Row justify={'end'} align={"middle"} style={{height:'100%'}}>
            <p style={{paddingRight:'10px',fontSize:'20px',color:'white'}}>{role}</p>
            <Dropdown menu={{items}}>
                <a>
                    <Space wrap size={16}>
                        <Avatar size='large' icon={<UserOutlined />}/>
                    </Space>
                </a>
            </Dropdown>
        </Row>
    </AndHeader>
}

export default Header