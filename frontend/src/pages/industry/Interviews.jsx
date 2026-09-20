import FeaturePreview from '../../components/FeaturePreview.jsx'

export default function IndustryInterviews() {
  return (
    <FeaturePreview
      icon="bi-camera-video"
      title="Interviews"
      description="Schedule and track interviews with accepted candidates."
      stage="Stage 5"
      bullets={[
        "Propose interview slots and let candidates pick one",
        "Attach a video-call link or in-person location",
        "Record interviewer notes and a recommendation",
        "Move a candidate straight to an offer from here"
      ]}
    />
  )
}
