// ts-node ./Enum-1.ts

// Enums

enum Languages {
  ts = "TypeScript",
  js = "javaScript",
  sql = "SQL",
}

type TypeOfEnum = keyof typeof Languages;

const languagesCollection: Languages[] = [];
const languagesCollection_2: Languages[] = [Languages.ts, Languages.sql];

// languagesCollection_2  [ 'TypeScript', 'SQL' ]
console.log("languagesCollection_2 ", languagesCollection_2);

type KeyFromEnum = keyof typeof Languages;

type TypeWitEnum = {
  [K in KeyFromEnum]?: Languages;
};

const languagesCollection_3: TypeWitEnum[] = [{ ts: Languages.ts }];

// types from Claneo project

const urlOrderFields = [
  "id",
  "url",
  "project.id",
  "mainCategory",
  "mainKeyword",
  "status",
  "numberOfKeywords",
  "sumSv",
  "percentShareSv",
  "avgPosition",
  "potential",
  "visibility",
] as const;

enum SortDirectionType {
  ascend = "asc",
  descend = "desc",
}

type GetUrlsOrderParamsType = {
  [Key in `order[${(typeof urlOrderFields)[number]}]`]?: SortDirectionType;
};

// type GetUrlsOrderParamsType = {
//   "order[id]"?: SortDirectionType | undefined;
//   "order[url]"?: SortDirectionType | undefined;
//   "order[project.id]"?: SortDirectionType | undefined;
//   ... 8 more ...;
//   "order[visibility]"?: SortDirectionType | undefined;
// }

const paramsToGetNewDataTable: GetUrlsOrderParamsType = {
  "order[id]": SortDirectionType.ascend,
  "order[url]": SortDirectionType.descend,
};

enum SexEnum {
  male = "Male",
  female = "Female",
  unisex = "Unisex",
}

type CloseType = {
  size: string;
  sex: SexEnum;
};

const paramsForPostfemale: CloseType = {
  size: "S",
  sex: SexEnum.female,
};

const paramsForPostMale: CloseType = {
  size: "XXL",
  sex: SexEnum.male,
};
