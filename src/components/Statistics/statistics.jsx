import PropTypes from 'prop-types'
import stats from './data.json'

export const Statistics = (title) => {
    return (
        <section className="statistics">
        <h2 className="title">{title}</h2>

            <ul className='stat-list'>
                <li>
                    <p>{stats}</p>
                </li>

    {/* <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li> */}
  </ul>
</section>
    )
}