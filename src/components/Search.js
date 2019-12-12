import React from 'react'
import 'antd/dist/antd.css';

import { Input } from 'antd'
const { Search } = Input

const search = () => {
    return (
        <Search
            placeholder="Cari di Lakupon"
            onSearch={value => console.log(value)} />
    )
}

export default search