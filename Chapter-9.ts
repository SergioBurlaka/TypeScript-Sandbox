// ts-node ./Chapter-9.ts

type Assignment = {
  studentId: string,
  title: string,
  grade?: number,
  verified?: boolean
}

const updateAsignment = (assign: Assignment, propsToUpdate: Partial<Assignment>) => {
  return { ...assign, ...propsToUpdate }
}

const assigne_1: Assignment = {
  studentId: 'someid',
  title: 'Final project',
  grade: 0,
}


const assign_1_updated = updateAsignment(assigne_1, { grade: 0.7 })


const assign_2_updated = updateAsignment(assigne_1, { title: 'Super project', grade: undefined })



console.log('assign_1_updated', assign_1_updated)
console.log('assign_2_updated', assign_2_updated)

/////


const recordAssignment = (assign: Required<Assignment>): Assignment => {
  return assign
}

const assigne_3: Required<Assignment> = {
  studentId: 'someid',
  title: 'Final project',
  grade: 0,
  verified: true
}

// Argument of type 'Assignment' is not assignable to parameter of type 'Required<Assignment>'.
//   Types of property 'grade' are incompatible.
//     Type 'number | undefined' is not assignable to type 'number'.
//       Type 'undefined' is not assignable to type 'number'.



// const resultOfRequired = recordAssignment(assigne_1)

// console.log('resultOfRequired', resultOfRequired)



const resultOfRequired_3 = recordAssignment(assigne_3)
console.log('resultOfRequired_3', resultOfRequired_3)

type RequiredAssignment = Required<Assignment>

const assignVerified: Readonly<Assignment> = { ...assigne_1, verified: true }
console.log('assignVerified', assignVerified)


// Cannot assign to 'verified' because it is a read-only property.z


// assignVerified.verified = false

//  Record

const hexColorMap: Record<string, string> = {
  red: 'FF0000',
  green: '00FF00',
  blue: '0000FF'
}


type Students = 'Sara' | 'Kelly'

type LetterHGrades = 'A' | 'B' | 'C' | 'D' | 'U'

const finalGrades: Record<Students, LetterHGrades> = {
  Sara: 'A',
  Kelly: 'B'
}


const gradesPartial: Partial<Record<Students, LetterHGrades>> = {
  Sara: 'B',
}

type Grades = {
  assign1: number,
  assign2: number,
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 85, assign2: 96 },
  Kelly: { assign1: 67, assign2: 58 }
}

type GradeDataType = typeof gradeData

// Pick and Omit


type AssignResult = Pick<Assignment, 'studentId' | 'grade'>


const score: AssignResult = {
  studentId: '3fwf',
  grade: 57
}


type AssignPreview = Omit<Assignment, 'verified' | 'grade'>


const preview: AssignPreview = {
  studentId: 'adssd',
  title: ' Preview title'
}


// Exclude and Extract

// Adjusted grade  - Скоригована оцінка2


type AdjastedGrade = Exclude<LetterHGrades, 'U'>
type HighGrades = Extract<LetterHGrades, 'A' | 'B'>


// Nonnullable 



type AllPossibleGrades = 'Dave' | 'Jhon' | null | undefined

type NamesOnly = NonNullable<AllPossibleGrades>




// Return type

// type NewAssign = {
//   title: string,
//   points: number
// }

const createNewAssign = (title: string, points: number) => {
  return (
    {
      title, points
    }
  )
}


type NewAssign = ReturnType<typeof createNewAssign>


const tsAssign: NewAssign = createNewAssign('Utility Types', 99)

console.log('tsAssign', tsAssign)

// Parameters

type AssignParams = Parameters<typeof createNewAssign>


const assignArgs: AssignParams = ['Some title', 75]

const tsAssign2: NewAssign = createNewAssign(...assignArgs)

console.log('tsAssign2', tsAssign2)


// Awaited -helps us with the ReturnType of a Promise

import axios from 'axios'

type User = {
  id: number,
  name: string,
  username: string,
  email: string
}

const usersUrl = 'https://jsonplaceholder.typicode.com/users'


const fetchUsers = async (): Promise<User[]> => {
  const { data } = await axios.get(usersUrl);
  return data
}


const getUsers = async () => {
  const result = await fetchUsers()
  fetchUsers().then(
    res => {
      console.log('res', res)

      return res
    }
  ).catch(err => {
    if (err instanceof Error) {
      console.log('err.message ', err.message)
    }
  })


  return result


}

// getUsers()

// console.log('getUsers()', getUsers())


type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(res => console.log('res', res))




























