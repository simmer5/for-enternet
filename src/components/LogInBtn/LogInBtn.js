import styles from './loginBtn.module.scss'

const LogInBtn = ({ title }) => {
	return (
		<button className={styles.button} type='submit' value='Log In'>
			{title}
		</button>
	)
}

export default LogInBtn
