import React, { useEffect } from 'react'
import { Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { DashboardOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons'

import { useSelector, useDispatch } from 'react-redux'
import { getModules } from '../Actions/moduleAction'




const { SubMenu } = Menu



export default function MenuItem() {
    const dispatch = useDispatch()

    const module = useSelector(state => state.moduleSlice)


    useEffect(() => {
        dispatch(getModules())
    }, [])

    console.log('my module',module);

    const location = useLocation()
    return (
        <div>
            <Menu mode="vertical" defaultOpenKeys={['users']} defaultSelectedKeys={[0]} selectedKeys={[location.pathname]} style={{ textAlign: 'center', background: 'none', border: 'none' }}>
                <Link to='/'>
                    <DashboardOutlined style={{ fontSize: '2rem', padding: "10px" }} />
                    <Menu.Item key='/'>
                        Dashboard
                    </Menu.Item>
                </Link>
                
            </Menu>
        </div>
    )
}
