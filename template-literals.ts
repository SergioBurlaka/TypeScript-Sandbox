// ts-node ./template-literals.ts

type AdminType = "admin";
type ManagerType = 'manager'

type UserType = "user";


type CombinedTypes = `${AdminType} ${ManagerType}`;
type CombinedTypes_2 = `${AdminType | ManagerType}_${UserType}_id`;
