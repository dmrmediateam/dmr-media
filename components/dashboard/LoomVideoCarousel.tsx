'use client'

import { useEffect, useState } from 'react'

interface LoomVideo {
  _id: string
  title: string
  loomUrl: string
  loomEmbedId?: string
  description?: string
  date: string
}

export default function LoomVideoCarousel({ clientId }: { clientId: string }) {
  const [videos, setVideos] = useState<LoomVideo[]>([])
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch(`/api/dashboard/loom-videos?clientId=${clientId}`)
        const data = await res.json()
        if (data.videos) {
          setVideos(data.videos)
        }
      } catch (error) {
        console.error('Failed to fetch Loom videos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()
  }, [clientId])

  // Extract Loom embed ID from URL if not provided
  const getLoomEmbedId = (url: string, embedId?: string): string => {
    if (embedId) return embedId
    
    // Extract ID from Loom URL patterns:
    // https://www.loom.com/share/abc123
    // https://loom.com/share/abc123
    const match = url.match(/loom\.com\/share\/([a-zA-Z0-9]+)/)
    return match ? match[1] : ''
  }

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length)
  }

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length)
  }

  const goToVideo = (index: number) => {
    setCurrentIndex(index)
  }

  if (loading) {
    return (
      <section id="loom-reports" className="scroll-mt-8 bg-white border border-[var(--color-ink-200)] p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
          <div className="h-96 bg-gray-100 rounded"></div>
        </div>
      </section>
    )
  }

  if (videos.length === 0) {
    return (
      <section id="loom-reports" className="scroll-mt-8 bg-white border border-[var(--color-ink-200)] p-8">
        <h2 className="text-3xl font-serif text-[var(--color-off-black)] mb-4">Client Loom Reports</h2>
        <p className="text-[var(--color-ink-300)]">No video reports available yet.</p>
      </section>
    )
  }

  const currentVideo = videos[currentIndex]
  const embedId = getLoomEmbedId(currentVideo.loomUrl, currentVideo.loomEmbedId)

  return (
    <section id="loom-reports" className="scroll-mt-8 bg-white border border-[var(--color-ink-200)] p-8 space-y-6">
      <div>
        <h2 className="text-3xl font-serif text-[var(--color-off-black)] mb-2">Client Loom Reports</h2>
        <p className="text-[var(--color-ink-300)]">Video breakdowns of your metrics and performance</p>
      </div>

      {/* Video Player */}
      <div className="relative">
        {embedId ? (
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg bg-black">
            <iframe
              src={`https://www.loom.com/embed/${embedId}`}
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-0"
              title={currentVideo.title}
            />
          </div>
        ) : (
          <div className="aspect-video bg-[var(--surface-base)] border border-[var(--color-ink-200)] rounded-lg flex items-center justify-center">
            <p className="text-[var(--color-ink-300)]">Invalid Loom video URL</p>
          </div>
        )}
      </div>

      {/* Video Info */}
      <div>
        <h3 className="text-xl font-serif text-[var(--color-off-black)] mb-2">{currentVideo.title}</h3>
        {currentVideo.description && (
          <p className="text-[var(--color-ink-300)] mb-2">{currentVideo.description}</p>
        )}
        <p className="text-sm text-[var(--color-ink-400)]">
          {new Date(currentVideo.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>

      {/* Navigation Controls */}
      {videos.length > 1 && (
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={prevVideo}
            className="px-6 py-3 bg-[var(--color-off-black)] text-[var(--color-off-white)] font-serif text-sm uppercase tracking-[0.15em] hover:opacity-90 transition-opacity disabled:opacity-50"
            disabled={videos.length <= 1}
          >
            Previous
          </button>

          {/* Video Indicators */}
          <div className="flex gap-2">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToVideo(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-[var(--color-off-black)] w-8'
                    : 'bg-[var(--color-ink-200)] hover:bg-[var(--color-ink-300)]'
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextVideo}
            className="px-6 py-3 bg-[var(--color-off-black)] text-[var(--color-off-white)] font-serif text-sm uppercase tracking-[0.15em] hover:opacity-90 transition-opacity disabled:opacity-50"
            disabled={videos.length <= 1}
          >
            Next
          </button>
        </div>
      )}

      {/* Video List */}
      {videos.length > 1 && (
        <div className="border-t border-[var(--color-ink-200)] pt-6">
          <h4 className="text-sm font-serif text-[var(--color-ink-300)] uppercase tracking-wide mb-4">
            All Reports ({videos.length})
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.map((video, index) => (
              <button
                key={video._id}
                onClick={() => goToVideo(index)}
                className={`text-left p-4 border rounded-lg transition-all ${
                  index === currentIndex
                    ? 'border-[var(--color-off-black)] bg-[var(--surface-base)]'
                    : 'border-[var(--color-ink-200)] hover:border-[var(--color-ink-300)] hover:bg-[var(--surface-base)]'
                }`}
              >
                <h5 className="font-serif text-[var(--color-off-black)] mb-2 line-clamp-2">
                  {video.title}
                </h5>
                <p className="text-xs text-[var(--color-ink-400)]">
                  {new Date(video.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
