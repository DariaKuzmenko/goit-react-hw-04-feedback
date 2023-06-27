import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const handleFeedback = e => {
    const option = e.target.name;
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const feedbackOptions = {
    good,
    neutral,
    bad,
  };

  const countTotalFeedback = () => {
    return Object.values(feedbackOptions).reduce((acc, value) => {
      return acc + value;
    }, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = (good / countTotalFeedback()) * 100;
    if (positivePercentage === 0) {
      return 0;
    } else {
      return Math.round(positivePercentage);
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
