// styles
import styles from './Modal.module.scss'

// components
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Modal = ({ setShowModal, text }) => {
	return (
		<section className={styles.modal}>
			<div className={styles.modalContent}>
				{documentToReactComponents(text)}

				<form name='contact' netlify-honeypot='bot-field' data-netlify='true'>
					<input type='text' placeholder='Full Name' />
					<input type='text' placeholder='Email Address' />
					<div className='buttonsRow'>
						<button className='button-blue'>Confirm</button>
					</div>
				</form>
				<p className={styles.cancel} onClick={() => setShowModal(false)}>
					Cancel
				</p>
			</div>
		</section>
	)
}

export default Modal
