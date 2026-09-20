import FeaturePreview from '../../components/FeaturePreview.jsx'

export default function StudentPortfolio() {
  return (
    <FeaturePreview
      icon="bi-window-stack"
      title="Digital Portfolio"
      description="Turn your profile into a shareable page recruiters can browse."
      stage="Stage 4"
      bullets={[
        "Auto-build a portfolio from your profile, skills and projects",
        "Pick a layout and choose what's shown publicly",
        "Get a shareable link to include in applications",
        "See who has viewed your portfolio"
      ]}
    />
  )
}
