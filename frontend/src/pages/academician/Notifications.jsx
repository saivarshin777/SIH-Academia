import FeaturePreview from '../../components/FeaturePreview.jsx'

export default function AcademicianNotifications() {
  return (
    <FeaturePreview
      icon="bi-bell"
      title="Notifications"
      description="Stay on top of student activity and new collaboration requests."
      stage="Stage 6"
      bullets={[
        "Get notified when a student needs a recommendation",
        "Get alerted to new research and FDP opportunities",
        "See reminders for upcoming workshops and lectures",
        "Control which notifications arrive by email"
      ]}
    />
  )
}
