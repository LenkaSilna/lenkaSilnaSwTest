import {useLanguage} from '../context/LanguageContext'

const cs = {
	'Hello': 'Ahoj',
	'Software testing': 'Testování softwaru',
	'Sometimes it takes longer to get things done than you think.':
		'Někdy to trvá déle, než si myslíte.',
} as const

export type LocalisationString = keyof typeof cs

const esp: Record<LocalisationString, string> = {
	'Hello': 'Hola',
	'Software testing': 'Pruebas de software',
	'Sometimes it takes longer to get things done than you think.':
		'A veces toma más tiempo de lo que piensas.',
} as const

const de: Record<LocalisationString, string> = {
	'Hello': 'Hallo',
	'Software testing': 'Software-Test',
	'Sometimes it takes longer to get things done than you think.':
		'Manchmal dauert es länger, als man denkt.',
} as const

const en: Record<LocalisationString, string> = {
	'Hello': 'Hello',
	'Software testing': 'Software Testing',
	'Sometimes it takes longer to get things done than you think.':
		'Sometimes it takes longer to get things done than you think.',
} as const

const strings = {
	de,
	cs,
	en,
	esp,
}

export function useTranslation() {
	const {lang} = useLanguage()

	return {
		t: (key: LocalisationString): string => {
			return strings[lang]?.[key] || key
		},
	}
}
