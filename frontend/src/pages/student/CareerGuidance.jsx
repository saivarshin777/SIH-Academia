import FeaturePreview from '../../components/FeaturePreview.jsx'

export default function StudentCareerGuidance() {
  return (
    <FeaturePreview
      icon="bi-compass"
      title="Career Guidance"
      description="Get direction on which roles and skills fit where you want to go."
      stage="Stage 4"
      bullets={[
        "Tell us your target role or industry",
        "Get a suggested skill roadmap to close the gap",
        "See career paths alumni with a similar profile have taken",
        "Book a session with an academician mentor"
      ]}
    />
  )
}
