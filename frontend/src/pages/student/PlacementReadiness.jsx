import FeaturePreview from '../../components/FeaturePreview.jsx'

export default function StudentPlacementReadiness() {
  return (
    <FeaturePreview
      icon="bi-graph-up-arrow"
      title="Placement Readiness"
      description="See how ready you are for placements, and what to work on next."
      stage="Stage 4"
      bullets={[
        "Get a readiness score based on skills, resume and applications",
        "See exactly which gaps are holding your score back",
        "Get a suggested checklist ordered by impact",
        "Track how your score changes over the semester"
      ]}
    />
  )
}
