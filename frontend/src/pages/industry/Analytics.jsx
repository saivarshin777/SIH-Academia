import { useEffect, useState } from 'react'
import { getCompanyDashboard } from '../../api/companyApi'
import EmptyState from '../../components/EmptyState.jsx'
import Loading from '../../components/Loading.jsx'
import StatCard from '../../components/StatCard.jsx'

function Bar({ label, value, total, color }) {
  const pct = total > 0 ? Math.round((value / total) * 100) : 0
  return (
    <div className="mb-3">
      <div className="d-flex justify-content-between small mb-1">
        <span>{label}</span>
        <span className="text-secondary">{value} ({pct}%)</span>
      </div>
      <div className="rounded-pill" style={{ background: 'var(--aic-line)', height: 8, overflow: 'hidden' }}>
        <div className="h-100 rounded-pill" style={{ width: `${pct}%`, background: color, transition: 'width 0.3s var(--ease-standard)' }} />
      </div>
    </div>
  )
}

export default function IndustryAnalytics() {
  const [stats, setStats] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    getCompanyDashboard()
      .then(({ data }) => { setStats(data.statistics); setStatus('ready') })
      .catch(() => setStatus('error'))
  }, [])

  if (status === 'loading') return <Loading label="Loading analytics…" fullPage />
  if (status === 'error') return <div className="aic-card"><EmptyState variant="error" description="We couldn't load your analytics. Please refresh the page." /></div>

  const totalOpportunities = stats.total_jobs + stats.total_internships

  return (
    <div>
      <h1 className="h4 font-display mb-1">Analytics</h1>
      <p className="text-secondary mb-4">A live snapshot of your postings and applicant pipeline.</p>

      <div className="row g-3 mb-4">
        <div className="col-sm-6 col-lg-3"><StatCard icon="bi-suitcase-lg" label="Active Jobs" value={stats.active_jobs} trend={`${stats.total_jobs} total`} accent="indigo" /></div>
        <div className="col-sm-6 col-lg-3"><StatCard icon="bi-briefcase" label="Active Internships" value={stats.active_internships} trend={`${stats.total_internships} total`} accent="teal" /></div>
        <div className="col-sm-6 col-lg-3"><StatCard icon="bi-send-check" label="Total Applications" value={stats.total_applications} accent="amber" /></div>
        <div className="col-sm-6 col-lg-3"><StatCard icon="bi-check-circle" label="Accepted" value={stats.accepted_applications} trend={stats.total_applications > 0 ? `${Math.round((stats.accepted_applications / stats.total_applications) * 100)}% of applicants` : undefined} accent="green" /></div>
      </div>

      <div className="row g-3">
        <div className="col-lg-6">
          <div className="aic-card p-4 h-100">
            <h2 className="h6 mb-3">Applications by status</h2>
            {stats.total_applications === 0 ? (
              <EmptyState description="No applications yet — post a job or internship to start receiving them." />
            ) : (
              <>
                <Bar label="Pending" value={stats.pending_applications} total={stats.total_applications} color="var(--aic-amber)" />
                <Bar label="Accepted" value={stats.accepted_applications} total={stats.total_applications} color="var(--aic-green)" />
                <Bar label="Rejected" value={stats.rejected_applications} total={stats.total_applications} color="var(--aic-red)" />
              </>
            )}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="aic-card p-4 h-100">
            <h2 className="h6 mb-3">Postings by type</h2>
            {totalOpportunities === 0 ? (
              <EmptyState description="No jobs or internships posted yet." />
            ) : (
              <>
                <Bar label="Jobs" value={stats.total_jobs} total={totalOpportunities} color="var(--aic-indigo)" />
                <Bar label="Internships" value={stats.total_internships} total={totalOpportunities} color="var(--aic-teal)" />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
