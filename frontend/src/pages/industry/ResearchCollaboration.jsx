import FeaturePreview from '../../components/FeaturePreview.jsx'

export default function IndustryResearchCollaboration() {
  return (
    <FeaturePreview
      icon="bi-diagram-2"
      title="Research Collaboration"
      description="Partner with academic departments on applied research."
      stage="Stage 5"
      bullets={[
        "Propose a research area and the support you can offer",
        "Browse interested faculty and their publication history",
        "Track joint projects from proposal to outcome",
        "Log any resulting papers, patents or pilots"
      ]}
    />
  )
}
