import React from 'react'
import fetching from '../../../src/components/common/Preloader/preloader.gif'

let Preloader = (props) => {
    return (
        <div>
            {props.isFetching ? <img src={fetching} /> : null}
        </div>
    );
}

export default Preloader;