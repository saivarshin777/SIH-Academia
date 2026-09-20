import FeaturePreview from '../../components/FeaturePreview.jsx'

export default function IndustryMentorship() {
  return (
    <FeaturePreview
      icon="bi-people"
      title="Mentorship"
      description="Pair your engineers and managers with students for 1:1 guidance."
      stage="Stage 5"
      bullets={[
        "Offer mentorship slots with a topic and time commitment",
        "Match with students who request mentorship in that area",
        "Keep a shared log of sessions and next steps",
        "See mentee outcomes, like applications and offers"
      ]}
    />
  )
}
