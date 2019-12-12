import React from 'react'
import 'antd/dist/antd.css';

import { List, Card } from 'antd'

const data = [
    {
        title: 'Judul 1',
        content: 'Deskripsi 1'
    },
    {
        title: 'Judul 2',
        content: 'Deskripsi 2'
    }
];

const list = (props) => {
    return (
        <List
            grid={{
                gutter: 0,
                xs: 2,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 6,
            }}
            dataSource={data}
            renderItem={item => (
                <List.Item style={{ marginLeft: '5px', marginRight: '5px' }}>
                    <Card title={item.title}>{item.content}</Card>
                </List.Item>
            )} />
    )
}

export default list