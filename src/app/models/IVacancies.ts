export interface IVacancies {
    id: number,
    name: string,
    beginDate: string,
    endDate: string, 
    location: string,
    salary: string,
    email: string,
    details: string[], 
    requirement: string[],
    status: boolean
}

export interface ISelect {
    key: number,
    value: string
}

interface ITestOptions {
    value: number,
    text: string
}

export interface ITestQuestion {
    id: number,
    question: string,
    answer: number,
    selected: number | string,
    options: ITestOptions []
}

export interface IVacanciesAllQuestions {
    vacancyId: number,
    data: ITestQuestion []
}


