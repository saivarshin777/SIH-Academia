import EmptyState from './EmptyState.jsx'

/**
 * Shown for pages whose backend endpoint doesn't exist yet.
 *
 * Unlike the old StagePlaceholder, this doesn't just show a bare
 * "coming soon" badge — it gives the page a real header, explains
 * what the feature will do, and previews the pieces that are already
 * planned, so the page reads as "built, waiting on the API" rather
 * than "not started". It never shows fake data — per project rules
 * (see EmptyState.jsx) — everything here is descriptive copy only.
 */
export default function FeaturePreview({ icon, title, description, stage, bullets = [] }) {
  return (
    <div>
      <div className="d-flex flex-wrap align-items-start gap-3 mb-4">
        <span
          className="d-inline-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
          style={{ width: 44, height: 44, background: 'var(--aic-indigo-tint)', color: 'var(--aic-indigo)' }}
        >
          <i className={`bi ${icon}`} style={{ fontSize: '1.25rem' }} aria-hidden="true" />
        </span>
        <div>
          <h1 className="h4 font-display mb-1">{title}</h1>
          <p className="text-secondary mb-0">{description}</p>
        </div>
      </div>

      <div className="aic-card mb-3">
        <EmptyState
          variant="not-connected"
          title="Not connected to the backend yet"
          description={`This page is built and role-protected, but the API it needs hasn't shipped${stage ? ` (planned for ${stage})` : ''}. Nothing below is real data.`}
        />
      </div>

      {bullets.length > 0 && (
        <div className="aic-card p-4">
          <h2 className="h6 mb-3">What this page will include</h2>
          <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
            {bullets.map((bullet) => (
              <li key={bullet} className="d-flex align-items-start gap-2 small">
                <i className="bi bi-check2 mt-1" style={{ color: 'var(--aic-teal)' }} aria-hidden="true" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
