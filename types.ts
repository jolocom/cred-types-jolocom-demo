export type ContextEntry = string | { [key: string]: ContextEntry }
export type ClaimInterface = {
  [key: string]: string | number | boolean | Date
}

export interface BaseMetadata {
  type: string[]
  name: string
  context?: ContextEntry[]
  claimInterface?: ClaimInterface
}

export interface DemoIdClaimMetadata extends BaseMetadata {
  claimInterface?: {
    givenName: string
    familyName: string
    birthDate: string
    birthPlace?: string
    nationality: string
    identifier: string
    gender: string
    issuedBy: string
    validFrom: Date | number
    validThrough: Date | number
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

export interface AKaartClaimMetadata extends BaseMetadata {
  claimInterface?: {
    identifier: string
  }
}

export interface ClaimsMetadataSummary {
  demoId: DemoIdClaimMetadata
  akaart: AKaartClaimMetadata
  demoDriversLicence: DemoDriversLicenceClaimMetadata
}
