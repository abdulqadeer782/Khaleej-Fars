import React from 'react'
import { Menu } from 'antd'

export default function MenuItems({mode}) {
    return (
        <Menu style={{ float: 'right' }} theme="light" mode={mode} defaultSelectedKeys={['2']}>
            <Menu.Item key='/Home'>Home</Menu.Item>
            <Menu.Item key='/About'>About</Menu.Item>
            <Menu.Item key='/Gallery'>Gallery</Menu.Item>
            <Menu.Item key='/Contact'>Contact</Menu.Item>
        </Menu>
    )
}
