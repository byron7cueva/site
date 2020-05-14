export const formatSkills = d => {
  switch (d) {
    case 1: return 'Aprendiz'
    case 2: return 'Básico'
    case 3: return 'Intermedio'
    case 4: return 'Avanzado'
    case 5: return 'Experto'
    default: return ''
  }
}