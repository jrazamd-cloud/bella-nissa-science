# Cycle 4 Serum Consistency Audit

The currently integrated hero asset, `bns-hero-system`, shows an opaque frosted-white serum bottle beside the companion device. The standalone `bns-serum-laboratory` asset also shows an opaque frosted-white bottle. Both disagree with the requested revised serum presentation if that change applies to the product stills as well as the ritual video.

The current share image, `bns-share-1200x630`, repeats the opaque frosted-white bottle and therefore also disagrees. Its associated Open Graph image alternative text explicitly describes a “Frosted white serum,” which is likewise inconsistent.

The ingredient-map visual does not show the serum bottle, but it depicts a clear, nearly colourless “SERUM FILM” on the skin. It is an explanatory illustration rather than product photography, yet it is a potential colour-consistency conflict if the revised red serum is meant to retain visible tint at the surface.

Confirmed visual conflicts before regeneration are therefore `bns-hero-system`, `bns-serum-laboratory`, and `bns-share-1200x630`, plus the Open Graph image-alt string. The ingredient map is a potential conflict to decide during integration; no media has been regenerated at this point.
