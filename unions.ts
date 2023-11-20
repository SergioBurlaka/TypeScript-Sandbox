// ts-node ./unions.ts



const States = [
  'Error', 'Success', 'Loading'
] as const

const enum StatesEnum {
  error = 'Error',
  success = 'Success',
  loading = 'Loading'
}

const error = StatesEnum.error

console.log(error)
console.log(StatesEnum.error)
console.log(typeof StatesEnum.error)


type LoadingLocationState = {
  status: typeof States[2],
  // status: StatesEnum.loading,

}

type SuccsesLocationState = {
  status: typeof States[1],
  // status: StatesEnum.success,
  coords: {
    lat: number,
    lon: number,
  }
}

type ErrorLocationState = {
  status: typeof States[0],
  // status: StatesEnum.error,
  error: {
    message: string
  }
}


type LocationStateType = LoadingLocationState | SuccsesLocationState | ErrorLocationState


function printLocation(locationState: LocationStateType) {

  switch (locationState.status) {

    case StatesEnum.success:
      console.log(locationState.coords.lat, locationState.coords.lon)
      break
    case StatesEnum.error:
      console.log(locationState.error.message)

      break
    case StatesEnum.loading:

      console.log(locationState.status)

      break

  }

}


printLocation({ status: 'Error', error: { message: 'something gets wrong' } })

printLocation({ status: 'Success', coords: { lon: 54, lat: 23 } })

