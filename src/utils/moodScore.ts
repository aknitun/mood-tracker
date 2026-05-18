// Calcule la moyenne des scores d'humeur (1 a 5)
export function calculateMoodAverage(scores: number[]): number {
    if (scores.length == 0) return 0 // cas tableau vide
    const sum = scores.reduce((acc, score) => score + acc, 0)
    return Math.round((sum / scores.length) * 10) / 10
}
// Retourne un label selon le score moyen
export function getMoodLabel(average: number): string {
    if (average === 0) return 'Aucune donnee'
    if (average < 2) return 'Difficile'
    if (average < 3) return 'Moyen'
    if (average < 4) return 'Bien'
    return 'Excellent'
}
// Verifie si la streak est active (entree dans les 24 dernieres heures)
export function isStreakActive(lastEntryDate: Date): boolean {
    const now = new Date()
    const diffMs = now.getTime() - lastEntryDate.getTime()
    const diffHours = diffMs / (1000 * 60 * 60)
    return diffHours < 24
}

export function getWeeklyTrend(
    scores: number[]
): 'improving' | 'declining' | 'stable' {
    // Regle : comparer la moyenne des 3 derniers scores aux 3 premiers
    // - difference > 0.5 → 'improving'
    // - difference < -0.5 → 'declining'
    // - sinon → 'stable'
    // - moins de 6 scores → 'stable'
    // TODO: implementer
    const recent = scores.slice(-3)
    const past = scores.slice(0, 3)
    if (recent.length < 3 || past.length < 3) return 'stable'
    const recentAvg = calculateMoodAverage(recent)
    const pastAvg = calculateMoodAverage(past)
    const diff = recentAvg - pastAvg
    if (diff > 0.5) return 'improving'
    if (diff < -0.5) return 'declining'
    return 'stable'
}
