import GoogleGeneralHeroForm from '@/components/landing/GoogleGeneralHeroForm'
import type { ChannelLandingConfig } from '@/lib/landing/channel-landing-types'

type Props = {
  config: Pick<
    ChannelLandingConfig,
    | 'formName'
    | 'heroTitleSegments'
    | 'heroTitle'
    | 'heroTitleEmphasis'
    | 'heroIntro'
    | 'heroIntroSegments'
    | 'heroIntroParagraphs'
  >
}

function HeroTitle({
  heroTitleSegments,
  heroTitle,
  heroTitleEmphasis,
}: Pick<Props['config'], 'heroTitleSegments' | 'heroTitle' | 'heroTitleEmphasis'>) {
  if (heroTitleSegments) {
    return (
      <>
        {heroTitleSegments.map((segment, i) =>
          segment.italic ? (
            <em key={i} className="italic">
              {segment.text}
            </em>
          ) : (
            <span key={i}>{segment.text}</span>
          )
        )}
      </>
    )
  }
  if (heroTitle) return heroTitle
  return (
    <>
      The Last Real Estate Marketing <em className="italic">{heroTitleEmphasis}</em> You&apos;ll Ever Need.
    </>
  )
}

function HeroIntro({ config }: { config: Props['config'] }) {
  const { heroIntroParagraphs, heroIntroSegments, heroIntro } = config

  if (heroIntroParagraphs?.length) {
    const paragraph = heroIntroParagraphs[0]
    return (
      <p className="gg-hero-intro">
        {paragraph.map((segment, i) =>
          segment.italic ? (
            <strong key={i} className="gg-hero-emphasis">
              {segment.text}
            </strong>
          ) : (
            <span key={i}>{segment.text}</span>
          )
        )}
      </p>
    )
  }

  if (heroIntroSegments) {
    return (
      <p className="gg-hero-intro">
        {heroIntroSegments.map((segment, i) =>
          segment.italic ? (
            <em key={i} className="italic">
              {segment.text}
            </em>
          ) : (
            <span key={i}>{segment.text}</span>
          )
        )}
      </p>
    )
  }

  if (!heroIntro) return null
  return <p className="gg-hero-intro">{heroIntro}</p>
}

export default function GoogleGeneralHero({ config }: Props) {
  const { formName } = config

  return (
    <section
      id="top"
      className="gg-hero-conversion scroll-mt-6 border-b border-[var(--color-ink-200)]"
      aria-labelledby="channel-landing-hero-title"
    >
      <div className="container-max px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:pb-24">
        <div className="gg-hero-grid grid items-start gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-center lg:gap-16 xl:gap-20">
          <div className="gg-hero-copy flex flex-col justify-center lg:max-w-xl xl:max-w-none">
            <p className="gg-hero-trust-line">
              <span className="gg-hero-trust-copy">
                <span className="gg-hero-badge-stars" aria-hidden>
                  ★★★★★
                </span>
                5 stars on Trustpilot &amp; Google
              </span>
              <img
                src="/images/landing/google-general/client-headshots.png?v=20260525"
                alt=""
                width={194}
                height={109}
                className="gg-hero-trust-headshots"
                decoding="async"
              />
            </p>

            <h1
              id="channel-landing-hero-title"
              className="gg-display gg-hero-title font-light tracking-tight"
            >
              <HeroTitle
                heroTitleSegments={config.heroTitleSegments}
                heroTitle={config.heroTitle}
                heroTitleEmphasis={config.heroTitleEmphasis}
              />
            </h1>

            <HeroIntro config={config} />
          </div>

          <div className="gg-hero-form-col">
            <div className="gg-hero-form-shell">
              <GoogleGeneralHeroForm formName={formName} variant="conversion" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
