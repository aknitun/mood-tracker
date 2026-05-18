import { describe, test, expect } from 'vitest'
import { calculateMoodAverage, getMoodLabel, isStreakActive } from './moodScore'
describe('calculateMoodAverage', () => {
    test('calcule la moyenne correctement', () => {
        // Arrange
        const scores = [3, 4, 5, 2]
        // Act
        const result = calculateMoodAverage(scores)
        // Assert
        expect(result).toBe(3.5)
    })
    test('retourne 0 pour un tableau vide', () => {
        expect(calculateMoodAverage([])).toBe(0)
    })
    test('gere un seul score', () => {
        expect(calculateMoodAverage([4])).toBe(4)
    })
    test('arrondit a 1 decimale', () => {
        expect(calculateMoodAverage([1, 2, 3])).toBe(2)
    })
})
describe('getMoodLabel', () => {
    test('retourne Aucune donnee pour 0', () => {
        expect(getMoodLabel(0)).toBe('Aucune donnee')
    })
    test('retourne Difficile pour score < 2', () => {
        expect(getMoodLabel(1.5)).toBe('Difficile')
    })
    test('retourne Excellent pour score >= 4', () => {
        expect(getMoodLabel(4.5)).toBe('Excellent')
    })
    test('retourne Bien pour score entre 3 et 4', () => {
        expect(getMoodLabel(3.5)).toBe('Bien')
    })
})
describe('isStreakActive', () => {
    test('retourne true si entree < 24h', () => {
        const recent = new Date(Date.now() - 1000 * 60 * 60 * 2) // il y a 2h
        expect(isStreakActive(recent)).toBe(true)
    })
    test('retourne false si entree > 24h', () => {
        const old = new Date(Date.now() - 1000 * 60 * 60 * 25) // il y a 25h
        expect(isStreakActive(old)).toBe(false)
    })
})
