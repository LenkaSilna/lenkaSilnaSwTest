import { useTranslation } from './localization';
import Layout from './components/Layout';

function App() {
  const { t } = useTranslation();

  return (
    <Layout>
      <h1>{t('Hello')}</h1>
      <p className="read-the-docs">
        {t('Sometimes it takes longer to get things done than you think.')}
      </p>
    </Layout>
  );
}

export default App;