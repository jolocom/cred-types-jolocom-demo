import { ClaimsMetadataSummary } from './types'

export { BaseMetadata, ContextEntry, ClaimInterface } from './types'

export const claimsMetadata: ClaimsMetadataSummary = {
  demoId: {
    type: ['Credential', 'ProofOfDemoIdCredential'],
    name: 'Demo Id',
    context: [
      {
        ProofOfDemoIdCredential: 'https://identity.jolocom.com/terms/ProofOfDemoIdCredential',
        schema: "http://schema.org/",
        familyName: "schema:familyName",
        givenName: "schema:givenName",
        birthDate: 'schema:birthPlace',
        birthPlace: 'schema:birthPlace',
        nationality: "schema:nationality",
        identifier: "schema:identifier"
      }
    ]
  },
  demoDriversLicence: {
    type: ['Credential', 'ProofOfDemoDriversLicenceCredential'],
    name: 'Demo Drivers Licence',
    context: [
      {
        ProofOfDemoDriversLicenceCredential: 'https://identity.jolocom.com/terms/ProofOfDemoDriversLicenceCredential',
        schema: "http://schema.org/",
        familyName: "schema:familyName",
        givenName: "schema:givenName",
        birthDate: 'schema:birthPlace',
        birthPlace: 'schema:birthPlace',
        identifier: "schema:identifier"
      }
    ]
  }
}