export type ContextEntry = string | { [key: string]: ContextEntry }
export type ClaimInterface = {
  [key: string]: string | number | boolean
}

export interface BaseMetadata {
  type: string[]
  name: string
  context?: ContextEntry[]
  claimInterface?: {
    [key: string]: string | number | boolean | ClaimInterface
  }
}

export interface DemoIdClaimMetadata extends BaseMetadata {
  claimInterface?: {
    givenName: string
    familyName: string
    birthDate: string
    birthPlace: string
    nationality: string
    identifier: string
  }
}

export interface DemoDriversLicenceClaimMetadata extends BaseMetadata {
  claimInterface?: {
    givenName: string
    familyName: string
    residence: string
    postalCode: string
    identifier: string
  }
}

export interface ClaimsMetadataSummary {
  demoId: DemoIdClaimMetadata
  demoDriversLicence: DemoDriversLicenceClaimMetadata
}