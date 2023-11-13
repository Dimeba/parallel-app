// styles
import styles from './Team.module.scss'

// components
import TeamMember from './TeamMember'

const Team = ({ team }) => {
	return (
		<section id='team' className={styles.team}>
			{/* <h2>Meet Our Team</h2> */}
			<h2>Meet Our Team</h2>
			<div className={styles.members}>
				{team.map(member => (
					<TeamMember
						key={member.sys.id}
						name={member.fields.name}
						title={member.fields.title}
						tel={member.fields.phone}
						mail={member.fields.email}
						photo={member.fields.photo.fields.file.url}
					/>
				))}
			</div>
		</section>
	)
}

export default Team
