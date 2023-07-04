// for notification
import PropTypes from 'prop-types';

export const Notification = ({messege = ' '}) => {
    return (<>
    <p>{messege}</p>
    </>)
}

Notification.propTypes = {
    messege: PropTypes.string.isRequired,
}