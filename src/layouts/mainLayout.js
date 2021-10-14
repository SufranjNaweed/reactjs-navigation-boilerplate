import React from 'react'
import PropTypes from 'prop-types'

const MainLayout = props => {
    return (
        <div>
            <h1>MainLayout Set</h1>
            <div>
                {props.children}
            </div>
        </div>
    )
}

MainLayout.propTypes = {

}

export default MainLayout
