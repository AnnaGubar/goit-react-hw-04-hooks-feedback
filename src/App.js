import { useState } from 'react';
import Section from './Components/Section';
import FeedbackOptions from './Components/FeedbackOptions';
import Statistics from './Components/Statistics';
import Notification from './Components/Notification';

function App() {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  const feedbackOptions = ['good', 'neutral', 'bad'];
  let amountFeedbackValues = goodFeedback + badFeedback + neutralFeedback;

  function handleIncrement(type) {
    if (type === 'good') {
      setGoodFeedback(prev => prev + 1);
    }
    if (type === 'neutral') {
      setNeutralFeedback(prev => prev + 1);
    }
    if (type === 'bad') {
      setBadFeedback(prev => prev + 1);
    }
  }

  const countPositiveFeedbackPercentage = () => {
    let positiveFeedback = Math.round(
      (goodFeedback / amountFeedbackValues) * 100,
    );

    return positiveFeedback > 0 ? positiveFeedback : 0;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={handleIncrement}
        />
      </Section>

      <Section title="Statistics">
        {amountFeedbackValues > 0 ? (
          <Statistics
            good={goodFeedback}
            neutral={neutralFeedback}
            bad={badFeedback}
            total={amountFeedbackValues}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}

export default App;
