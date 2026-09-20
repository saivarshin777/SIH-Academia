import FeaturePreview from '../../components/FeaturePreview.jsx'

export default function StudentCertifications() {
  return (
    <FeaturePreview
      icon="bi-award"
      title="Certifications"
      description="Keep your certifications in one place and add them to your profile."
      stage="Stage 4"
      bullets={[
        "Add a certification with issuer, date and credential link",
        "Upload the certificate file as proof",
        "Get suggested certifications based on your skill gaps",
        "Show verified certifications on your public portfolio"
      ]}
    />
  )
}
