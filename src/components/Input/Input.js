import styles from './input.module.scss'

const Input = ({ type, placeholder, required, onChange, children }) => {
	return (
		<div className={styles.container}>
			<div className={styles.icon}>{children}</div>
			<input
				className={styles.input}
				type={type}
				placeholder={placeholder}
				required={required}
				onChange={onChange}
			/>
		</div>
	)
}

export default Input
