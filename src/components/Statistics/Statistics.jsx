import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css'; 
function Statistics({title,stats}) {
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i<6; i++) {
            color += letters[Math.floor(Math.random()*16)];
        }
        return color;
    };

    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}

            <ul className={styles.stat}>
                {stats.map(({label, percentage }) => (
                    <li className={styles.item} key= {label} style={{backgroundColor: getRandomColor() }} >
                        <span className={styles.label}>{label}</span>
                        <span className={styles.percentage}>{percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
};
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.string.isRequired,
    })
    ).isRequired,
};

export default Statistics;