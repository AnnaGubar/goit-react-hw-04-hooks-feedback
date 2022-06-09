import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={s.list}>
      {options.map(option => (
        <li key={option} className={s.item}>
          <button
            type="button"
            className={s.button}
            onClick={() => {
              console.log(option); // 'good', 'neutral', 'bad'
              onLeaveFeedback(option);
            }}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
