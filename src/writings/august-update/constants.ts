export const dictionary = {
  hammockViewAlt: 'Clear blue skies over a desert landscape with two hammock posts in the foreground.',
  inHammocksAlt: 'The faces of author and his partner laying back in hammocks, each face is not fully in frame. The author did his best taking this photo, but his partner was not impressed.',
  bridgeInMequiteAlt: 'Bridge Party.',
  alyssaLookingAlt: 'Alyssa looking for a bird.',
  anotherEdgeAlt: 'The Northern edge of the Preserve.',
  deerDeepAlt: 'A deer deep in the Preserve.',
  theHillsAlt: "The hills to the West of the Preserve. Cameo by Alyssa's head.",
  lookingAtThePreserveAlt: 'The Preserve from the outside.'
}

export const imagesToGet = [
  {
    name: 'view-from-hammocks',
    orientation: 'landscape'
  },
  {
    name: 'us-in-hammocks',
    orientation: 'landscape'
  },
  {
    name: 'bridge-in-mesquite',
    orientation: 'portrait'
  },
  {
    name: 'looking-for-bird',
    orientation: 'portrait'
  },
  {
    name: 'northern-edge',
    orientation: 'portrait'
  },
  {
    name: 'deer-deep',
    orientation: 'landscape'
  },
  {
    name: 'hill-west',
    orientation: 'landscape'
  },
  {
    name: 'view-from-outside',
    orientation: 'landscape'
  },
] as const;

export type AugustImageNames = typeof imagesToGet[number]['name'];