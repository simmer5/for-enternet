import styles from './infoCard.module.scss'

const InfoCard = ({ infoText = 'No title', data = 'No data' }) => {
	return (
		<div className={styles.container}>
			<div className={styles.infoText}>{infoText}</div>
			<div>{data}</div>
		</div>
	)
}

export default InfoCard
