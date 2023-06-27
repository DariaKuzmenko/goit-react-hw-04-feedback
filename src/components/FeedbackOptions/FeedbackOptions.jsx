import PropTypes from 'prop-types';
import { Feedback, FeedbackButtons, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Feedback>
      <FeedbackButtons>
        {options.map(option => (
          <Button
            type="button"
            key={option}
            onClick={onLeaveFeedback}
            name={option}
          >
            {option}
          </Button>
        ))}
      </FeedbackButtons>
    </Feedback>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
};
