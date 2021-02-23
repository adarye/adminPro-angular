import { Hospital } from './hospital.model';


export class Medico{
  constructor(
    public id?: bigint,
    public nombre?: string,
    public img?: string,
    public usuarios_id?: BigInteger,
    public hospitales_id?: BigInteger,
    public hospital?: Hospital
  ){}
}
