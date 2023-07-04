import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onBtnClick}) => (
 <div>
    {options.map(option =>
     (<button className={css.button} type="button" key={option} onClick={() => onBtnClick(option)}>{option}</button>)
    )}
 </div>

)

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onBtnClick: PropTypes.func.isRequired,
}