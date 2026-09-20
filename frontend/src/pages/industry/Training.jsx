import FeaturePreview from '../../components/FeaturePreview.jsx'

export default function IndustryTraining() {
  return (
    <FeaturePreview
      icon="bi-mortarboard"
      title="Training"
      description="Run skill-building programs for students before they apply to your roles."
      stage="Stage 5"
      bullets={[
        "Create a training track with modules and a schedule",
        "See who has enrolled and their completion progress",
        "Issue a completion badge students can add to their profile",
        "Use training completion as a filter when reviewing applicants"
      ]}
    />
  )
}
