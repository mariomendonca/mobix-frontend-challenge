export const USER_ID = '@mobix/userId'

export function translateType(type: string) {
  const types = {
    'Água': 'water',
    'Fogo': 'fire',
    'Planta': 'grass',
    'Normal': 'normal',
    'Voador': 'flying',
    'Fada': 'fairy',
    'Fantasma': 'ghost',
    'Gelo': 'ice'
  }


  return types[type]
}

export function getString(array: Array<any>, condition: any) {
  const newArray = array.map(condition)
  return newArray.join(', ')
}
