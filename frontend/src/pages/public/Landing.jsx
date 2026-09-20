import { Link } from 'react-router-dom'

const FEATURES = [
  {
    icon: 'bi-diagram-3',
    title: 'AI-powered skill mapping',
    body: 'Every student\u2019s technical and soft skills are captured in one structured profile that industry and academia can both read.',
  },
  {
    icon: 'bi-briefcase',
    title: 'Internship and job matching',
    body: 'Opportunities are ranked against a student\u2019s actual skill profile, not just keywords in a resume.',
  },
  {
    icon: 'bi-bar-chart-steps',
    title: 'Skill-gap analysis',
    body: 'See exactly which industry-required skills are missing or only partially met, and what to learn next.',
  },
  {
    icon: 'bi-people',
    title: 'Industry collaboration',
    body: 'Companies post live projects, mentorship, and training programs directly to relevant students and faculty.',
  },
  {
    icon: 'bi-window-stack',
    title: 'Digital student portfolio',
    body: 'Skills, projects, certifications, and internships in one shareable, verified portfolio.',
  },
  {
    icon: 'bi-graph-up-arrow',
    title: 'Placement intelligence',
    body: 'A readiness score built from resume strength, skill match, and interview preparedness.',
  },
]

const WORKFLOW = [
  { label: 'Student skills', icon: 'bi-person-badge' },
  { label: 'AI skill analysis', icon: 'bi-cpu' },
  { label: 'Skill-gap detection', icon: 'bi-bar-chart-steps' },
  { label: 'Learning recommendations', icon: 'bi-lightbulb' },
  { label: 'Internship / job matching', icon: 'bi-briefcase' },
  { label: 'Placement readiness', icon: 'bi-graph-up-arrow' },
]

const STATS = [
  { value: '4', label: 'Connected roles', sub: 'Students · Academia · Industry · Admin' },
  { value: 'AI', label: 'Skill-based matching', sub: 'Beyond keyword resumes' },
  { value: '360\u00b0', label: 'Student profile', sub: 'Skills · projects · placements' },
  { value: '1', label: 'Unified platform', sub: 'One portal, every workflow' },
]

const ROLES = [
  { icon: 'bi-mortarboard', title: 'Students', body: 'Map skills, close gaps, and land matched internships and jobs.' },
  { icon: 'bi-easel2', title: 'Academicians', body: 'Mentor, run FDPs, and collaborate on live industry projects.' },
  { icon: 'bi-building', title: 'Industry', body: 'Post roles, discover matched talent, and drive research collaboration.' },
  { icon: 'bi-shield-check', title: 'Institutions', body: 'Track placement analytics, skill demand, and outcomes at scale.' },
]

