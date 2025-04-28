import { MenuProps } from "antd";

import {
    ProfileOutlined,
    KeyOutlined,
    UserOutlined,
    LinuxOutlined,
    MehOutlined,
    TabletFilled,
    AppstoreOutlined,
    ScheduleOutlined,
    CreditCardOutlined,
    ThunderboltOutlined,
    FileTextOutlined,
    TableOutlined
} from '@ant-design/icons';
import Link from "next/link";
import { USER_ROLE } from "./role";
export const sidebaritems=(role:string)=> {
    const defaultSidebarItems:MenuProps['items'] =[
        {
            label:<span style={{ color: 'yellow' }}>Profile</span>,
            key:"profile",
            style:{color:'white'},
            icon:<UserOutlined />,
            children:[
                {
                    label:<Link href={`/${role}`}>Account Profile</Link>,
                    key:`/${role}/profile`,
                    style:{color:'white'},
                    icon:<ProfileOutlined />,
                    
                },
                {
                    label:<Link href={`/${role}/change-password`}>Change Password</Link>,
                    key:`${role}/change-password`,
                    style:{color:'white'},
                    icon:<KeyOutlined />
                }
            ]
        }
    ]
    const commonAdminSidebarItems:MenuProps['items'] =[
        {
            label:<Link href={`/${role}/student`} style={{color:'yellow'}}>Manage Students</Link>,
            key:'student',
            style:{color:'white'},
            icon:<LinuxOutlined />,
           
        },
        {
            label:<Link href={`/${role}/faculty`} style={{color:'yellow'}}>Manage Faculty</Link>,
            key:'faculty',
            style:{color:'white'},
            icon:<MehOutlined />,
           
        }
    ]
    const adminSidebarItems:MenuProps['items'] = [
        ...defaultSidebarItems,
        ...commonAdminSidebarItems,
        {
            label:<span style={{color:'yellow'}}>Manage academic</span>,
            key:'manage-academic',
            style:{color:'white'},
            icon:<TabletFilled />,
            children:[
                {
                    label:<Link href={`/${role}/academic/faculty`}>Faculties</Link>,
                    style:{color:'white'},
                    key:`/${role}/academic/faculty`
                },
                {
                    label:<Link href={`/${role}/academic/department`}>Departments</Link>,
                    style:{color:'white'},
                    key:`/${role}/academic/department`
                },
                {
                    label:<Link href={`/${role}/academic/semester`}>Semesters</Link>,
                    style:{color:'white'},
                    key:`/${role}/academic/semester`
                }
            ]
        },
        {
            label:<span style={{color:'yellow'}}>Management</span>,
            key:'management',
            icon:<AppstoreOutlined />,
            
            style:{color:'white'},
            children:[
                {
                    label:<Link href={`/${role}/department`}>Department</Link>,
                    style:{color:'white'},
                    key:`/${role}/department,`
                },
                {
                    label:<Link href={`/${role}/building`}>Building</Link>,
                    style:{color:'white'},
                    key:`/${role}/building,`
                },
                {
                    label:<Link href={`/${role}/room`}>Rooms</Link>,
                    style:{color:'white'},
                    key:`/${role}/room,`
                },
                {
                    label:<Link href={`/${role}/course`}>Course</Link>,
                    style:{color:'white'},
                    key:`/${role}/course,`
                },
                {
                    label:<Link href={`/${role}/course/schedule`}>Course Schedules</Link>,
                    key:`/${role}/course/schedule,`,
                    style:{color:'white'},
                    icon:<ScheduleOutlined />
                },
                {
                    label:<Link href={`/${role}/registration`}>Registration</Link>,
                    key:`/${role}/registration,`,
                    style:{color:'white'},
                    icon:<ThunderboltOutlined />
                },
                {
                    label:<Link href={`/${role}/payment`}>Payment</Link>,
                    key:`/${role}/payment,`,
                    style:{color:'white'},
                    icon:<CreditCardOutlined />
                },
                {
                    label:<Link href={`/${role}/academic-report`}>Academic Report</Link>,
                    key:`/${role}/academic-report,`,
                    style:{color:'white'},
                    icon:<FileTextOutlined />
                }
            ]
        }
    ]
    const superAdminSidebarItems:MenuProps['items'] = [
        ...defaultSidebarItems,
        ...commonAdminSidebarItems,
        {
            label:<Link href={`/${role}/admin`} style={{color:'yellow'}}>Manage Admin</Link>,
            icon:<TableOutlined />,
            key:`/${role}/admin`
        },
        {
            label:<Link href={`/${role}/user`} style={{color:'yellow'}}>Manage User</Link>,
            icon:<TableOutlined />,
            key:`/${role}/user`
        },
        {
            label:<span style={{color:'yellow'}}>Manage permission</span>,
            key:'manage-permission',
            icon:<AppstoreOutlined />,
            children:[
                {
                    label:<Link href={`/${role}/permission`}>View Permissions</Link>,
                    style:{color:'white'},
                    key:`/${role}/permission`
                }
            ]
        },
        
        {
            label:<span style={{color:'yellow'}}>Manage academic</span>,
            key:'manage-academic',
            icon:<TabletFilled />,
            children:[
                {
                    label:<Link href={`/${role}/academic/faculty`}>Faculties</Link>,
                    style:{color:'white'},
                    key:`/${role}/academic/faculty`
                },
                {
                    label:<Link href={`/${role}/academic/department`}>Departments</Link>,
                    style:{color:'white'},
                    key:`/${role}/academic/department`
                },
                {
                    label:<Link href={`/${role}/academic/semester`}>Semesters</Link>,
                    style:{color:'white'},
                    key:`/${role}/academic/semester`
                }
            ]
        },
        {
            label:<span style={{color:'yellow'}}>Management</span>,
            key:'management',
            icon:<AppstoreOutlined />,
            children:[
                {
                    label:<Link href={`/${role}/management/department`}>Department</Link>,
                    style:{color:'white'},
                    key:`/${role}/management/department,`
                },
                {
                    label:<Link href={`/${role}/management/building`}>Building</Link>,
                    style:{color:'white'},
                    key:`/${role}/management/building,`
                },
                {
                    label:<Link href={`/${role}/management/room`}>Rooms</Link>,
                    style:{color:'white'},
                    key:`/${role}/management/room,`
                },
                {
                    label:<Link href={`/${role}/management/course`}>Course</Link>,
                    style:{color:'white'},
                    key:`/${role}/management/course,`
                },
                {
                    label:<Link href={`/${role}/management/course/schedule`}>Course Schedules</Link>,
                    style:{color:'white'},
                    key:`/${role}/management/course/schedule,`,
                    icon:<ScheduleOutlined />
                },
                {
                    label:<Link href={`/${role}/management/registration`}>Registration</Link>,
                    style:{color:'white'},
                    key:`/${role}/management/registration,`,
                    icon:<ThunderboltOutlined />
                },
                {
                    label:<Link href={`/${role}/management/payment`}>Payment</Link>,
                    style:{color:'white'},
                    key:`/${role}/management/payment,`,
                    icon:<CreditCardOutlined />
                },
                {
                    label:<Link href={`/${role}/management/academic-report`}>Academic Report</Link>,
                    style:{color:'white'},
                    key:`/${role}/management/academic-report,`,
                    icon:<FileTextOutlined />
                }
            ]
        }
    ]
    const facultySidebarItems:MenuProps['items'] =[
        ...defaultSidebarItems,
        {
            label:<Link href={`/${role}/courses`} style={{color:'yellow'}}>Courses</Link>,
            icon:<TableOutlined />,
            key:`/${role}/courses`
        }
    ]
    const studentSidebarItems:MenuProps['items'] =[ 
        ...defaultSidebarItems,
        {
            label:<Link href={`/${role}/courses`}>Courses</Link>,
            icon:<TableOutlined />,
            key:`/${role}/courses`
        },
        {
            label:<Link href={`/${role}/courses/schedule`}>Courses schedules</Link>,
            icon:<ScheduleOutlined />,
            key:`/${role}/courses/schedule`
        },
        {
            label:<Link href={`/${role}/registration`}>Registration</Link>,
            icon:<ThunderboltOutlined />,
            key:`/${role}/registration`
        },
        {
            label:<Link href={`/${role}/payment`}>Payment</Link>,
            icon:<CreditCardOutlined />,
            key:`/${role}/payment`
        },
        {
            label:<Link href={`/${role}/academic-report`}>Academic report</Link>,
            icon:<FileTextOutlined />,
            key:`/${role}/academic-report`
        }
    ]
    if(role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
    else if(role === USER_ROLE.ADMIN) return adminSidebarItems;
    else if(role === USER_ROLE.FACULTY) return facultySidebarItems;
    else if(role === USER_ROLE.STUDENT) return studentSidebarItems;
    else {return defaultSidebarItems}
}

