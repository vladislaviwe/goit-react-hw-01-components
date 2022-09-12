import { StatsListInfo } from './Statistics.styled';

export const Statistics = ({ id, label, percentage }) => {
    return (
        <li key={id}>
            <StatsListInfo>{label}</StatsListInfo>
            <StatsListInfo>{percentage}</StatsListInfo>
        </li>
    )
}
