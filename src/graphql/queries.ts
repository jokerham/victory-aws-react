/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getInstitute = /* GraphQL */ `query GetInstitute($id: ID!) {
  getInstitute(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetInstituteQueryVariables,
  APITypes.GetInstituteQuery
>;
export const listInstitutes = /* GraphQL */ `query ListInstitutes(
  $filter: ModelInstituteFilterInput
  $limit: Int
  $nextToken: String
) {
  listInstitutes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListInstitutesQueryVariables,
  APITypes.ListInstitutesQuery
>;
export const searchInstitutes = /* GraphQL */ `query SearchInstitutes(
  $filter: SearchableInstituteFilterInput
  $sort: [SearchableInstituteSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableInstituteAggregationInput]
) {
  searchInstitutes(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
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
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchInstitutesQueryVariables,
  APITypes.SearchInstitutesQuery
>;
export const getMember = /* GraphQL */ `query GetMember($id: ID!) {
  getMember(id: $id) {
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
` as GeneratedQuery<APITypes.GetMemberQueryVariables, APITypes.GetMemberQuery>;
export const listMembers = /* GraphQL */ `query ListMembers(
  $filter: ModelMemberFilterInput
  $limit: Int
  $nextToken: String
) {
  listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMembersQueryVariables,
  APITypes.ListMembersQuery
>;
export const listMembersByApproved = /* GraphQL */ `query ListMembersByApproved(
  $approved: String!
  $name: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelMemberFilterInput
  $limit: Int
  $nextToken: String
) {
  listMembersByApproved(
    approved: $approved
    name: $name
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMembersByApprovedQueryVariables,
  APITypes.ListMembersByApprovedQuery
>;
export const searchMembers = /* GraphQL */ `query SearchMembers(
  $filter: SearchableMemberFilterInput
  $sort: [SearchableMemberSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableMemberAggregationInput]
) {
  searchMembers(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
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
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchMembersQueryVariables,
  APITypes.SearchMembersQuery
>;
export const getCodeTable = /* GraphQL */ `query GetCodeTable($id: ID!) {
  getCodeTable(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCodeTableQueryVariables,
  APITypes.GetCodeTableQuery
>;
export const listCodeTables = /* GraphQL */ `query ListCodeTables(
  $filter: ModelCodeTableFilterInput
  $limit: Int
  $nextToken: String
) {
  listCodeTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCodeTablesQueryVariables,
  APITypes.ListCodeTablesQuery
>;
export const getCodeDetail = /* GraphQL */ `query GetCodeDetail($id: ID!) {
  getCodeDetail(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCodeDetailQueryVariables,
  APITypes.GetCodeDetailQuery
>;
export const listCodeDetails = /* GraphQL */ `query ListCodeDetails(
  $filter: ModelCodeDetailFilterInput
  $limit: Int
  $nextToken: String
) {
  listCodeDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      value
      sortOrder
      createdAt
      updatedAt
      codeTableDetailsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCodeDetailsQueryVariables,
  APITypes.ListCodeDetailsQuery
>;
export const searchCodeDetails = /* GraphQL */ `query SearchCodeDetails(
  $filter: SearchableCodeDetailFilterInput
  $sort: [SearchableCodeDetailSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableCodeDetailAggregationInput]
) {
  searchCodeDetails(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      name
      value
      sortOrder
      createdAt
      updatedAt
      codeTableDetailsId
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchCodeDetailsQueryVariables,
  APITypes.SearchCodeDetailsQuery
>;
export const getTournament = /* GraphQL */ `query GetTournament($id: ID!) {
  getTournament(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetTournamentQueryVariables,
  APITypes.GetTournamentQuery
>;
export const listTournaments = /* GraphQL */ `query ListTournaments(
  $filter: ModelTournamentFilterInput
  $limit: Int
  $nextToken: String
) {
  listTournaments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTournamentsQueryVariables,
  APITypes.ListTournamentsQuery
>;
export const searchTournaments = /* GraphQL */ `query SearchTournaments(
  $filter: SearchableTournamentFilterInput
  $sort: [SearchableTournamentSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableTournamentAggregationInput]
) {
  searchTournaments(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
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
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchTournamentsQueryVariables,
  APITypes.SearchTournamentsQuery
>;
export const getMatch = /* GraphQL */ `query GetMatch($id: ID!) {
  getMatch(id: $id) {
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
` as GeneratedQuery<APITypes.GetMatchQueryVariables, APITypes.GetMatchQuery>;
export const listMatches = /* GraphQL */ `query ListMatches(
  $filter: ModelMatchFilterInput
  $limit: Int
  $nextToken: String
) {
  listMatches(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      weight
      duration
      rounds
      createdAt
      updatedAt
      tournamentMatchesId
      matchMatchTypeId
      matchTournamentTypeId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMatchesQueryVariables,
  APITypes.ListMatchesQuery
>;
export const searchMatches = /* GraphQL */ `query SearchMatches(
  $filter: SearchableMatchFilterInput
  $sort: [SearchableMatchSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableMatchAggregationInput]
) {
  searchMatches(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      weight
      duration
      rounds
      createdAt
      updatedAt
      tournamentMatchesId
      matchMatchTypeId
      matchTournamentTypeId
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchMatchesQueryVariables,
  APITypes.SearchMatchesQuery
>;
