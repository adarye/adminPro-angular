export class Usuario {

  constructor(
     public name?: string,
     public email?: string,
     public password?: string,
     public img?: string,
     public role?: string,
     public google?: boolean,
     public id?: bigint,
     public grant_type?: string,
     public client_id?: number,
     public client_secret?: string,
     public username?: string,

  ){ }
}
