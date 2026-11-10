import VideoClip from '@/components/landing/VideoClip'

/** Andrew's Catch, Amplify, Nurture recap (3:23:38 to 3:24:36) from his full AI lead generation walkthrough. */
export default function SystemClip({ className = '' }: { className?: string }) {
  return (
    <section className={`px-4 sm:px-6 ${className}`} aria-labelledby="system-clip-heading">
      <div className="mx-auto max-w-2xl text-center">
        <p className="gg-eyebrow gg-eyebrow--strong">In under a minute</p>
        <h2 id="system-clip-heading" className="gg-display mt-3 text-[2rem] font-light leading-[1.1] tracking-tight sm:text-[2.6rem]">
          The system behind every stage
        </h2>
        <p className="gg-body gg-body-lg mx-auto mt-3 max-w-xl">Catch, Amplify, Nurture: how it all fits together.</p>
      </div>
      <div className="mt-8">
        <VideoClip
          videoId="UUjS_e36Vno"
          start={12218}
          end={12276}
          title="Andrew Rohm on the Catch, Amplify, Nurture system"
          caption="Andrew Rohm, from his full AI real estate lead generation walkthrough"
        />
      </div>
    </section>
  )
}
