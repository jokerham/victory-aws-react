/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createInstitute = /* GraphQL */ `mutation CreateInstitute(
  $input: CreateInstituteInput!
  $condition: ModelInstituteConditionInput
) {
  createInstitute(input: $input, condition: $condition) {
    id
    sport
    title
    location
    representative {
      id
      congnitoId
      name
      email
      contact
      weight
      approved
      profileImageUrl
      createdAt
      updatedAt
      instituteMembersId
      memberInstituteId
      __typename
    }
    members {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    instituteRepresentativeId
    representativeId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateInstituteMutationVariables,
  APITypes.CreateInstituteMutation
>;
export const updateInstitute = /* GraphQL */ `mutation UpdateInstitute(
  $input: UpdateInstituteInput!
  $condition: ModelInstituteConditionInput
) {
  updateInstitute(input: $input, condition: $condition) {
    id
    sport
    title
    location
    representative {
      id
      congnitoId
      name
      email
      contact
      weight
      approved
      profileImageUrl
      createdAt
      updatedAt
      instituteMembersId
      memberInstituteId
      __typename
    }
    members {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    instituteRepresentativeId
    representativeId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateInstituteMutationVariables,
  APITypes.UpdateInstituteMutation
>;
export const deleteInstitute = /* GraphQL */ `mutation DeleteInstitute(
  $input: DeleteInstituteInput!
  $condition: ModelInstituteConditionInput
) {
  deleteInstitute(input: $input, condition: $condition) {
    id
    sport
    title
    location
    representative {
      id
      congnitoId
      name
      email
      contact
      weight
      approved
      profileImageUrl
      createdAt
      updatedAt
      instituteMembersId
      memberInstituteId
      __typename
    }
    members {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    instituteRepresentativeId
    representativeId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteInstituteMutationVariables,
  APITypes.DeleteInstituteMutation
>;
export const createMember = /* GraphQL */ `mutation CreateMember(
  $input: CreateMemberInput!
  $condition: ModelMemberConditionInput
) {
  createMember(input: $input, condition: $condition) {
    id
    congnitoId
    name
    email
    contact
    institute {
      id
      sport
      title
      location
      createdAt
      updatedAt
      instituteRepresentativeId
      representativeId
      __typename
    }
    weight
    approved
    profileImageUrl
    createdAt
    updatedAt
    instituteMembersId
    memberInstituteId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMemberMutationVariables,
  APITypes.CreateMemberMutation
>;
export const updateMember = /* GraphQL */ `mutation UpdateMember(
  $input: UpdateMemberInput!
  $condition: ModelMemberConditionInput
) {
  updateMember(input: $input, condition: $condition) {
    id
    congnitoId
    name
    email
    contact
    institute {
      id
      sport
      title
      location
      createdAt
      updatedAt
      instituteRepresentativeId
      representativeId
      __typename
    }
    weight
    approved
    profileImageUrl
    createdAt
    updatedAt
    instituteMembersId
    memberInstituteId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMemberMutationVariables,
  APITypes.UpdateMemberMutation
>;
export const deleteMember = /* GraphQL */ `mutation DeleteMember(
  $input: DeleteMemberInput!
  $condition: ModelMemberConditionInput
) {
  deleteMember(input: $input, condition: $condition) {
    id
    congnitoId
    name
    email
    contact
    institute {
      id
      sport
      title
      location
      createdAt
      updatedAt
      instituteRepresentativeId
      representativeId
      __typename
    }
    weight
    approved
    profileImageUrl
    createdAt
    updatedAt
    instituteMembersId
    memberInstituteId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMemberMutationVariables,
  APITypes.DeleteMemberMutation
>;
export const createCodeTable = /* GraphQL */ `mutation CreateCodeTable(
  $input: CreateCodeTableInput!
  $condition: ModelCodeTableConditionInput
) {
  createCodeTable(input: $input, condition: $condition) {
    id
    name
    details {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCodeTableMutationVariables,
  APITypes.CreateCodeTableMutation
>;
export const updateCodeTable = /* GraphQL */ `mutation UpdateCodeTable(
  $input: UpdateCodeTableInput!
  $condition: ModelCodeTableConditionInput
) {
  updateCodeTable(input: $input, condition: $condition) {
    id
    name
    details {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCodeTableMutationVariables,
  APITypes.UpdateCodeTableMutation
>;
export const deleteCodeTable = /* GraphQL */ `mutation DeleteCodeTable(
  $input: DeleteCodeTableInput!
  $condition: ModelCodeTableConditionInput
) {
  deleteCodeTable(input: $input, condition: $condition) {
    id
    name
    details {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCodeTableMutationVariables,
  APITypes.DeleteCodeTableMutation
>;
export const createCodeDetail = /* GraphQL */ `mutation CreateCodeDetail(
  $input: CreateCodeDetailInput!
  $condition: ModelCodeDetailConditionInput
) {
  createCodeDetail(input: $input, condition: $condition) {
    id
    codeTable {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    name
    value
    sortOrder
    createdAt
    updatedAt
    codeTableDetailsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCodeDetailMutationVariables,
  APITypes.CreateCodeDetailMutation
>;
export const updateCodeDetail = /* GraphQL */ `mutation UpdateCodeDetail(
  $input: UpdateCodeDetailInput!
  $condition: ModelCodeDetailConditionInput
) {
  updateCodeDetail(input: $input, condition: $condition) {
    id
    codeTable {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    name
    value
    sortOrder
    createdAt
    updatedAt
    codeTableDetailsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCodeDetailMutationVariables,
  APITypes.UpdateCodeDetailMutation
>;
export const deleteCodeDetail = /* GraphQL */ `mutation DeleteCodeDetail(
  $input: DeleteCodeDetailInput!
  $condition: ModelCodeDetailConditionInput
) {
  deleteCodeDetail(input: $input, condition: $condition) {
    id
    codeTable {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    name
    value
    sortOrder
    createdAt
    updatedAt
    codeTableDetailsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCodeDetailMutationVariables,
  APITypes.DeleteCodeDetailMutation
>;
export const createTournament = /* GraphQL */ `mutation CreateTournament(
  $input: CreateTournamentInput!
  $condition: ModelTournamentConditionInput
) {
  createTournament(input: $input, condition: $condition) {
    id
    title
    location
    eventDate
    dueDate
    rings
    Matches {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTournamentMutationVariables,
  APITypes.CreateTournamentMutation
>;
export const updateTournament = /* GraphQL */ `mutation UpdateTournament(
  $input: UpdateTournamentInput!
  $condition: ModelTournamentConditionInput
) {
  updateTournament(input: $input, condition: $condition) {
    id
    title
    location
    eventDate
    dueDate
    rings
    Matches {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTournamentMutationVariables,
  APITypes.UpdateTournamentMutation
>;
export const deleteTournament = /* GraphQL */ `mutation DeleteTournament(
  $input: DeleteTournamentInput!
  $condition: ModelTournamentConditionInput
) {
  deleteTournament(input: $input, condition: $condition) {
    id
    title
    location
    eventDate
    dueDate
    rings
    Matches {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTournamentMutationVariables,
  APITypes.DeleteTournamentMutation
>;
export const createMatch = /* GraphQL */ `mutation CreateMatch(
  $input: CreateMatchInput!
  $condition: ModelMatchConditionInput
) {
  createMatch(input: $input, condition: $condition) {
    id
    tournament {
      id
      title
      location
      eventDate
      dueDate
      rings
      createdAt
      updatedAt
      __typename
    }
    matchType {
      id
      name
      value
      sortOrder
      createdAt
      updatedAt
      codeTableDetailsId
      __typename
    }
    weight
    tournamentType {
      id
      name
      value
      sortOrder
      createdAt
      updatedAt
      codeTableDetailsId
      __typename
    }
    duration
    rounds
    createdAt
    updatedAt
    tournamentMatchesId
    matchMatchTypeId
    matchTournamentTypeId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMatchMutationVariables,
  APITypes.CreateMatchMutation
>;
export const updateMatch = /* GraphQL */ `mutation UpdateMatch(
  $input: UpdateMatchInput!
  $condition: ModelMatchConditionInput
) {
  updateMatch(input: $input, condition: $condition) {
    id
    tournament {
      id
      title
      location
      eventDate
      dueDate
      rings
      createdAt
      updatedAt
      __typename
    }
    matchType {
      id
      name
      value
      sortOrder
      createdAt
      updatedAt
      codeTableDetailsId
      __typename
    }
    weight
    tournamentType {
      id
      name
      value
      sortOrder
      createdAt
      updatedAt
      codeTableDetailsId
      __typename
    }
    duration
    rounds
    createdAt
    updatedAt
    tournamentMatchesId
    matchMatchTypeId
    matchTournamentTypeId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMatchMutationVariables,
  APITypes.UpdateMatchMutation
>;
export const deleteMatch = /* GraphQL */ `mutation DeleteMatch(
  $input: DeleteMatchInput!
  $condition: ModelMatchConditionInput
) {
  deleteMatch(input: $input, condition: $condition) {
    id
    tournament {
      id
      title
      location
      eventDate
      dueDate
      rings
      createdAt
      updatedAt
      __typename
    }
    matchType {
      id
      name
      value
      sortOrder
      createdAt
      updatedAt
      codeTableDetailsId
      __typename
    }
    weight
    tournamentType {
      id
      name
      value
      sortOrder
      createdAt
      updatedAt
      codeTableDetailsId
      __typename
    }
    duration
    rounds
    createdAt
    updatedAt
    tournamentMatchesId
    matchMatchTypeId
    matchTournamentTypeId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMatchMutationVariables,
  APITypes.DeleteMatchMutation
>;
