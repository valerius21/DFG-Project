import React, { FC } from 'react'
import { Layout, Switch } from 'antd'
import { useTranslation } from 'react-i18next'

const AppLayout: FC = ({ children }) => {
	const { Content, Footer } = Layout
	const { i18n } = useTranslation()
	return (
		<Layout>
			<Content>
				{children}
			</Content>
			<Footer style={{ textAlign: 'center', height: '100%' }}>
				<div>
					<Switch
						checkedChildren="🇩🇪"
						unCheckedChildren="🇩🇪"
						onChange={() => {
							if (i18n.language === 'de') i18n.changeLanguage('en')
							else i18n.changeLanguage('de')
						}
						}
					/>
				</div>
				<div>
					Written by Valerius Mattfeld, {(new Date().getFullYear())}.
				</div>
			</Footer>
		</Layout>
	)
}

export default AppLayout
