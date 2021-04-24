import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const LogItem = ({ log }) => {
    return (
        <li className="collection-item">
            <div className="">
                <a 
                    href='#edit-log-modal' 
                    className={`modal-trigger ${
                      log.attention ? 'red-text' : 'blue-grey-text'}`}>
                        {log.message}
                </a>
                <br />
                <span className="grey-text">
                    <span className="black-text">ID #{log.id}</span>
                    &nbsp;last updated by&nbsp;
                    <span className="black-text">{log.tech}</span>
                    &nbsp;on&nbsp; 
                    <Moment format='MMMM do YYYY, h:mm:ss a'>
                        {log.date}
                    </Moment>
                </span>
                <a href="#!" className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    );
};

LogItem.propTypes = {
    log: PropTypes.object.isRequired
};

export default LogItem;
