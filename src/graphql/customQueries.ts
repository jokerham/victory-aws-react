import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const listMembersByApprovedWithInstituteTitle = /* GraphQL */ `query listMembersByApprovedWithInstituteTitle(
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
      name
      email
      contact
      birthday
      gender {
        name
      }
      institute {
        title
      }
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

export const listInstitutesWithRepresentativeName = /* GraphQL */ `query listInstitutesWithRepresentativeName(
  $filter: ModelInstituteFilterInput
  $limit: Int
  $nextToken: String
) {
  listInstitutes(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      sport
      title
      location
      representative {
        name
      }
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

export const listMatchesWithCodeDetails = /* GraphQL */ `query listMatchesWithCodeDetails(
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
      matchType {
        name
        sortOrder
      }
      tournamentType {
        name
      }
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