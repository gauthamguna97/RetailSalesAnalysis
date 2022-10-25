import React from 'react';

const Arrow = (props: { active: string, current: string}) => {
    const { active, current }  = props;

    if (active && active.startsWith(current)) {
        const cls = active.split('-')[1];
        return <div className={cls}></div>
    }
    return null;
}

export default Arrow