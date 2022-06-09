import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <p>
          Good: <span>{good}</span>
        </p>
      </li>
      <li className={s.item}>
        <p>
          Neutral: <span>{neutral}</span>
        </p>
      </li>
      <li className={s.item}>
        <p>
          Bad: <span>{bad}</span>
        </p>
      </li>
      <li className={s.item}>
        <p>
          Total: <span>{total}</span>
        </p>
      </li>
      <li className={s.item}>
        <p>
          Positive feedback: <span>{positivePercentage}%</span>
        </p>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
