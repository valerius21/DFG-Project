import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'



const resources = {
	en: {
		translation: {
			'title': 'DFG Study',
			'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			'uidStart': 'User ID (optional)',
			'uid': 'User ID',
			'clipboardInfo': 'Copy to clipboard',
			'clipboardTitle': 'Clipboard',
			'clipboardDesc': 'User ID copied to cliboard!',
			'tooltipText': 'With the User ID you can continue the study to a later point in time.',
			'start': 'Start',
			'done': 'Done',
			'thanks': 'Thanks for participating!',
			'questionOne': 'Classify the picture regarding its sensitivity?',
			'questionTwo': 'With whom would you be most likely to share this picture?',
			'continue': 'Continue',
			'progress': 'Progress',
		}
	},
	de: {
		translation: {
			'title': 'DFG Studie',
			'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			'uidStart': 'User ID (optional)',
			'uid': 'User ID',
			'clipboardInfo': 'In die Zwischenablage',
			'clipboardTitle': 'Zwischenablage',
			'clipboardDesc': 'Benutzerkennung wurde in die Zwischenablage kopiert!',
			'tooltipText': 'Mit der ID können Sie zu einem späteren Zeitpunkt die Studie fortsetzen.',
			'start': 'Start',
			'done': 'Fertig',
			'thanks': 'Vielen Dank für deine Teilnahme!',
			'questionOne': 'Wie würden Sie die Empfindlichkeit des Bildes bewerten?',
			'questionTwo': 'Mit wem würden Sie dieses Foto teilen?',
			'continue': 'Weiter',
			'progress': 'Fortschritt',
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
