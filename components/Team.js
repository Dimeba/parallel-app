// styles
import styles from './Team.module.scss'

// components
import TeamMember from './TeamMember'

const Team = ({ content }) => {
	return (
		<section id='team' className={styles.team}>
			<h2>{content.fields.title}</h2>
			<div className={styles.members}>
				{content.fields.team.map(member => (
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
