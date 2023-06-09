import PropTypes from 'prop-types';
import css from '../Notification/Notification.module.css';

const Notification = ({ message }) => {
  return <p className={css.notification}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
