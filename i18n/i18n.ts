import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'



const resources = {
	en: {
		translation: {
			"welcome": "Doggo",
			'done': 'Done',
			'thanks': 'Thanks for participating!'
		}
	},
	de: {
		translation: {
			"welcome": "Hond",
			'done': 'Fertig',
			'thanks': 'Vielen Dank für deine Teilnahme!'
		}
	}
}



i18n.use(initReactI18next)
	.init({
		resources,
		lng: 'en',
		interpolation: {
			escapeValue: false
		}
	})

export default i18n
