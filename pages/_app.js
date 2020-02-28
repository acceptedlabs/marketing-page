import App from 'next/app'

// import styling
import 'source-serif-pro/source-serif-pro.css'
import '../styles/bulma.min.css'
import '../styles/index.css'

class AcceptedMarketing extends App {
	render() {
		const { Component, pageProps } = this.props
		return (
			<Component {...pageProps} />
		)
	}
}

export default AcceptedMarketing