import React from 'react';
import {Link} from 'react-router-dom';
import { Input,Button } from 'antd';
function Home() {
  return (
    <div>
        <Input.Group compact>
            <Input
                style={{
                width: 400,
                }}
                defaultValue="Enter the key of the item"
            />
            <Link to={'/apkrss/rss_id'}>
                <Button type="primary">Get</Button>
            </Link>
        </Input.Group>
    </div>
  )
}

export default Home
