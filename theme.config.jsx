import { useConfig } from 'nextra-theme-docs'

export default {
  logo: (
    <span style={{ fontWeight: 800, fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em' }}>
      PLAYBOOK<span style={{ color: 'var(--brand-accent, #2563eb)' }}>.CORE</span>
    </span>
  ),
  project: {
    link: 'https://github.com/your-org/your-repo',
  },
  docsRepositoryBase: 'https://github.com/your-org/your-repo/blob/main',
  footer: {
    content: (
      <span>
        {new Date().getFullYear()} © Built for Self-Directed Professionals.
      </span>
    ),
  },
  head: function useHead() {
    const { title } = useConfig()
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <title>{title ? `${title} – Playbook` : 'Playbook'}</title>
      </>
    )
  },
  primaryHue: 220,
  darkMode: true,
}
