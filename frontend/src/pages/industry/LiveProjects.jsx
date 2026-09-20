import FeaturePreview from '../../components/FeaturePreview.jsx'

export default function IndustryLiveProjects() {
  return (
    <FeaturePreview
      icon="bi-diagram-3"
      title="Live Projects"
      description="Share real company problems for students and faculty to work on together."
      stage="Stage 5"
      bullets={[
        "Post a live project brief with scope, timeline and required skills",
        "Track which students and teams are working on it",
        "Review milestone submissions and leave feedback",
        "Convert a strong project into a job or internship offer"
      ]}
    />
  )
}