export default function Landing() {
  return (
    <div>
      {/* Hero */}
      <section className="aic-grid-bg position-relative overflow-hidden py-5 py-lg-6">
        <div className="container py-lg-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-7 aic-fade-up">
              <span className="aic-badge aic-badge-ai mb-3">
                <i className="bi bi-stars" /> Smart India Hackathon &middot; AI platform
              </span>
              <h1 className="display-4 fw-bold font-display mb-3" style={{ maxWidth: 660, lineHeight: 1.05 }}>
                Connecting <span className="gradient-text">academia</span> with{' '}
                <span className="gradient-text">industry</span> through AI
              </h1>
              <p className="text-secondary mb-4" style={{ maxWidth: 560, fontSize: '1.08rem' }}>
                Skill mapping, skill-gap analysis, internships, placements, and faculty
                collaboration &mdash; brought together on one intelligent platform for students,
                academicians, industries, and institutions.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/register" className="btn btn-aic-primary btn-lg">
                  Get Started <i className="bi bi-arrow-right ms-1" />
                </Link>
                <Link to="/opportunities" className="btn btn-aic-outline btn-lg">
                  Explore Opportunities
                </Link>
              </div>
              <div className="d-flex flex-wrap align-items-center gap-4 mt-4 text-secondary small">
                <span className="d-inline-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill" style={{ color: 'var(--aic-green)' }} /> Skill-based matching
                </span>
                <span className="d-inline-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill" style={{ color: 'var(--aic-green)' }} /> Verified portfolios
                </span>
                <span className="d-inline-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill" style={{ color: 'var(--aic-green)' }} /> Live analytics
                </span>
              </div>
            </div>

            <div className="col-lg-5 aic-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="aic-card aic-glow p-4 p-md-4 aic-float">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <p className="small text-uppercase mb-0" style={{ letterSpacing: '0.05em', color: 'var(--aic-ink-soft)' }}>
                    Placement readiness
                  </p>
                  <span className="aic-badge aic-badge-ai">
                    <i className="bi bi-cpu" /> Live
                  </span>
                </div>
                {[
                  { label: 'Skill match', value: 84 },
                  { label: 'Resume strength', value: 71 },
                  { label: 'Interview readiness', value: 62 },
                ].map((row) => (
                  <div key={row.label} className="mb-3">
                    <div className="d-flex justify-content-between small mb-1">
                      <span className="text-secondary">{row.label}</span>
                      <span className="fw-semibold">{row.value}%</span>
                    </div>
                    <div className="progress" style={{ height: 8 }}>
                      <div className="progress-bar" style={{ width: `${row.value}%` }} />
                    </div>
                  </div>
                ))}
                <div className="d-flex align-items-center gap-2 mt-3 pt-3" style={{ borderTop: '1px solid var(--aic-line)' }}>
                  <span className="aic-brand-mark d-inline-flex align-items-center justify-content-center rounded-3" style={{ width: 34, height: 34 }}>
                    <i className="bi bi-stars" />
                  </span>
                  <p className="small text-secondary mb-0">
                    Illustrative preview &mdash; your dashboard shows real, backend-generated scores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-4">
        <div className="container">
          <div className="aic-card p-4">
            <div className="row g-4 text-center text-md-start">
              {STATS.map((s) => (
                <div className="col-6 col-md-3" key={s.label}>
                  <p className="display-6 fw-bold font-display mb-1 gradient-text">{s.value}</p>
                  <p className="fw-semibold mb-0 small">{s.label}</p>
                  <p className="text-muted mb-0" style={{ fontSize: '0.78rem' }}>{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="py-5">
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="aic-badge aic-badge-brand mb-3">
              <i className="bi bi-grid-1x2" /> Platform capabilities
            </span>
            <h2 className="h1 fw-bold font-display mb-2">Everything the ecosystem needs</h2>
            <p className="text-secondary mx-auto" style={{ maxWidth: 560 }}>
              One connected system for skills, opportunities, and outcomes.
            </p>
          </div>
          <div className="row g-4">
            {FEATURES.map((f) => (
              <div className="col-md-6 col-lg-4" key={f.title}>
                <div className="aic-card aic-hover-lift p-4 h-100">
                  <span
                    className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3"
                    style={{ width: 48, height: 48, background: 'var(--aic-grad-soft)', border: '1px solid var(--aic-line)', color: 'var(--aic-indigo-deep)' }}
                  >
                    <i className={`bi ${f.icon}`} style={{ fontSize: '1.3rem' }} aria-hidden="true" />
                  </span>
                  <h3 className="h5 mb-2">{f.title}</h3>
                  <p className="text-secondary small mb-0">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="py-5">
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="aic-badge aic-badge-brand mb-3">
              <i className="bi bi-people" /> Built for everyone
            </span>
            <h2 className="h1 fw-bold font-display mb-0">One platform, four roles</h2>
          </div>
          <div className="row g-4">
            {ROLES.map((r) => (
              <div className="col-sm-6 col-lg-3" key={r.title}>
                <div className="aic-card aic-hover-lift p-4 h-100 text-center">
                  <span
                    className="aic-brand-mark d-inline-flex align-items-center justify-content-center rounded-4 mb-3"
                    style={{ width: 56, height: 56, fontSize: '1.5rem' }}
                  >
                    <i className={`bi ${r.icon}`} aria-hidden="true" />
                  </span>
                  <h3 className="h5 mb-2">{r.title}</h3>
                  <p className="text-secondary small mb-0">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-5">
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="aic-badge aic-badge-ai mb-3">
              <i className="bi bi-signpost-split" /> The journey
            </span>
            <h2 className="h1 fw-bold font-display mb-0">How a student moves through the platform</h2>
          </div>
          <div className="d-flex flex-column flex-lg-row align-items-stretch justify-content-center gap-3">
            {WORKFLOW.map((step, i) => (
              <div key={step.label} className="d-flex flex-lg-column align-items-center gap-2">
                <div className="aic-card aic-hover-lift px-3 py-3 text-center d-flex flex-column align-items-center gap-2" style={{ minWidth: 170 }}>
                  <span
                    className="d-inline-flex align-items-center justify-content-center rounded-3"
                    style={{ width: 40, height: 40, background: 'var(--aic-indigo-tint)', color: 'var(--aic-indigo-deep)' }}
                  >
                    <i className={`bi ${step.icon}`} style={{ fontSize: '1.1rem' }} aria-hidden="true" />
                  </span>
                  <span className="small fw-semibold">{step.label}</span>
                </div>
                {i < WORKFLOW.length - 1 && (
                  <>
                    <i className="bi bi-arrow-right d-none d-lg-inline" style={{ color: 'var(--aic-indigo)' }} aria-hidden="true" />
                    <i className="bi bi-arrow-down d-lg-none" style={{ color: 'var(--aic-indigo)' }} aria-hidden="true" />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5">
        <div className="container py-4">
          <div className="aic-card aic-glow p-5 text-center position-relative overflow-hidden">
            <div className="position-relative">
              <h2 className="display-6 fw-bold font-display mb-3">
                Ready to bridge <span className="gradient-text">skills and opportunity?</span>
              </h2>
              <p className="text-secondary mb-4 mx-auto" style={{ maxWidth: 520 }}>
                Join students, academicians, and industries building the future of skill-based placements.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link to="/register" className="btn btn-aic-primary btn-lg">
                  Get Started <i className="bi bi-arrow-right ms-1" />
                </Link>
                <Link to="/login" className="btn btn-aic-outline btn-lg">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 border-top" style={{ borderColor: 'var(--aic-line)' }}>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="aic-brand-mark d-inline-flex align-items-center justify-content-center rounded-3" style={{ width: 32, height: 32 }}>
                  <i className="bi bi-diagram-3-fill" />
                </span>
                <span className="fw-bold font-display">Academia&ndash;Industry Portal</span>
              </div>
              <p className="text-secondary small mt-2 mb-0" style={{ maxWidth: 300 }}>
                An AI-powered platform connecting students, academicians, industries, and institutions.
              </p>
            </div>
            <div className="col-6 col-md-4">
              <h3 className="h6 mb-3">Platform</h3>
              <ul className="list-unstyled small">
                <li className="mb-2"><Link to="/about" className="text-secondary">About</Link></li>
                <li className="mb-2"><Link to="/opportunities" className="text-secondary">Explore Opportunities</Link></li>
                <li className="mb-2"><Link to="/register" className="text-secondary">Get Started</Link></li>
              </ul>
            </div>
            <div className="col-6 col-md-4">
              <h3 className="h6 mb-3">Account</h3>
              <ul className="list-unstyled small">
                <li className="mb-2"><Link to="/login" className="text-secondary">Log in</Link></li>
                <li className="mb-2"><Link to="/register" className="text-secondary">Register</Link></li>
              </ul>
            </div>
          </div>
          <p className="text-muted small mt-4 mb-0">
            &copy; {new Date().getFullYear()} Academia&ndash;Industry Collaboration Portal.
          </p>
        </div>
      </footer>
    </div>
  )
}
