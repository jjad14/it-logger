import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

import { deleteLog } from '../../actions/logActions';

const LogItem = ({ log, deleteLog }) => {

    const onDeleteHandler = () => {
        deleteLog(log.id);

        M.toast({ html: `Log #${log.id} Deleted` });
    }

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
                <a href="#!" 
                    className="secondary-content"
                    onClick={onDeleteHandler}>
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    );
};

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired
};

export default connect(null, { deleteLog })(LogItem);
