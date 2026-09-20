import FeaturePreview from '../../components/FeaturePreview.jsx'

export default function IndustrySettings() {
  return (
    <FeaturePreview
      icon="bi-gear"
      title="Settings"
      description="Manage your account security, notification preferences and team access."
      stage="Stage 5"
      bullets={[
        "Change your password and enable two-factor login",
        "Choose which activity sends you an email or in-app alert",
        "Invite teammates to co-manage this company account",
        "Download a copy of your company's data"
      ]}
    />
  )
}
