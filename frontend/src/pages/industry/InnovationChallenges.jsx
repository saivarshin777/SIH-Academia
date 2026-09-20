import FeaturePreview from '../../components/FeaturePreview.jsx'

export default function IndustryInnovationChallenges() {
  return (
    <FeaturePreview
      icon="bi-lightbulb"
      title="Innovation Challenges"
      description="Run open problem-solving challenges and hackathons for students."
      stage="Stage 5"
      bullets={[
        "Publish a challenge brief with rules, prizes and deadline",
        "Accept team registrations and submissions",
        "Score entries with your judging panel",
        "Reach out directly to standout participants"
      ]}
    />
  )
}
