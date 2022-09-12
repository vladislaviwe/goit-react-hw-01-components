import PropTypes from 'prop-types';
import { StatsListInfo } from './Statistics.styled';

export const Statistics = ({ id, label, percentage }) => {
    return (
        <li>
            <StatsListInfo>{label}</StatsListInfo>
            <StatsListInfo>{percentage}</StatsListInfo>
        </li>
    )
}

Statistics.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}