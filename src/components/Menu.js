import React from 'react'
import 'antd/dist/antd.css';

import { Menu } from 'antd'

const { SubMenu } = Menu;

const menu = () => {
    return (
        <Menu
            mode="inline">
            <SubMenu
                key="sub1"
                title="Kategori">
                <Menu.Item key="1">Makanan</Menu.Item>
                <Menu.Item key="2">Kegiatan</Menu.Item>
                <Menu.Item key="3">Perawatan</Menu.Item>
                <Menu.Item key="4">Wisata</Menu.Item>
                <Menu.Item key="5">Semua</Menu.Item>
            </SubMenu>
        </Menu>
    )
}

export default menu