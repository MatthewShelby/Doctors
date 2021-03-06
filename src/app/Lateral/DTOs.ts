
export class LoginResultDTO {
  constructor(
    public status: string,
    public data: CurrentUser
  ) { }
}

export class LoginDTO {
  constructor(
    public email: string,
    public password: string
  ) { }
}

export class CurrentUser {
  constructor(
    public id: string,
    public email: string,
    public token: string,
    public expires: Date | null
  ) { }
}

export class User {
  constructor(

  public id?: string,
  public email?: string,
  public token?: string,
  public expires?: Date

  ) { }
  
}



export interface ICheckUserrAuthResult {
  status: string;
  data: {
    id: string,
    email: string,
    token: string,
    expires: Date,
    issue: Date
  }
}

export class resultDTO {
  constructor(
    public status: string,
    public data: string
  ) { }
}