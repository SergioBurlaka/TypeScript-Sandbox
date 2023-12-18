// ts-node ./enum-alternativity.ts

const statuses = {
  error: "Error",
  success: "Success",
  loading: "Loading",
} as const;

type LoadingLocationState_1 = {
  status: typeof statuses.loading;
};

type SuccessLocationState_1 = {
  status: typeof statuses.success;

  coords: {
    lat: number;
    lon: number;
  };
};

type ErrorLocationState_1 = {
  status: typeof statuses.error;

  error: {
    message: string;
  };
};

type LocationStateType_1 =
  | LoadingLocationState_1
  | SuccessLocationState_1
  | ErrorLocationState_1;

function printLocation_1(locationState: LocationStateType_1) {
  switch (locationState.status) {
    case statuses.success:
      console.log(locationState.coords.lat, locationState.coords.lon);
      break;
    case statuses.error:
      console.log(locationState.error.message);
      break;
    case statuses.loading:
      console.log(locationState.status);
      break;
  }
}

printLocation_1({
  status: "Error",
  error: { message: "something gets wrong" },
});
printLocation_1({
  status: "Loading",
});
printLocation_1({
  status: "Success",
  coords: { lon: 54, lat: 23 },
});
