/*
REXSchool Copyright (C) 2026 Lorendos aka Leonid
Full license agrement is under the file LICENSE
Uses code from AdriDevelopsThings/xschool-node on github
*/

export class XSchoolError extends Error {
  constructor(
    public step: string,
    public message: string,
  ) {
    super(`Error while ${step}: ${message}.`)
  }
}
export class ApiError extends XSchoolError {
  constructor(
    public step: string,
    public url: string,
    public status: string | number,
    public content: string,
  ) {
    super(step, `Error while retrieving data from ${url}: ${status}: '${content}'.`)
  }
}

export class NoCSRFTokenAvailable extends XSchoolError {
  constructor(public url: string) {
    super(`getCSRFToken`, `No CSRF tokens available on url ${url}.`)
  }
}
