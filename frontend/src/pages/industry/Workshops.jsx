import FeaturePreview from '../../components/FeaturePreview.jsx'

export default function IndustryWorkshops() {
  return (
    <FeaturePreview
      icon="bi-easel"
      title="Workshops"
      description="Host short sessions to teach students skills your teams actually use."
      stage="Stage 5"
      bullets={[
        "Schedule a workshop with a date, format and capacity",
        "Open registration to students and academicians",
        "Share materials and recordings afterward",
        "Collect attendance and feedback ratings"
      ]}
    />
  )
}
