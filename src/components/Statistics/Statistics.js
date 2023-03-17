import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function getRandomHexColor() {
  let backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return backgroundColor;
}

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stat_list}>
        {stats.map(item => (
          <li
            key={item.id}
            className={title ? css.itemLiTitle : css.itemLiNotTitle}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <span>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
