/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateInstitute = /* GraphQL */ `subscription OnCreateInstitute(
  $filter: ModelSubscriptionInstituteFilterInput
  $representativeId: String
) {
  onCreateInstitute(filter: $filter, representativeId: $representativeId) {
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
      birthday
      weight
      approved
      profileImageUrl
      createdAt
      updatedAt
      instituteMembersId
      memberGenderId
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
` as GeneratedSubscription<
  APITypes.OnCreateInstituteSubscriptionVariables,
  APITypes.OnCreateInstituteSubscription
>;
export const onUpdateInstitute = /* GraphQL */ `subscription OnUpdateInstitute(
  $filter: ModelSubscriptionInstituteFilterInput
  $representativeId: String
) {
  onUpdateInstitute(filter: $filter, representativeId: $representativeId) {
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
      birthday
      weight
      approved
      profileImageUrl
      createdAt
      updatedAt
      instituteMembersId
      memberGenderId
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
` as GeneratedSubscription<
  APITypes.OnUpdateInstituteSubscriptionVariables,
  APITypes.OnUpdateInstituteSubscription
>;
export const onDeleteInstitute = /* GraphQL */ `subscription OnDeleteInstitute(
  $filter: ModelSubscriptionInstituteFilterInput
  $representativeId: String
) {
  onDeleteInstitute(filter: $filter, representativeId: $representativeId) {
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
      birthday
      weight
      approved
      profileImageUrl
      createdAt
      updatedAt
      instituteMembersId
      memberGenderId
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
` as GeneratedSubscription<
  APITypes.OnDeleteInstituteSubscriptionVariables,
  APITypes.OnDeleteInstituteSubscription
>;
export const onCreateMember = /* GraphQL */ `subscription OnCreateMember(
  $filter: ModelSubscriptionMemberFilterInput
  $congnitoId: String
) {
  onCreateMember(filter: $filter, congnitoId: $congnitoId) {
    id
    congnitoId
    name
    email
    contact
    birthday
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
    gender {
      id
      name
      value
      sortOrder
      createdAt
      updatedAt
      codeTableDetailsId
      __typename
    }
    approved
    profileImageUrl
    createdAt
    updatedAt
    instituteMembersId
    memberGenderId
    memberInstituteId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMemberSubscriptionVariables,
  APITypes.OnCreateMemberSubscription
>;
export const onUpdateMember = /* GraphQL */ `subscription OnUpdateMember(
  $filter: ModelSubscriptionMemberFilterInput
  $congnitoId: String
) {
  onUpdateMember(filter: $filter, congnitoId: $congnitoId) {
    id
    congnitoId
    name
    email
    contact
    birthday
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
    gender {
      id
      name
      value
      sortOrder
      createdAt
      updatedAt
      codeTableDetailsId
      __typename
    }
    approved
    profileImageUrl
    createdAt
    updatedAt
    instituteMembersId
    memberGenderId
    memberInstituteId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMemberSubscriptionVariables,
  APITypes.OnUpdateMemberSubscription
>;
export const onDeleteMember = /* GraphQL */ `subscription OnDeleteMember(
  $filter: ModelSubscriptionMemberFilterInput
  $congnitoId: String
) {
  onDeleteMember(filter: $filter, congnitoId: $congnitoId) {
    id
    congnitoId
    name
    email
    contact
    birthday
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
    gender {
      id
      name
      value
      sortOrder
      createdAt
      updatedAt
      codeTableDetailsId
      __typename
    }
    approved
    profileImageUrl
    createdAt
    updatedAt
    instituteMembersId
    memberGenderId
    memberInstituteId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMemberSubscriptionVariables,
  APITypes.OnDeleteMemberSubscription
>;
export const onCreateCodeTable = /* GraphQL */ `subscription OnCreateCodeTable($filter: ModelSubscriptionCodeTableFilterInput) {
  onCreateCodeTable(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCodeTableSubscriptionVariables,
  APITypes.OnCreateCodeTableSubscription
>;
export const onUpdateCodeTable = /* GraphQL */ `subscription OnUpdateCodeTable($filter: ModelSubscriptionCodeTableFilterInput) {
  onUpdateCodeTable(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCodeTableSubscriptionVariables,
  APITypes.OnUpdateCodeTableSubscription
>;
export const onDeleteCodeTable = /* GraphQL */ `subscription OnDeleteCodeTable($filter: ModelSubscriptionCodeTableFilterInput) {
  onDeleteCodeTable(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCodeTableSubscriptionVariables,
  APITypes.OnDeleteCodeTableSubscription
>;
export const onCreateCodeDetail = /* GraphQL */ `subscription OnCreateCodeDetail(
  $filter: ModelSubscriptionCodeDetailFilterInput
) {
  onCreateCodeDetail(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCodeDetailSubscriptionVariables,
  APITypes.OnCreateCodeDetailSubscription
>;
export const onUpdateCodeDetail = /* GraphQL */ `subscription OnUpdateCodeDetail(
  $filter: ModelSubscriptionCodeDetailFilterInput
) {
  onUpdateCodeDetail(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCodeDetailSubscriptionVariables,
  APITypes.OnUpdateCodeDetailSubscription
>;
export const onDeleteCodeDetail = /* GraphQL */ `subscription OnDeleteCodeDetail(
  $filter: ModelSubscriptionCodeDetailFilterInput
) {
  onDeleteCodeDetail(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCodeDetailSubscriptionVariables,
  APITypes.OnDeleteCodeDetailSubscription
>;
export const onCreateTournament = /* GraphQL */ `subscription OnCreateTournament(
  $filter: ModelSubscriptionTournamentFilterInput
) {
  onCreateTournament(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTournamentSubscriptionVariables,
  APITypes.OnCreateTournamentSubscription
>;
export const onUpdateTournament = /* GraphQL */ `subscription OnUpdateTournament(
  $filter: ModelSubscriptionTournamentFilterInput
) {
  onUpdateTournament(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTournamentSubscriptionVariables,
  APITypes.OnUpdateTournamentSubscription
>;
export const onDeleteTournament = /* GraphQL */ `subscription OnDeleteTournament(
  $filter: ModelSubscriptionTournamentFilterInput
) {
  onDeleteTournament(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTournamentSubscriptionVariables,
  APITypes.OnDeleteTournamentSubscription
>;
export const onCreateMatch = /* GraphQL */ `subscription OnCreateMatch($filter: ModelSubscriptionMatchFilterInput) {
  onCreateMatch(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMatchSubscriptionVariables,
  APITypes.OnCreateMatchSubscription
>;
export const onUpdateMatch = /* GraphQL */ `subscription OnUpdateMatch($filter: ModelSubscriptionMatchFilterInput) {
  onUpdateMatch(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMatchSubscriptionVariables,
  APITypes.OnUpdateMatchSubscription
>;
export const onDeleteMatch = /* GraphQL */ `subscription OnDeleteMatch($filter: ModelSubscriptionMatchFilterInput) {
  onDeleteMatch(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMatchSubscriptionVariables,
  APITypes.OnDeleteMatchSubscription
>;
