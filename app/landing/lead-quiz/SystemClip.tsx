import VideoClip from '@/components/landing/VideoClip'

const VIDEO_ID = 'UUjS_e36Vno'

/**
 * Andrew's AI lead generation walkthrough. `full` shows the whole video (the
 * result report, as a "bookmark this" resource); otherwise just the Catch,
 * Amplify, Nurture recap (3:23:38 to 3:24:36), for the quiz landing page.
 */
export default function SystemClip({ className = '', full = false }: { className?: string; full?: boolean }) {
  return (
    <section className={`px-4 sm:px-6 ${className}`} aria-labelledby="system-clip-heading">
      <div className="mx-auto max-w-2xl text-center">
        <p className="gg-eyebrow gg-eyebrow--strong">{full ? 'The full walkthrough · 3 hr 25 min' : 'In under a minute'}</p>
        <h2 id="system-clip-heading" className="gg-display mt-3 text-[2rem] font-light leading-[1.1] tracking-tight sm:text-[2.6rem]">
          {full ? 'Bookmark this for later' : 'The system behind every stage'}
        </h2>
        <p className="gg-body gg-body-lg mx-auto mt-3 max-w-xl">
          {full ? 'My complete AI lead generation system for real estate agents, step by step.' : 'Catch, Amplify, Nurture: how it all fits together.'}
        </p>
      </div>
      <div className="mt-8">
        {full ? (
          <VideoClip
            videoId={VIDEO_ID}
            title="Andrew Rohm's full AI real estate lead generation walkthrough"
            caption="Andrew Rohm, founder of DMR Media"
          />
        ) : (
          <VideoClip
            videoId={VIDEO_ID}
            start={12218}
            end={12276}
            title="Andrew Rohm on the Catch, Amplify, Nurture system"
            caption="Andrew Rohm, from his full AI real estate lead generation walkthrough"
          />
        )}
      </div>
    </section>
  )
}
