// ts-node ./unions.ts

enum StatesEnum {
  error = "Error",
  success = "Success",
  loading = "Loading",
}

type StatesEnumKyes = keyof typeof StatesEnum;

type routes_2 = (typeof StatesEnum)[keyof typeof StatesEnum];

type SuccessType = (typeof StatesEnum)["success"];

type loading = StatesEnum.loading;
type error = StatesEnum.error;
type success = StatesEnum.success;

type LoadingLocationState = {
  status: loading;
};

type SuccessLocationState = {
  status: success;

  coords: {
    lat: number;
    lon: number;
  };
};

type ErrorLocationState = {
  status: error;

  error: {
    message: string;
  };
};

type LocationStateType =
  | LoadingLocationState
  | SuccessLocationState
  | ErrorLocationState;

function printLocation(locationState: LocationStateType) {
  switch (locationState.status) {
    case StatesEnum.success:
      console.log(locationState.coords.lat, locationState.coords.lon);
      break;
    case StatesEnum.error:
      console.log(locationState.error.message);
      break;
    case StatesEnum.loading:
      console.log(locationState.status);
      break;
  }
}

const incomingLocationLoading = {
  status: "Loading",
};

const incomingLocationError = {
  status: "Error",
  error: { message: "something gets wrong" },
};

const incomingLocationSuccess = {
  status: "Success",
  coords: { lon: 54, lat: 23 },
};

type IncomingLocationType = {
  status: string;
};

type IncomingLocationSuccessType = {
  coords: {
    lat: number;
    lon: number;
  };
} & IncomingLocationType;

type ErrorLocationStateType = {
  error: {
    message: string;
  };
} & IncomingLocationType;

const normalizeIncomingLocations = (
  locations:
    | IncomingLocationSuccessType
    | ErrorLocationStateType
    | IncomingLocationType
) => {
  const indexOfLoading = Object.values(StatesEnum).indexOf(
    locations.status as unknown as StatesEnum
  );

  const key_1 = Object.keys(StatesEnum)[
    indexOfLoading
  ] as keyof typeof StatesEnum;

  return { ...locations, status: StatesEnum[key_1] } as LocationStateType;
};

printLocation(normalizeIncomingLocations(incomingLocationError));
printLocation(normalizeIncomingLocations(incomingLocationLoading));
printLocation(normalizeIncomingLocations(incomingLocationSuccess));

enum Sizes {
  Small = "S",
  Medium = "M",
  Large = "L",
}

const indexOfS = Object.values(Sizes).indexOf("S" as unknown as Sizes);

const key = Object.keys(Sizes)[indexOfS];
console.log(key); // 👉️ "Small"
