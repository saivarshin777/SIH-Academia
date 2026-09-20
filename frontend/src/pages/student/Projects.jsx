import FeaturePreview from '../../components/FeaturePreview.jsx'

export default function StudentProjects() {
  return (
    <FeaturePreview
      icon="bi-kanban"
      title="Projects"
      description="Log the projects you've built so they show up on your profile."
      stage="Stage 4"
      bullets={[
        "Add a project with a description, tech stack and links",
        "Attach the skills it demonstrates so it strengthens your matches",
        "Upload screenshots, a demo link or a repo",
        "Feature your best projects at the top of your profile"
      ]}
    />
  )
}
