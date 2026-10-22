/** Award badge artwork shown on client website screenshots. Both share the same 351:424 shape. */

export type AwardBadge = { src: string; alt: string; href?: string }

export const DESIGNRUSH_NOMINEE_BADGE: AwardBadge = {
  src: '/images/ClientWebsiteImages/designrush-design-awards-nominee-carole-tierney.png',
  alt: 'DesignRush.com Design Awards Nominee',
}

export const AWWWARDS_NOMINEE_BADGE: AwardBadge = {
  src: '/images/ClientWebsiteImages/awwwards-nominee-badge.png',
  alt: 'Awwwards Nominee',
}

/** Alexa Devaney's site is nominated on both DesignRush and Awwwards. */
export const ALEXA_DEVANEY_BADGES: readonly AwardBadge[] = [DESIGNRUSH_NOMINEE_BADGE, AWWWARDS_NOMINEE_BADGE]
