//  styles
import styles from './BlueBox.module.scss'

const BlueBox = ({ children, newClass }) => {
	return <div className={`${styles.blueBox} ${newClass}`}>{children}</div>
}

export default BlueBox
