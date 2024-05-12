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