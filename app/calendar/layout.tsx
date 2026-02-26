import { metadataFromRegistry } from '@/lib/content-registry';

export const metadata = metadataFromRegistry('/calendar');

export default function CalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
