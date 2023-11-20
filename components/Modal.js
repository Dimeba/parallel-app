// styles
import styles from './Modal.module.scss'

// components
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Modal = ({ setShowModal, text }) => {
	return (
		<section className={styles.modal}>
			<div className={styles.modalContent}>
				{documentToReactComponents(text)}

				<form
					name='contact'
					method='POST'
					netlify
					onSubmit={e => {
						e.preventDefault()
						setShowModal(false)
					}}
				>
					<input type='text' placeholder='Full Name' />
					<input type='email' placeholder='Email Address' />
					<button className='button-blue'>Confirm</button>
				</form>
				<p className={styles.cancel} onClick={() => setShowModal(false)}>
					Cancel
				</p>
			</div>
		</section>
	)
}

export default Modal
