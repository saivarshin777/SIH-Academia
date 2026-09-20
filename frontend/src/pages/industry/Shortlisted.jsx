import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCompanyApplications, updateCompanyApplicationStatus } from '../../api/companyApi'
import EmptyState from '../../components/EmptyState.jsx'
import Loading from '../../components/Loading.jsx'

export default function IndustryShortlisted() {
  const [applications, setApplications] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')
  const [updating, setUpdating] = useState(null)

  const load = () => getCompanyApplications().then(({ data }) => { setApplications(data || []); setStatus('ready') }).catch(() => setStatus('error'))
  useEffect(() => { load() }, [])

  const reject = async (id) => {
    if (!window.confirm('Move this candidate to rejected?')) return
    setUpdating(id)
    setError('')
    try { await updateCompanyApplicationStatus(id, 'rejected'); await load() } catch (requestError) { setError(requestError.response?.data?.detail || 'Could not update this application.') } finally { setUpdating(null) }
  }

  if (status === 'loading') return <Loading label="Loading shortlisted candidates…" fullPage />
  if (status === 'error') return <div className="aic-card"><EmptyState variant="error" description="We couldn't load your shortlist. Please refresh the page." /></div>

  const shortlisted = applications.filter((application) => application.application_status === 'accepted')

  return (
    <div>
      <h1 className="h4 font-display mb-1">Shortlisted</h1>
      <p className="text-secondary mb-4">Candidates you've accepted, ready for the next step.</p>
      {error && <div className="alert alert-danger small">{error}</div>}
      {shortlisted.length === 0 ? (
        <div className="aic-card">
          <EmptyState
            icon="bi-person-check"
            title="No one shortlisted yet"
            description="Accept a candidate from Applications and they'll show up here."
            action={<Link className="btn btn-aic-outline btn-sm" to="/industry/applicants">Review Applications</Link>}
          />
        </div>
      ) : (
        <div className="d-flex flex-column gap-3">
          {shortlisted.map((application) => (
            <div className="aic-card p-4" key={application.application_id}>
              <div className="d-flex flex-wrap justify-content-between gap-3">
                <div>
                  <span className="text-uppercase small text-secondary">{application.opportunity_type}</span>
                  <h2 className="h6 mt-1 mb-1">{application.student_name}</h2>
                  <p className="mb-1">{application.opportunity_title}</p>
                  <p className="text-secondary small mb-0">
                    {application.student_college || 'College not provided'} · {application.student_branch || 'Branch not provided'} · CGPA {application.student_cgpa ?? 'Not provided'}
                  </p>
                </div>
                <div className="text-end">
                  <span className="aic-badge aic-badge-success">Shortlisted</span>
                  <div className="d-flex gap-2 mt-2">
                    <Link className="btn btn-aic-outline btn-sm" to={`/company/applications/${application.application_id}`}>View Application</Link>
                    <button className="btn btn-aic-outline btn-sm" disabled={updating === application.application_id} onClick={() => reject(application.application_id)}>Move to Rejected</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
