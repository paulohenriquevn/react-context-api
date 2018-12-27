import React from 'react'

import Spinner from 'react-spinkit'

import './loading.css';

const Loading = ({ loading, message }) => {
    return loading ? (
        <div className='overlay-content'>
            <div className='wrapper'>
                <Spinner
                    name='ball-pulse-sync'
                    fadeIn='none'
                    color='steelblue'
                />
                <span className='message'>
                    {message}
                </span>
            </div>
        </div>
    ) : null
}

export default Loading