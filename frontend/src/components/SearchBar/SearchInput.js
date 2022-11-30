import React from 'react';
import { Dropdown, Tag, Input, Button } from '@douyinfe/semi-ui';

export const dropDown = () => {
    return (
        <div>
            <Dropdown
                trigger={'focus'}
                position={'bottomLeft'}
                render={
                    <Dropdown.Menu tabIndex={-1}>
                        <Dropdown.Item>Trail 1</Dropdown.Item>
                        <Dropdown.Item>Trail 2</Dropdown.Item>
                        <Dropdown.Item>Trail 3</Dropdown.Item>
                    </Dropdown.Menu>
                }
            >
                <Input style={{ width: 120 }} placeholder="Search by city, park, or trail name" />
            </Dropdown>
        </div>
    );
}
