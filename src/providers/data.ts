// import { createSimpleRestDataProvider } from "@refineddev/rest/simple-rest";
// import { API_URL } from "./constants";
// export const { dataProvider, kyInstance } = createSimpleRestDataProvider({
//   apiURL: API_URL,
// });

import { BaseRecord, DataProvider, GetListParams, GetListResponse } from "@refinedev/core";

export interface Subject extends BaseRecord {
  id: string;
  code: string;
  name: string;
  department: string;
  description: string;
}

const mockSubjects: Subject[] = [
  {
    id: "1",
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description: "Fundamentals of programming, algorithms, and computational thinking."
  },
  {
    id: "2",
    code: "MATH201",
    name: "Calculus II",
    department: "Mathematics",
    description: "Advanced calculus topics including integration techniques and series."
  },
  {
    id: "3",
    code: "PHYS150",
    name: "Physics I: Mechanics",
    department: "Physics",
    description: "Classical mechanics covering motion, forces, energy, and momentum."
  }
];

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord> ({resource}: GetListParams): Promise<GetListResponse<TData>> => {
    if(resource !== 'subjects') {
      return { data: [] as TData[], total: 0};
    }

    return {
      data: mockSubjects as unknown as TData[],
      total: mockSubjects.length,
    }
  },

  getOne: async () => { throw new Error('This function is not present in mock')},
  create: async () => { throw new Error('This function is not present in mock')},
  update: async () => { throw new Error('This function is not present in mock')},
  deleteOne: async () => { throw new Error('This function is not present in mock')},

  getApiUrl: () => '',
  
}