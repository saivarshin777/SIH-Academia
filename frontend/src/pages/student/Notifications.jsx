import FeaturePreview from '../../components/FeaturePreview.jsx'

export default function StudentNotifications() {
  return (
    <FeaturePreview
      icon="bi-bell"
      title="Notifications"
      description="Stay on top of application updates and new opportunities."
      stage="Stage 4"
      bullets={[
        "Get notified when an application status changes",
        "Get alerted to new postings that match your skills",
        "See reminders for upcoming deadlines and interviews",
        "Control which notifications arrive by email"
      ]}
    />
  )
}
