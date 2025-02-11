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
            label:"Profile",
            key:"profile",
            icon:<UserOutlined />,
            
            children:[
                {
                    label:<Link href={`/${role}/profile`}>Account Profile</Link>,
                    key:`/${role}/profile`,
                    icon:<ProfileOutlined />,
                    
                },
                {
                    label:<Link href={`/${role}/change-password`}>Change Password</Link>,
                    key:`${role}/change-password`,
                    icon:<KeyOutlined />
                }
            ]
        }
    ]
    const commonAdminSidebarItems:MenuProps['items'] =[
        {
            label:<Link href={`/${role}/manage-student`}>Manage Students</Link>,
            key:'manage-student',
            icon:<LinuxOutlined />,
           
        },
        {
            label:<Link href={`/${role}/manage-faculty`}>Manage Faculty</Link>,
            key:'manage-faculty',
            icon:<MehOutlined />,
           
        }
    ]
    const adminSidebarItems:MenuProps['items'] = [
        ...defaultSidebarItems,
        ...commonAdminSidebarItems,
        {
            label:'Manage academic',
            key:'manage-academic',
            icon:<TabletFilled />,
            children:[
                {
                    label:<Link href={`/${role}/academic/faculty`}>Faculties</Link>,
                    key:`/${role}/academic/faculty`
                },
                {
                    label:<Link href={`/${role}/academic/department`}>Departments</Link>,
                    key:`/${role}/academic/department`
                },
                {
                    label:<Link href={`/${role}/academic/semester`}>Semesters</Link>,
                    key:`/${role}/academic/semester`
                }
            ]
        },
        {
            label:"Management",
            key:'management',
            icon:<AppstoreOutlined />,
            children:[
                {
                    label:<Link href={`/${role}/department`}>Department</Link>,
                    key:`/${role}/department,`
                },
                {
                    label:<Link href={`/${role}/building`}>Building</Link>,
                    key:`/${role}/building,`
                },
                {
                    label:<Link href={`/${role}/room`}>Rooms</Link>,
                    key:`/${role}/room,`
                },
                {
                    label:<Link href={`/${role}/course`}>Course</Link>,
                    key:`/${role}/course,`
                },
                {
                    label:<Link href={`/${role}/course/schedule`}>Course Schedules</Link>,
                    key:`/${role}/course/schedule,`,
                    icon:<ScheduleOutlined />
                },
                {
                    label:<Link href={`/${role}/registration`}>Registration</Link>,
                    key:`/${role}/registration,`,
                    icon:<ThunderboltOutlined />
                },
                {
                    label:<Link href={`/${role}/payment`}>Payment</Link>,
                    key:`/${role}/payment,`,
                    icon:<CreditCardOutlined />
                },
                {
                    label:<Link href={`/${role}/academic-report`}>Academic Report</Link>,
                    key:`/${role}/academic-report,`,
                    icon:<FileTextOutlined />
                }
            ]
        }
    ]
    const superAdminSidebarItems:MenuProps['items'] = [
        ...defaultSidebarItems,
        ...commonAdminSidebarItems,
        {
            label:<Link href={`/${role}/admin`}>Manage Admin</Link>,
            icon:<TableOutlined />,
            key:`/${role}/admin`
        },
        {
            label:<Link href={`/${role}/user`}>Manage User</Link>,
            icon:<TableOutlined />,
            key:`/${role}/user`
        },
        {
            label:'Manage permission',
            key:'manage-permission',
            icon:<AppstoreOutlined />,
            children:[
                {
                    label:<Link href={`/${role}/permission`}>View Permissions</Link>,
                    key:`/${role}/permission`
                }
            ]
        },
        {
            label:'Management',
            key:'mnagement',
            icon:<AppstoreOutlined />,
            children:[
                {
                    label:<Link href={`/${role}/department`}>Department</Link>,
                    key:`/${role}/department`
                }
            ]
        },
        {
            label:'Manage academic',
            key:'manage-academic',
            icon:<TabletFilled />,
            children:[
                {
                    label:<Link href={`/${role}/academic/faculty`}>Faculties</Link>,
                    key:`/${role}/academic/faculty`
                },
                {
                    label:<Link href={`/${role}/academic/department`}>Departments</Link>,
                    key:`/${role}/academic/department`
                },
                {
                    label:<Link href={`/${role}/academic/semester`}>Semesters</Link>,
                    key:`/${role}/academic/semester`
                }
            ]
        },
        {
            label:"Management",
            key:'management',
            icon:<AppstoreOutlined />,
            children:[
                {
                    label:<Link href={`/${role}/department`}>Department</Link>,
                    key:`/${role}/department,`
                },
                {
                    label:<Link href={`/${role}/building`}>Building</Link>,
                    key:`/${role}/building,`
                },
                {
                    label:<Link href={`/${role}/room`}>Rooms</Link>,
                    key:`/${role}/room,`
                },
                {
                    label:<Link href={`/${role}/course`}>Course</Link>,
                    key:`/${role}/course,`
                },
                {
                    label:<Link href={`/${role}/course/schedule`}>Course Schedules</Link>,
                    key:`/${role}/course/schedule,`,
                    icon:<ScheduleOutlined />
                },
                {
                    label:<Link href={`/${role}/registration`}>Registration</Link>,
                    key:`/${role}/registration,`,
                    icon:<ThunderboltOutlined />
                },
                {
                    label:<Link href={`/${role}/payment`}>Payment</Link>,
                    key:`/${role}/payment,`,
                    icon:<CreditCardOutlined />
                },
                {
                    label:<Link href={`/${role}/academic-report`}>Academic Report</Link>,
                    key:`/${role}/academic-report,`,
                    icon:<FileTextOutlined />
                }
            ]
        }
    ]
    const facultySidebarItems:MenuProps['items'] =[
        ...defaultSidebarItems,
        {
            label:<Link href={`/${role}/courses`}>Courses</Link>,
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

