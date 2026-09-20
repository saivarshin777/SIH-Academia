import { useState } from 'react'
import { Link } from 'react-router-dom'
import { createCompanyInternship } from '../../api/companyApi'
import OpportunityForm from '../../components/OpportunityForm.jsx'

export default function IndustryPostInternship() {
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [posted, setPosted] = useState(null)

  const save = async (payload) => {
    setSaving(true)
    setError('')
    try {
      const { data } = await createCompanyInternship(payload)
      setPosted(data)
    } catch (requestError) {
      setError(requestError.response?.data?.detail || 'Could not post the internship. Please check the fields and try again.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div>
      <h1 className="h4 font-display mb-1">Post an Internship</h1>
      <p className="text-secondary mb-4">Publish an internship for students to discover and apply to.</p>

      {posted ? (
        <div className="aic-card p-4 text-center py-5">
          <i className="bi bi-check-circle" style={{ fontSize: '2rem', color: 'var(--aic-green)' }} aria-hidden="true" />
          <h2 className="h6 mt-3 mb-1">"{posted.title}" is live</h2>
          <p className="text-secondary small mb-3" style={{ maxWidth: 420, margin: '0 auto' }}>
            Students can now find and apply to this internship. You can edit or close it any time from Manage Internships.
          </p>
          <div className="d-flex justify-content-center gap-2">
            <Link className="btn btn-aic-primary btn-sm" to="/industry/manage-internships">Go to Manage Internships</Link>
            <button className="btn btn-aic-outline btn-sm" onClick={() => setPosted(null)}>Post Another Internship</button>
          </div>
        </div>
      ) : (
        <>
          {error && <div className="alert alert-danger small">{error}</div>}
          <OpportunityForm type="internship" initialValue={null} saving={saving} onSave={save} />
        </>
      )}
    </div>
  )
}
