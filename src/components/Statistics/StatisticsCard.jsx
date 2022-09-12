import { Statistics } from "./Statistics";
import PropTypes from 'prop-types';
import { Title, StatsSection, StatsList } from './Statistics.styled';

export const StatisticsCard = ({ stats, title }) => {
    return (
        <StatsSection>
            {title && (
                <Title>{title}</Title>
            )}
            <StatsList>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <Statistics
                            key={id}
                            id={id}
                            label={label}
                            percentage={percentage}
                        />
                    )
                })}
            </StatsList>
        </StatsSection>
    );
}

StatisticsCard.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired
}