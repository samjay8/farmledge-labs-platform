import { test } from 'node:test'
import assert from 'node:assert/strict'
import { formatWeight, formatBags, formatCommodity } from '../../src/utils/formatters.js'

test('formatWeight formats a whole-number kg amount with thousands separators', () => {
  assert.equal(formatWeight(4000), '4,000 kg')
})

test('formatWeight handles small values without separators', () => {
  assert.equal(formatWeight(50), '50 kg')
})

test('formatBags formats bag count and per-bag weight', () => {
  assert.equal(formatBags(40, 100), '40 × 100kg bags')
})

test('formatBags formats large bag counts with thousands separators', () => {
  assert.equal(formatBags(1200, 50), '1,200 × 50kg bags')
})

test('formatCommodity maps a known commodity code to its display label', () => {
  assert.equal(formatCommodity('MAIZE_WHITE'), 'White Maize')
})

test('formatCommodity falls back to title case for an unknown commodity code', () => {
  assert.equal(formatCommodity('PALM_OIL'), 'Palm Oil')
})