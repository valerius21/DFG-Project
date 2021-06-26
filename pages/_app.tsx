import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import client from '../utils/apollo-client'
import { motion } from 'framer-motion'
import '../i18n/i18n'
import AppLayout from '../components/AppLayout'

function MyApp({ Component, pageProps, router }) {
  return (
    <ApolloProvider client={client}>
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1
        }
      }}>
        <div style={{ background: '#f0f2f5', height: '100vh' }}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </div>
      </motion.div>
    </ApolloProvider>
  )
}

export default MyApp
