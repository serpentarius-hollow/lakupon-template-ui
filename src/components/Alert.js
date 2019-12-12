import React from 'react'
import 'antd/dist/antd.css';

import { Alert } from 'antd'

const alert = (props) => {
    return (
        <Alert
            message="Pemberitahuan"
            type="error"
            closable
            afterClose={props.closed} />
    )
}

export default alert