export const getHeaderTime = () => {
  const date = new Date()

  return `${date.toISOString().slice(0, 10).split('-').reverse().join('.')} ${getDay(date.getDay())}`
}

const getDay = (day) => {
  switch (day) {
    case 0: return 'Воскресенье'
    case 1: return 'Понедельник'
    case 2: return 'Вторник'
    case 3: return 'Среда'
    case 4: return 'Четверг'
    case 5: return 'Пятница'
    case 6: return 'Суббота'
    default: return 'Ошибка даты'
  }
}