export const EMOTIONS = [
  { name: 'anxiety', color: '#0088FE', id: 1 },
  { name: 'confidence', color: '#00C49F', id: 2 },
  { name: 'happiness', color: '#FFBB28', id: 3 },
  { name: 'focus', color: '#FF8042', id: 4 },
]
export const COLORS = ['#ff0000', '#ffff00', '#00ffff', '#00ff00', '	#ff00ff']
export const ONBOARD_STEPS = [
  { name: 'emotions', child: 'EmotionPicker', showPagination: true },
  { name: 'scale', child: 'ScalePicker', showPagination: true },
  { name: 'time', child: 'TimePicker', showPagination: true },
]
export const SCOPES = [
  { name: 'week', value: 7 },
  { name: 'month', value: 30 },
  { name: 'year', value: 365 },
  { name: 'all-time', value: false },
]
export const DEFAULT_SCOPE = 7
export const SCALE = [0, 1, 2, 3, 4, 5]
export const TEST_DELAY = 500
export const SCREEN_MODE = '--dark'
export const PRIMARY_COLOR = '#a88ee6'

export const buttonStyle = (condition, color) => {
  if (condition) {
    return {
      border: `2px solid ${color}`,
      color: `${color}`,
      background: `linear-gradient(${color} -900%, transparent 100%)`,
    }
  } else
    return {
      border: '2px solid #ccc',
      color: '#bbb',
      background: 'transparent',
    }
}
