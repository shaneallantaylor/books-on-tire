export const dictionary = {
  squishPlayAlt: 'Clear blue skies over a desert landscape with two hammock posts in the foreground.',
  squishBergAlt: 'The faces of author and his partner laying back in hammocks, each face is not fully in frame. The author did his best taking this photo, but his partner was not impressed.',
  squishArmAlt: 'Bridge Party.',
  squishDay2Alt: 'Alyssa looking for a bird.',
  squishVetAlt: 'The Northern edge of the Preserve.',
}

export const imagesToGet = [
  {
    name: 'squish-play',
    orientation: 'portrait'
  },
  {
    name: 'squish-berg',
    orientation: 'portrait'
  },
  {
    name: 'squish-arm',
    orientation: 'portrait'
  },
  {
    name: 'squish-day2',
    orientation: 'portrait'
  },
  {
    name: 'squish-vet',
    orientation: 'portrait'
  },
] as const;

export type CatImageNames = typeof imagesToGet[number]['name'];