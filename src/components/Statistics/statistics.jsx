import PropTypes from 'prop-types'
import stats from './data.json'
import { StatList, StatItem, StatSection } from './statistics.styled'

export const Statistics = ({title, stats}) => {
    return (
      <StatSection>
        {title && <h2>{title.toUpperCase()}</h2>}
        <StatList>
          {stats.map(({ id, label, percentage }) => (
          <StatItem key={id} style={{ backgroundColor: getRandomHexColor() }}>
            <label>{label}</label>
            <label>{percentage}%</label>
          </StatItem>
        ))}

    
  </StatList>
</StatSection>
    )
}

function getRandomHexColor() {
  return `#${Math.floor((Math.random() * (1 - 0.1) + 0.1) * 16777215).toString(
    16
  )}`;
}

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number
}