/**
 * Pure display-formatting utilities used by controllers and certificate
 * generation. No external dependencies — Node built-ins only.
 */

const COMMODITY_LABELS: Record<string, string> = {
  MAIZE_WHITE: 'White Maize',
  MAIZE_YELLOW: 'Yellow Maize',
  SORGHUM: 'Sorghum',
  SOYBEAN: 'Soybean',
  RICE_PADDY: 'Paddy Rice',
  GROUNDNUT: 'Groundnut',
  COWPEA: 'Cowpea',
  MILLET: 'Millet',
  CASSAVA: 'Cassava',
  COCOA: 'Cocoa',
}

/**
 * Formats a weight in kilograms as a thousands-separated string with a
 * "kg" suffix.
 *
 * @example formatWeight(4000) // "4,000 kg"
 */
export const formatWeight = (kg: number): string => {
  if (!Number.isFinite(kg)) {
    throw new RangeError('formatWeight: kg must be a finite number')
  }

  return `${kg.toLocaleString('en-US')} kg`
}

/**
 * Formats a bag count and the weight per bag into a human-readable string.
 *
 * @example formatBags(40, 100) // "40 × 100kg bags"
 */
export const formatBags = (bagCount: number, weightPerBagKg: number): string => {
  if (!Number.isFinite(bagCount) || !Number.isFinite(weightPerBagKg)) {
    throw new RangeError('formatBags: bagCount and weightPerBagKg must be finite numbers')
  }

  return `${bagCount.toLocaleString('en-US')} × ${weightPerBagKg.toLocaleString('en-US')}kg bags`
}

/**
 * Formats a commodity code into its human-readable display label.
 * Falls back to a title-cased rendering of the raw code for unknown
 * commodities.
 *
 * @example formatCommodity("MAIZE_WHITE") // "White Maize"
 */
export const formatCommodity = (commodity: string): string => {
  const known = COMMODITY_LABELS[commodity]
  if (known) {
    return known
  }

  return commodity
    .toLowerCase()
    .split('_')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}