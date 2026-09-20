import FeaturePreview from '../../components/FeaturePreview.jsx'

export default function StudentSettings() {
  return (
    <FeaturePreview
      icon="bi-gear"
      title="Settings"
      description="Manage your account security and notification preferences."
      stage="Stage 4"
      bullets={[
        "Change your password and enable two-factor login",
        "Choose which activity sends you an email or in-app alert",
        "Control who can see your profile and resume",
        "Download or delete your account data"
      ]}
    />
  )
}
