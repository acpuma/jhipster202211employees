import dayjs from 'dayjs/esm';
import { IDepartment } from 'app/entities/department/department.model';

export interface IEmployee {
  id: number;
  firstName?: string | null;
  lastName?: string | null;
  salary?: number | null;
  birthDate?: dayjs.Dayjs | null;
  active?: boolean | null;
  department?: Pick<IDepartment, 'id'> | null;
}

export type NewEmployee = Omit<IEmployee, 'id'> & { id: null };
