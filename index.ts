import { ClaimsMetadataSummary } from './types'

export { BaseMetadata, ContextEntry, ClaimInterface } from './types'

export const claimsMetadata: ClaimsMetadataSummary = {
  demoProofOfUniApplication: {
    type: ['Credential', 'ProofOfApplication'],
    name: 'University application proof',
    context: [{
      jolo: 'https://identity.jolocom.com/terms/',
      ProofOfApplicationCredential: 'jolo:ProofOfDemoIdCredential',
      university: 'schema:CollegeOrUniversity',
      faculty: 'schema:department',
      caseNumber: 'schema:identifier'
    }]
  },
  demoId: {
    type: ['Credential', 'ProofOfDemoIdCredential'],
    name: 'Identity Card',
    context: [
      {
        ProofOfDemoIdCredential: 'https://identity.jolocom.com/terms/ProofOfDemoIdCredential',
        schema: 'https://schema.org/',
        givenName: 'schema:givenName',
        familyName: 'schema:familyName',
        gender: 'schema:gender',
        nationality: 'schema:nationality',
        birthDate: 'schema:birthPlace',
        birthPlace: 'schema:birthPlace',
        validFrom: 'schema:validFrom',
        validThrough: 'schema:validThrough',
        identifier: 'schema:identifier',
        issuedBy: 'schema:issuedBy'
      }
    ]
  },
  // TODO Move into separate, project specific repository
  akaart: {
    type: ['Credential', 'AKaartCredential'],
    name: 'A-Kaart',
    context: [
      {
        AKaartCredential: 'https://identity.jolocom.com/terms/AKaartCredential',
        schema: 'https://schema.org/',
        identifier: 'schema:identifier'
      }
    ]
  },
  demoDriversLicence: {
    type: ['Credential', 'ProofOfDemoDriversLicenceCredential'],
    name: 'Demo Drivers Licence',
    context: [
      {
        ProofOfDemoDriversLicenceCredential: 'https://identity.jolocom.com/terms/ProofOfDemoDriversLicenceCredential',
        schema: 'http://schema.org/',
        familyName: 'schema:familyName',
        givenName: 'schema:givenName',
        residence: 'schema:residence',
        postalCode: 'schema:postalCode',
        identifier: 'schema:identifier'
      }
    ]
  }
}
