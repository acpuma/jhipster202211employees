import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 7813,
};

export const sampleWithPartialData: IEmployee = {
  id: 37115,
  lastName: 'Rogahn',
  salary: 94038,
  active: true,
};

export const sampleWithFullData: IEmployee = {
  id: 56543,
  firstName: 'Jessy',
  lastName: 'Zulauf',
  salary: 41420,
  birthDate: dayjs('2022-11-26T12:48'),
  active: false,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
