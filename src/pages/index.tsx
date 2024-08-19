import {useTranslation} from '../localization'
import SEO from '../components/SEO'

const Home = () => {
	const {t} = useTranslation()

	return (
		<div>
			<SEO page="home" />
			<h1>{t('Hello')}</h1>
			<p>
				{t(
					'Sometimes it takes longer to get things done than you think.'
				)}
			</p>
		</div>
	)
}

export default Home
