export type TimeOfDay = 'morning' | 'afternoon' | 'night'
export type Intensity = 'light' | 'moderate' | 'intense'

export interface RolePreferences {
  city: string
  peopleCount: number
  types: string[]
  timeOfDay: TimeOfDay
  intensity: Intensity
  hasAfter: boolean
}
