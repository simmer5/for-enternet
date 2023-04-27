import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
	setUserName,
	setUserPassword,
	setIsUser,
	setToken,
	setIsLoginError,
} from '../../Redux/userSlice'
import { loginUser } from '../../Api/loginUser'
import styles from './login.module.scss'
import LogInBtn from '../../components/LogInBtn/LogInBtn'
import Input from '../../components/Input/Input'
import Logo from '../../img/logo.svg'
import LoginErrorAlert from '../../components/LoginErrorAlert/LoginErrorAlert'
import { IconUser } from '../../components/Icons/IconUser'
import { IconLogin } from '../../components/Icons/IconLogin'

const Login = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const userCredentials = useSelector(state => state.userDataStore.credentials)
	const isLoginError = useSelector(state => state.userDataStore.isLoginError)

	const handleLogin = async e => {
		e.preventDefault()
		try {
			const response = await loginUser(userCredentials)

			if ('token' in response) {
				dispatch(setIsUser(true))
				dispatch(setToken(response['token']))
				sessionStorage.setItem('accessToken', response['token'])
				sessionStorage.setItem('user', JSON.stringify(response['username']))

				navigate('servers')
			}
		} catch (error) {
			dispatch(setIsLoginError(true))
			setTimeout(() => dispatch(setIsLoginError(false)), 3000)
		}
	}

	return (
		<div className={styles.container}>
			<img src={Logo} alt='Logo' />
			<form onSubmit={handleLogin}>
				<Input
					type='text'
					placeholder='Username'
					required={true}
					onChange={e => dispatch(setUserName(e.target.value))}
				>
					<IconUser />
				</Input>

				<Input
					type='password'
					placeholder='Password'
					required={true}
					onChange={e => dispatch(setUserPassword(e.target.value))}
				>
					<IconLogin />
				</Input>

				<LogInBtn title='Log In' />
			</form>
			{isLoginError ? <LoginErrorAlert /> : ''}
		</div>
	)
}

export default Login
