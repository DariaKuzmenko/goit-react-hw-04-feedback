import PropTypes from 'prop-types';
import { Wrapper, StatisticsEl, StatsValue } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Wrapper>
      <StatisticsEl>
        <StatsValue>Good: {good}</StatsValue>
        <StatsValue>Neutral: {neutral}</StatsValue>
        <StatsValue>Bad: {bad}</StatsValue>
      </StatisticsEl>
      <StatsValue>Total: {total()}</StatsValue>
      <StatsValue>Positive feedback: {positivePercentage() || 0}%</StatsValue>
    </Wrapper>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
