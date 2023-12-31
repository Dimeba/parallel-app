// styles
import styles from './Modal.module.scss'

// components
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Modal = ({ showModal, setShowModal, text }) => {
	return (
		<section
			className={styles.modal}
			style={{ display: showModal ? 'flex' : 'none' }}
		>
			<div className={styles.modalContent}>
				{documentToReactComponents(text)}

				<form
					name='contact'
					netlify-honeypot='bot-field'
					data-netlify='true'
					// onSubmit={e => {
					// 	e.preventDefault()
					// 	setShowModal(false)
					// }}
				>
					<input type='hidden' name='form-name' value='contact' />
					<input
						type='text'
						id='name'
						name='name'
						placeholder='Full Name'
						required
					/>
					<input
						type='email'
						id='email'
						name='email'
						placeholder='Email Address'
						required
					/>
					<textarea
						name='message'
						id='message'
						placeholder='Message (Optional)'
					/>
					<button className='button-blue' type='submit'>
						Confirm
					</button>
				</form>
				<p className={styles.cancel} onClick={() => setShowModal(false)}>
					Cancel
				</p>
			</div>
		</section>
	)
}

export default Modal
