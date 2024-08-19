import {createContext, useState, useEffect, ReactNode, useContext} from 'react'
import {LocalizationLanguages} from '../types/enums'

interface LanguageContextType {
	lang: LocalizationLanguages
	setLang: (lang: LocalizationLanguages) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined
)

export const LanguageProvider = ({children}: {children: ReactNode}) => {
	const savedLang = localStorage.getItem(
		'website-language'
	) as LocalizationLanguages | null
	const defaultLang = savedLang || LocalizationLanguages.en
	const [lang, setLang] = useState<LocalizationLanguages>(defaultLang)

	useEffect(() => {
		localStorage.setItem('website-language', lang)
	}, [lang])

	return (
		<LanguageContext.Provider value={{lang, setLang}}>
			{children}
		</LanguageContext.Provider>
	)
}

export const useLanguage = () => {
	const context = useContext(LanguageContext)
	if (!context) {
		throw new Error('useLanguage must be used within a LanguageProvider')
	}
	return context
}
