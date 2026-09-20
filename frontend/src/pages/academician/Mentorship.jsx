import FeaturePreview from '../../components/FeaturePreview.jsx'

export default function AcademicianMentorship() {
  return (
    <FeaturePreview
      icon="bi-people"
      title="Mentorship"
      description="Offer 1:1 or group mentorship to students who request it."
      stage="Stage 6"
      bullets={[
        "List the topics and time you're available to mentor on",
        "Accept mentorship requests from students",
        "Keep session notes and shared action items",
        "See the outcomes your mentees go on to achieve"
      ]}
    />
  )
}
