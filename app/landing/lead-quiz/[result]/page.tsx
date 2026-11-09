import { notFound } from 'next/navigation'
import { STAGES, STAGE_ORDER, type StageSlug } from '@/lib/landing/lead-quiz'
import QuizResult from './QuizResult'

export function generateStaticParams() {
  return STAGE_ORDER.map((result) => ({ result }))
}

export const dynamicParams = false

export default async function LeadQuizResultPage({ params }: { params: Promise<{ result: string }> }) {
  const { result } = await params
  if (!(result in STAGES)) notFound()
  return <QuizResult slug={result as StageSlug} />
}
