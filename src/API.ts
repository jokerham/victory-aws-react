/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelMemberFilterInput = {
  id?: ModelIDInput | null,
  congnitoId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  contact?: ModelStringInput | null,
  weight?: ModelFloatInput | null,
  approved?: ModelStringInput | null,
  profileImageUrl?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMemberFilterInput | null > | null,
  or?: Array< ModelMemberFilterInput | null > | null,
  not?: ModelMemberFilterInput | null,
  instituteMembersId?: ModelIDInput | null,
  memberInstituteId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelMemberConnection = {
  __typename: "ModelMemberConnection",
  items:  Array<Member | null >,
  nextToken?: string | null,
};

export type Member = {
  __typename: "Member",
  id: string,
  congnitoId?: string | null,
  name: string,
  email: string,
  contact?: string | null,
  institute?: Institute | null,
  weight?: number | null,
  approved?: string | null,
  profileImageUrl?: string | null,
  createdAt: string,
  updatedAt: string,
  instituteMembersId?: string | null,
  memberInstituteId?: string | null,
};

export type Institute = {
  __typename: "Institute",
  id: string,
  sport: string,
  title: string,
  location?: string | null,
  representative?: Member | null,
  members?: ModelMemberConnection | null,
  createdAt: string,
  updatedAt: string,
  instituteRepresentativeId?: string | null,
  representativeId?: string | null,
};

export type ModelInstituteFilterInput = {
  id?: ModelIDInput | null,
  sport?: ModelStringInput | null,
  title?: ModelStringInput | null,
  location?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelInstituteFilterInput | null > | null,
  or?: Array< ModelInstituteFilterInput | null > | null,
  not?: ModelInstituteFilterInput | null,
  instituteRepresentativeId?: ModelIDInput | null,
  representativeId?: ModelStringInput | null,
};

export type ModelInstituteConnection = {
  __typename: "ModelInstituteConnection",
  items:  Array<Institute | null >,
  nextToken?: string | null,
};

export type CreateInstituteInput = {
  id?: string | null,
  sport: string,
  title: string,
  location?: string | null,
  instituteRepresentativeId?: string | null,
};

export type ModelInstituteConditionInput = {
  sport?: ModelStringInput | null,
  title?: ModelStringInput | null,
  location?: ModelStringInput | null,
  and?: Array< ModelInstituteConditionInput | null > | null,
  or?: Array< ModelInstituteConditionInput | null > | null,
  not?: ModelInstituteConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  instituteRepresentativeId?: ModelIDInput | null,
  representativeId?: ModelStringInput | null,
};

export type UpdateInstituteInput = {
  id: string,
  sport?: string | null,
  title?: string | null,
  location?: string | null,
  instituteRepresentativeId?: string | null,
};

export type DeleteInstituteInput = {
  id: string,
};

export type CreateMemberInput = {
  id?: string | null,
  congnitoId?: string | null,
  name: string,
  email: string,
  contact?: string | null,
  weight?: number | null,
  approved?: string | null,
  profileImageUrl?: string | null,
  instituteMembersId?: string | null,
  memberInstituteId?: string | null,
};

export type ModelMemberConditionInput = {
  congnitoId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  contact?: ModelStringInput | null,
  weight?: ModelFloatInput | null,
  approved?: ModelStringInput | null,
  profileImageUrl?: ModelStringInput | null,
  and?: Array< ModelMemberConditionInput | null > | null,
  or?: Array< ModelMemberConditionInput | null > | null,
  not?: ModelMemberConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  instituteMembersId?: ModelIDInput | null,
  memberInstituteId?: ModelIDInput | null,
};

export type UpdateMemberInput = {
  id: string,
  congnitoId?: string | null,
  name?: string | null,
  email?: string | null,
  contact?: string | null,
  weight?: number | null,
  approved?: string | null,
  profileImageUrl?: string | null,
  instituteMembersId?: string | null,
  memberInstituteId?: string | null,
};

export type DeleteMemberInput = {
  id: string,
};

export type CreateCodeTableInput = {
  id?: string | null,
  name: string,
};

export type ModelCodeTableConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelCodeTableConditionInput | null > | null,
  or?: Array< ModelCodeTableConditionInput | null > | null,
  not?: ModelCodeTableConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CodeTable = {
  __typename: "CodeTable",
  id: string,
  name: string,
  details?: ModelCodeDetailConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCodeDetailConnection = {
  __typename: "ModelCodeDetailConnection",
  items:  Array<CodeDetail | null >,
  nextToken?: string | null,
};

export type CodeDetail = {
  __typename: "CodeDetail",
  id: string,
  codeTable?: CodeTable | null,
  name: string,
  value: string,
  sortOrder: number,
  createdAt: string,
  updatedAt: string,
  codeTableDetailsId?: string | null,
};

export type UpdateCodeTableInput = {
  id: string,
  name?: string | null,
};

export type DeleteCodeTableInput = {
  id: string,
};

export type CreateCodeDetailInput = {
  id?: string | null,
  name: string,
  value: string,
  sortOrder: number,
  codeTableDetailsId?: string | null,
};

export type ModelCodeDetailConditionInput = {
  name?: ModelStringInput | null,
  value?: ModelStringInput | null,
  sortOrder?: ModelIntInput | null,
  and?: Array< ModelCodeDetailConditionInput | null > | null,
  or?: Array< ModelCodeDetailConditionInput | null > | null,
  not?: ModelCodeDetailConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  codeTableDetailsId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateCodeDetailInput = {
  id: string,
  name?: string | null,
  value?: string | null,
  sortOrder?: number | null,
  codeTableDetailsId?: string | null,
};

export type DeleteCodeDetailInput = {
  id: string,
};

export type CreateTournamentInput = {
  id?: string | null,
  title: string,
  location?: string | null,
  eventDate?: string | null,
  dueDate?: string | null,
  rings?: number | null,
};

export type ModelTournamentConditionInput = {
  title?: ModelStringInput | null,
  location?: ModelStringInput | null,
  eventDate?: ModelStringInput | null,
  dueDate?: ModelStringInput | null,
  rings?: ModelIntInput | null,
  and?: Array< ModelTournamentConditionInput | null > | null,
  or?: Array< ModelTournamentConditionInput | null > | null,
  not?: ModelTournamentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Tournament = {
  __typename: "Tournament",
  id: string,
  title: string,
  location?: string | null,
  eventDate?: string | null,
  dueDate?: string | null,
  rings?: number | null,
  Matches?: ModelMatchConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelMatchConnection = {
  __typename: "ModelMatchConnection",
  items:  Array<Match | null >,
  nextToken?: string | null,
};

export type Match = {
  __typename: "Match",
  id: string,
  tournament?: Tournament | null,
  matchType?: CodeDetail | null,
  weight: number,
  tournamentType?: CodeDetail | null,
  duration?: number | null,
  rounds?: number | null,
  createdAt: string,
  updatedAt: string,
  tournamentMatchesId?: string | null,
  matchMatchTypeId?: string | null,
  matchTournamentTypeId?: string | null,
};

export type UpdateTournamentInput = {
  id: string,
  title?: string | null,
  location?: string | null,
  eventDate?: string | null,
  dueDate?: string | null,
  rings?: number | null,
};

export type DeleteTournamentInput = {
  id: string,
};

export type CreateMatchInput = {
  id?: string | null,
  weight: number,
  duration?: number | null,
  rounds?: number | null,
  tournamentMatchesId?: string | null,
  matchMatchTypeId?: string | null,
  matchTournamentTypeId?: string | null,
};

export type ModelMatchConditionInput = {
  weight?: ModelFloatInput | null,
  duration?: ModelIntInput | null,
  rounds?: ModelIntInput | null,
  and?: Array< ModelMatchConditionInput | null > | null,
  or?: Array< ModelMatchConditionInput | null > | null,
  not?: ModelMatchConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  tournamentMatchesId?: ModelIDInput | null,
  matchMatchTypeId?: ModelIDInput | null,
  matchTournamentTypeId?: ModelIDInput | null,
};

export type UpdateMatchInput = {
  id: string,
  weight?: number | null,
  duration?: number | null,
  rounds?: number | null,
  tournamentMatchesId?: string | null,
  matchMatchTypeId?: string | null,
  matchTournamentTypeId?: string | null,
};

export type DeleteMatchInput = {
  id: string,
};

export type ModelCodeTableFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCodeTableFilterInput | null > | null,
  or?: Array< ModelCodeTableFilterInput | null > | null,
  not?: ModelCodeTableFilterInput | null,
};

export type ModelCodeTableConnection = {
  __typename: "ModelCodeTableConnection",
  items:  Array<CodeTable | null >,
  nextToken?: string | null,
};

export type ModelCodeDetailFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  value?: ModelStringInput | null,
  sortOrder?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCodeDetailFilterInput | null > | null,
  or?: Array< ModelCodeDetailFilterInput | null > | null,
  not?: ModelCodeDetailFilterInput | null,
  codeTableDetailsId?: ModelIDInput | null,
};

export type ModelTournamentFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  location?: ModelStringInput | null,
  eventDate?: ModelStringInput | null,
  dueDate?: ModelStringInput | null,
  rings?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTournamentFilterInput | null > | null,
  or?: Array< ModelTournamentFilterInput | null > | null,
  not?: ModelTournamentFilterInput | null,
};

export type ModelTournamentConnection = {
  __typename: "ModelTournamentConnection",
  items:  Array<Tournament | null >,
  nextToken?: string | null,
};

export type ModelMatchFilterInput = {
  id?: ModelIDInput | null,
  weight?: ModelFloatInput | null,
  duration?: ModelIntInput | null,
  rounds?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMatchFilterInput | null > | null,
  or?: Array< ModelMatchFilterInput | null > | null,
  not?: ModelMatchFilterInput | null,
  tournamentMatchesId?: ModelIDInput | null,
  matchMatchTypeId?: ModelIDInput | null,
  matchTournamentTypeId?: ModelIDInput | null,
};

export type ModelSubscriptionInstituteFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  sport?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionInstituteFilterInput | null > | null,
  or?: Array< ModelSubscriptionInstituteFilterInput | null > | null,
  instituteMembersId?: ModelSubscriptionIDInput | null,
  instituteRepresentativeId?: ModelSubscriptionIDInput | null,
  representativeId?: ModelStringInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionMemberFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  contact?: ModelSubscriptionStringInput | null,
  weight?: ModelSubscriptionFloatInput | null,
  approved?: ModelSubscriptionStringInput | null,
  profileImageUrl?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMemberFilterInput | null > | null,
  or?: Array< ModelSubscriptionMemberFilterInput | null > | null,
  memberInstituteId?: ModelSubscriptionIDInput | null,
  congnitoId?: ModelStringInput | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionCodeTableFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCodeTableFilterInput | null > | null,
  or?: Array< ModelSubscriptionCodeTableFilterInput | null > | null,
  codeTableDetailsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionCodeDetailFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionStringInput | null,
  sortOrder?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCodeDetailFilterInput | null > | null,
  or?: Array< ModelSubscriptionCodeDetailFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionTournamentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  eventDate?: ModelSubscriptionStringInput | null,
  dueDate?: ModelSubscriptionStringInput | null,
  rings?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTournamentFilterInput | null > | null,
  or?: Array< ModelSubscriptionTournamentFilterInput | null > | null,
  tournamentMatchesId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionMatchFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  weight?: ModelSubscriptionFloatInput | null,
  duration?: ModelSubscriptionIntInput | null,
  rounds?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMatchFilterInput | null > | null,
  or?: Array< ModelSubscriptionMatchFilterInput | null > | null,
  matchMatchTypeId?: ModelSubscriptionIDInput | null,
  matchTournamentTypeId?: ModelSubscriptionIDInput | null,
};

export type listMembersByApprovedWithInstituteTitleQueryVariables = {
  approved: string,
  name?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type listMembersByApprovedWithInstituteTitleQuery = {
  listMembersByApproved?:  {
    __typename: "ModelMemberConnection",
    items:  Array< {
      __typename: "Member",
      id: string,
      name: string,
      email: string,
      contact?: string | null,
      institute?:  {
        __typename: "Institute",
        title: string,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type listInstitutesWithRepresentativeNameQueryVariables = {
  filter?: ModelInstituteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type listInstitutesWithRepresentativeNameQuery = {
  listInstitutes?:  {
    __typename: "ModelInstituteConnection",
    items:  Array< {
      __typename: "Institute",
      id: string,
      sport: string,
      title: string,
      location?: string | null,
      representative?:  {
        __typename: "Member",
        name: string,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateInstituteMutationVariables = {
  input: CreateInstituteInput,
  condition?: ModelInstituteConditionInput | null,
};

export type CreateInstituteMutation = {
  createInstitute?:  {
    __typename: "Institute",
    id: string,
    sport: string,
    title: string,
    location?: string | null,
    representative?:  {
      __typename: "Member",
      id: string,
      congnitoId?: string | null,
      name: string,
      email: string,
      contact?: string | null,
      weight?: number | null,
      approved?: string | null,
      profileImageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      instituteMembersId?: string | null,
      memberInstituteId?: string | null,
    } | null,
    members?:  {
      __typename: "ModelMemberConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    instituteRepresentativeId?: string | null,
    representativeId?: string | null,
  } | null,
};

export type UpdateInstituteMutationVariables = {
  input: UpdateInstituteInput,
  condition?: ModelInstituteConditionInput | null,
};

export type UpdateInstituteMutation = {
  updateInstitute?:  {
    __typename: "Institute",
    id: string,
    sport: string,
    title: string,
    location?: string | null,
    representative?:  {
      __typename: "Member",
      id: string,
      congnitoId?: string | null,
      name: string,
      email: string,
      contact?: string | null,
      weight?: number | null,
      approved?: string | null,
      profileImageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      instituteMembersId?: string | null,
      memberInstituteId?: string | null,
    } | null,
    members?:  {
      __typename: "ModelMemberConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    instituteRepresentativeId?: string | null,
    representativeId?: string | null,
  } | null,
};

export type DeleteInstituteMutationVariables = {
  input: DeleteInstituteInput,
  condition?: ModelInstituteConditionInput | null,
};

export type DeleteInstituteMutation = {
  deleteInstitute?:  {
    __typename: "Institute",
    id: string,
    sport: string,
    title: string,
    location?: string | null,
    representative?:  {
      __typename: "Member",
      id: string,
      congnitoId?: string | null,
      name: string,
      email: string,
      contact?: string | null,
      weight?: number | null,
      approved?: string | null,
      profileImageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      instituteMembersId?: string | null,
      memberInstituteId?: string | null,
    } | null,
    members?:  {
      __typename: "ModelMemberConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    instituteRepresentativeId?: string | null,
    representativeId?: string | null,
  } | null,
};

export type CreateMemberMutationVariables = {
  input: CreateMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type CreateMemberMutation = {
  createMember?:  {
    __typename: "Member",
    id: string,
    congnitoId?: string | null,
    name: string,
    email: string,
    contact?: string | null,
    institute?:  {
      __typename: "Institute",
      id: string,
      sport: string,
      title: string,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      instituteRepresentativeId?: string | null,
      representativeId?: string | null,
    } | null,
    weight?: number | null,
    approved?: string | null,
    profileImageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
    instituteMembersId?: string | null,
    memberInstituteId?: string | null,
  } | null,
};

export type UpdateMemberMutationVariables = {
  input: UpdateMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type UpdateMemberMutation = {
  updateMember?:  {
    __typename: "Member",
    id: string,
    congnitoId?: string | null,
    name: string,
    email: string,
    contact?: string | null,
    institute?:  {
      __typename: "Institute",
      id: string,
      sport: string,
      title: string,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      instituteRepresentativeId?: string | null,
      representativeId?: string | null,
    } | null,
    weight?: number | null,
    approved?: string | null,
    profileImageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
    instituteMembersId?: string | null,
    memberInstituteId?: string | null,
  } | null,
};

export type DeleteMemberMutationVariables = {
  input: DeleteMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type DeleteMemberMutation = {
  deleteMember?:  {
    __typename: "Member",
    id: string,
    congnitoId?: string | null,
    name: string,
    email: string,
    contact?: string | null,
    institute?:  {
      __typename: "Institute",
      id: string,
      sport: string,
      title: string,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      instituteRepresentativeId?: string | null,
      representativeId?: string | null,
    } | null,
    weight?: number | null,
    approved?: string | null,
    profileImageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
    instituteMembersId?: string | null,
    memberInstituteId?: string | null,
  } | null,
};

export type CreateCodeTableMutationVariables = {
  input: CreateCodeTableInput,
  condition?: ModelCodeTableConditionInput | null,
};

export type CreateCodeTableMutation = {
  createCodeTable?:  {
    __typename: "CodeTable",
    id: string,
    name: string,
    details?:  {
      __typename: "ModelCodeDetailConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCodeTableMutationVariables = {
  input: UpdateCodeTableInput,
  condition?: ModelCodeTableConditionInput | null,
};

export type UpdateCodeTableMutation = {
  updateCodeTable?:  {
    __typename: "CodeTable",
    id: string,
    name: string,
    details?:  {
      __typename: "ModelCodeDetailConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCodeTableMutationVariables = {
  input: DeleteCodeTableInput,
  condition?: ModelCodeTableConditionInput | null,
};

export type DeleteCodeTableMutation = {
  deleteCodeTable?:  {
    __typename: "CodeTable",
    id: string,
    name: string,
    details?:  {
      __typename: "ModelCodeDetailConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCodeDetailMutationVariables = {
  input: CreateCodeDetailInput,
  condition?: ModelCodeDetailConditionInput | null,
};

export type CreateCodeDetailMutation = {
  createCodeDetail?:  {
    __typename: "CodeDetail",
    id: string,
    codeTable?:  {
      __typename: "CodeTable",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    value: string,
    sortOrder: number,
    createdAt: string,
    updatedAt: string,
    codeTableDetailsId?: string | null,
  } | null,
};

export type UpdateCodeDetailMutationVariables = {
  input: UpdateCodeDetailInput,
  condition?: ModelCodeDetailConditionInput | null,
};

export type UpdateCodeDetailMutation = {
  updateCodeDetail?:  {
    __typename: "CodeDetail",
    id: string,
    codeTable?:  {
      __typename: "CodeTable",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    value: string,
    sortOrder: number,
    createdAt: string,
    updatedAt: string,
    codeTableDetailsId?: string | null,
  } | null,
};

export type DeleteCodeDetailMutationVariables = {
  input: DeleteCodeDetailInput,
  condition?: ModelCodeDetailConditionInput | null,
};

export type DeleteCodeDetailMutation = {
  deleteCodeDetail?:  {
    __typename: "CodeDetail",
    id: string,
    codeTable?:  {
      __typename: "CodeTable",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    value: string,
    sortOrder: number,
    createdAt: string,
    updatedAt: string,
    codeTableDetailsId?: string | null,
  } | null,
};

export type CreateTournamentMutationVariables = {
  input: CreateTournamentInput,
  condition?: ModelTournamentConditionInput | null,
};

export type CreateTournamentMutation = {
  createTournament?:  {
    __typename: "Tournament",
    id: string,
    title: string,
    location?: string | null,
    eventDate?: string | null,
    dueDate?: string | null,
    rings?: number | null,
    Matches?:  {
      __typename: "ModelMatchConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTournamentMutationVariables = {
  input: UpdateTournamentInput,
  condition?: ModelTournamentConditionInput | null,
};

export type UpdateTournamentMutation = {
  updateTournament?:  {
    __typename: "Tournament",
    id: string,
    title: string,
    location?: string | null,
    eventDate?: string | null,
    dueDate?: string | null,
    rings?: number | null,
    Matches?:  {
      __typename: "ModelMatchConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTournamentMutationVariables = {
  input: DeleteTournamentInput,
  condition?: ModelTournamentConditionInput | null,
};

export type DeleteTournamentMutation = {
  deleteTournament?:  {
    __typename: "Tournament",
    id: string,
    title: string,
    location?: string | null,
    eventDate?: string | null,
    dueDate?: string | null,
    rings?: number | null,
    Matches?:  {
      __typename: "ModelMatchConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMatchMutationVariables = {
  input: CreateMatchInput,
  condition?: ModelMatchConditionInput | null,
};

export type CreateMatchMutation = {
  createMatch?:  {
    __typename: "Match",
    id: string,
    tournament?:  {
      __typename: "Tournament",
      id: string,
      title: string,
      location?: string | null,
      eventDate?: string | null,
      dueDate?: string | null,
      rings?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    matchType?:  {
      __typename: "CodeDetail",
      id: string,
      name: string,
      value: string,
      sortOrder: number,
      createdAt: string,
      updatedAt: string,
      codeTableDetailsId?: string | null,
    } | null,
    weight: number,
    tournamentType?:  {
      __typename: "CodeDetail",
      id: string,
      name: string,
      value: string,
      sortOrder: number,
      createdAt: string,
      updatedAt: string,
      codeTableDetailsId?: string | null,
    } | null,
    duration?: number | null,
    rounds?: number | null,
    createdAt: string,
    updatedAt: string,
    tournamentMatchesId?: string | null,
    matchMatchTypeId?: string | null,
    matchTournamentTypeId?: string | null,
  } | null,
};

export type UpdateMatchMutationVariables = {
  input: UpdateMatchInput,
  condition?: ModelMatchConditionInput | null,
};

export type UpdateMatchMutation = {
  updateMatch?:  {
    __typename: "Match",
    id: string,
    tournament?:  {
      __typename: "Tournament",
      id: string,
      title: string,
      location?: string | null,
      eventDate?: string | null,
      dueDate?: string | null,
      rings?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    matchType?:  {
      __typename: "CodeDetail",
      id: string,
      name: string,
      value: string,
      sortOrder: number,
      createdAt: string,
      updatedAt: string,
      codeTableDetailsId?: string | null,
    } | null,
    weight: number,
    tournamentType?:  {
      __typename: "CodeDetail",
      id: string,
      name: string,
      value: string,
      sortOrder: number,
      createdAt: string,
      updatedAt: string,
      codeTableDetailsId?: string | null,
    } | null,
    duration?: number | null,
    rounds?: number | null,
    createdAt: string,
    updatedAt: string,
    tournamentMatchesId?: string | null,
    matchMatchTypeId?: string | null,
    matchTournamentTypeId?: string | null,
  } | null,
};

export type DeleteMatchMutationVariables = {
  input: DeleteMatchInput,
  condition?: ModelMatchConditionInput | null,
};

export type DeleteMatchMutation = {
  deleteMatch?:  {
    __typename: "Match",
    id: string,
    tournament?:  {
      __typename: "Tournament",
      id: string,
      title: string,
      location?: string | null,
      eventDate?: string | null,
      dueDate?: string | null,
      rings?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    matchType?:  {
      __typename: "CodeDetail",
      id: string,
      name: string,
      value: string,
      sortOrder: number,
      createdAt: string,
      updatedAt: string,
      codeTableDetailsId?: string | null,
    } | null,
    weight: number,
    tournamentType?:  {
      __typename: "CodeDetail",
      id: string,
      name: string,
      value: string,
      sortOrder: number,
      createdAt: string,
      updatedAt: string,
      codeTableDetailsId?: string | null,
    } | null,
    duration?: number | null,
    rounds?: number | null,
    createdAt: string,
    updatedAt: string,
    tournamentMatchesId?: string | null,
    matchMatchTypeId?: string | null,
    matchTournamentTypeId?: string | null,
  } | null,
};

export type GetInstituteQueryVariables = {
  id: string,
};

export type GetInstituteQuery = {
  getInstitute?:  {
    __typename: "Institute",
    id: string,
    sport: string,
    title: string,
    location?: string | null,
    representative?:  {
      __typename: "Member",
      id: string,
      congnitoId?: string | null,
      name: string,
      email: string,
      contact?: string | null,
      weight?: number | null,
      approved?: string | null,
      profileImageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      instituteMembersId?: string | null,
      memberInstituteId?: string | null,
    } | null,
    members?:  {
      __typename: "ModelMemberConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    instituteRepresentativeId?: string | null,
    representativeId?: string | null,
  } | null,
};

export type ListInstitutesQueryVariables = {
  filter?: ModelInstituteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInstitutesQuery = {
  listInstitutes?:  {
    __typename: "ModelInstituteConnection",
    items:  Array< {
      __typename: "Institute",
      id: string,
      sport: string,
      title: string,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      instituteRepresentativeId?: string | null,
      representativeId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMemberQueryVariables = {
  id: string,
};

export type GetMemberQuery = {
  getMember?:  {
    __typename: "Member",
    id: string,
    congnitoId?: string | null,
    name: string,
    email: string,
    contact?: string | null,
    institute?:  {
      __typename: "Institute",
      id: string,
      sport: string,
      title: string,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      instituteRepresentativeId?: string | null,
      representativeId?: string | null,
    } | null,
    weight?: number | null,
    approved?: string | null,
    profileImageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
    instituteMembersId?: string | null,
    memberInstituteId?: string | null,
  } | null,
};

export type ListMembersQueryVariables = {
  filter?: ModelMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMembersQuery = {
  listMembers?:  {
    __typename: "ModelMemberConnection",
    items:  Array< {
      __typename: "Member",
      id: string,
      congnitoId?: string | null,
      name: string,
      email: string,
      contact?: string | null,
      weight?: number | null,
      approved?: string | null,
      profileImageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      instituteMembersId?: string | null,
      memberInstituteId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMembersByApprovedQueryVariables = {
  approved: string,
  name?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMembersByApprovedQuery = {
  listMembersByApproved?:  {
    __typename: "ModelMemberConnection",
    items:  Array< {
      __typename: "Member",
      id: string,
      congnitoId?: string | null,
      name: string,
      email: string,
      contact?: string | null,
      weight?: number | null,
      approved?: string | null,
      profileImageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      instituteMembersId?: string | null,
      memberInstituteId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCodeTableQueryVariables = {
  id: string,
};

export type GetCodeTableQuery = {
  getCodeTable?:  {
    __typename: "CodeTable",
    id: string,
    name: string,
    details?:  {
      __typename: "ModelCodeDetailConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCodeTablesQueryVariables = {
  filter?: ModelCodeTableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCodeTablesQuery = {
  listCodeTables?:  {
    __typename: "ModelCodeTableConnection",
    items:  Array< {
      __typename: "CodeTable",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCodeDetailQueryVariables = {
  id: string,
};

export type GetCodeDetailQuery = {
  getCodeDetail?:  {
    __typename: "CodeDetail",
    id: string,
    codeTable?:  {
      __typename: "CodeTable",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    value: string,
    sortOrder: number,
    createdAt: string,
    updatedAt: string,
    codeTableDetailsId?: string | null,
  } | null,
};

export type ListCodeDetailsQueryVariables = {
  filter?: ModelCodeDetailFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCodeDetailsQuery = {
  listCodeDetails?:  {
    __typename: "ModelCodeDetailConnection",
    items:  Array< {
      __typename: "CodeDetail",
      id: string,
      name: string,
      value: string,
      sortOrder: number,
      createdAt: string,
      updatedAt: string,
      codeTableDetailsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTournamentQueryVariables = {
  id: string,
};

export type GetTournamentQuery = {
  getTournament?:  {
    __typename: "Tournament",
    id: string,
    title: string,
    location?: string | null,
    eventDate?: string | null,
    dueDate?: string | null,
    rings?: number | null,
    Matches?:  {
      __typename: "ModelMatchConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTournamentsQueryVariables = {
  filter?: ModelTournamentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTournamentsQuery = {
  listTournaments?:  {
    __typename: "ModelTournamentConnection",
    items:  Array< {
      __typename: "Tournament",
      id: string,
      title: string,
      location?: string | null,
      eventDate?: string | null,
      dueDate?: string | null,
      rings?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMatchQueryVariables = {
  id: string,
};

export type GetMatchQuery = {
  getMatch?:  {
    __typename: "Match",
    id: string,
    tournament?:  {
      __typename: "Tournament",
      id: string,
      title: string,
      location?: string | null,
      eventDate?: string | null,
      dueDate?: string | null,
      rings?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    matchType?:  {
      __typename: "CodeDetail",
      id: string,
      name: string,
      value: string,
      sortOrder: number,
      createdAt: string,
      updatedAt: string,
      codeTableDetailsId?: string | null,
    } | null,
    weight: number,
    tournamentType?:  {
      __typename: "CodeDetail",
      id: string,
      name: string,
      value: string,
      sortOrder: number,
      createdAt: string,
      updatedAt: string,
      codeTableDetailsId?: string | null,
    } | null,
    duration?: number | null,
    rounds?: number | null,
    createdAt: string,
    updatedAt: string,
    tournamentMatchesId?: string | null,
    matchMatchTypeId?: string | null,
    matchTournamentTypeId?: string | null,
  } | null,
};

export type ListMatchesQueryVariables = {
  filter?: ModelMatchFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMatchesQuery = {
  listMatches?:  {
    __typename: "ModelMatchConnection",
    items:  Array< {
      __typename: "Match",
      id: string,
      weight: number,
      duration?: number | null,
      rounds?: number | null,
      createdAt: string,
      updatedAt: string,
      tournamentMatchesId?: string | null,
      matchMatchTypeId?: string | null,
      matchTournamentTypeId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateInstituteSubscriptionVariables = {
  filter?: ModelSubscriptionInstituteFilterInput | null,
  representativeId?: string | null,
};

export type OnCreateInstituteSubscription = {
  onCreateInstitute?:  {
    __typename: "Institute",
    id: string,
    sport: string,
    title: string,
    location?: string | null,
    representative?:  {
      __typename: "Member",
      id: string,
      congnitoId?: string | null,
      name: string,
      email: string,
      contact?: string | null,
      weight?: number | null,
      approved?: string | null,
      profileImageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      instituteMembersId?: string | null,
      memberInstituteId?: string | null,
    } | null,
    members?:  {
      __typename: "ModelMemberConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    instituteRepresentativeId?: string | null,
    representativeId?: string | null,
  } | null,
};

export type OnUpdateInstituteSubscriptionVariables = {
  filter?: ModelSubscriptionInstituteFilterInput | null,
  representativeId?: string | null,
};

export type OnUpdateInstituteSubscription = {
  onUpdateInstitute?:  {
    __typename: "Institute",
    id: string,
    sport: string,
    title: string,
    location?: string | null,
    representative?:  {
      __typename: "Member",
      id: string,
      congnitoId?: string | null,
      name: string,
      email: string,
      contact?: string | null,
      weight?: number | null,
      approved?: string | null,
      profileImageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      instituteMembersId?: string | null,
      memberInstituteId?: string | null,
    } | null,
    members?:  {
      __typename: "ModelMemberConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    instituteRepresentativeId?: string | null,
    representativeId?: string | null,
  } | null,
};

export type OnDeleteInstituteSubscriptionVariables = {
  filter?: ModelSubscriptionInstituteFilterInput | null,
  representativeId?: string | null,
};

export type OnDeleteInstituteSubscription = {
  onDeleteInstitute?:  {
    __typename: "Institute",
    id: string,
    sport: string,
    title: string,
    location?: string | null,
    representative?:  {
      __typename: "Member",
      id: string,
      congnitoId?: string | null,
      name: string,
      email: string,
      contact?: string | null,
      weight?: number | null,
      approved?: string | null,
      profileImageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      instituteMembersId?: string | null,
      memberInstituteId?: string | null,
    } | null,
    members?:  {
      __typename: "ModelMemberConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    instituteRepresentativeId?: string | null,
    representativeId?: string | null,
  } | null,
};

export type OnCreateMemberSubscriptionVariables = {
  filter?: ModelSubscriptionMemberFilterInput | null,
  congnitoId?: string | null,
};

export type OnCreateMemberSubscription = {
  onCreateMember?:  {
    __typename: "Member",
    id: string,
    congnitoId?: string | null,
    name: string,
    email: string,
    contact?: string | null,
    institute?:  {
      __typename: "Institute",
      id: string,
      sport: string,
      title: string,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      instituteRepresentativeId?: string | null,
      representativeId?: string | null,
    } | null,
    weight?: number | null,
    approved?: string | null,
    profileImageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
    instituteMembersId?: string | null,
    memberInstituteId?: string | null,
  } | null,
};

export type OnUpdateMemberSubscriptionVariables = {
  filter?: ModelSubscriptionMemberFilterInput | null,
  congnitoId?: string | null,
};

export type OnUpdateMemberSubscription = {
  onUpdateMember?:  {
    __typename: "Member",
    id: string,
    congnitoId?: string | null,
    name: string,
    email: string,
    contact?: string | null,
    institute?:  {
      __typename: "Institute",
      id: string,
      sport: string,
      title: string,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      instituteRepresentativeId?: string | null,
      representativeId?: string | null,
    } | null,
    weight?: number | null,
    approved?: string | null,
    profileImageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
    instituteMembersId?: string | null,
    memberInstituteId?: string | null,
  } | null,
};

export type OnDeleteMemberSubscriptionVariables = {
  filter?: ModelSubscriptionMemberFilterInput | null,
  congnitoId?: string | null,
};

export type OnDeleteMemberSubscription = {
  onDeleteMember?:  {
    __typename: "Member",
    id: string,
    congnitoId?: string | null,
    name: string,
    email: string,
    contact?: string | null,
    institute?:  {
      __typename: "Institute",
      id: string,
      sport: string,
      title: string,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      instituteRepresentativeId?: string | null,
      representativeId?: string | null,
    } | null,
    weight?: number | null,
    approved?: string | null,
    profileImageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
    instituteMembersId?: string | null,
    memberInstituteId?: string | null,
  } | null,
};

export type OnCreateCodeTableSubscriptionVariables = {
  filter?: ModelSubscriptionCodeTableFilterInput | null,
};

export type OnCreateCodeTableSubscription = {
  onCreateCodeTable?:  {
    __typename: "CodeTable",
    id: string,
    name: string,
    details?:  {
      __typename: "ModelCodeDetailConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCodeTableSubscriptionVariables = {
  filter?: ModelSubscriptionCodeTableFilterInput | null,
};

export type OnUpdateCodeTableSubscription = {
  onUpdateCodeTable?:  {
    __typename: "CodeTable",
    id: string,
    name: string,
    details?:  {
      __typename: "ModelCodeDetailConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCodeTableSubscriptionVariables = {
  filter?: ModelSubscriptionCodeTableFilterInput | null,
};

export type OnDeleteCodeTableSubscription = {
  onDeleteCodeTable?:  {
    __typename: "CodeTable",
    id: string,
    name: string,
    details?:  {
      __typename: "ModelCodeDetailConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCodeDetailSubscriptionVariables = {
  filter?: ModelSubscriptionCodeDetailFilterInput | null,
};

export type OnCreateCodeDetailSubscription = {
  onCreateCodeDetail?:  {
    __typename: "CodeDetail",
    id: string,
    codeTable?:  {
      __typename: "CodeTable",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    value: string,
    sortOrder: number,
    createdAt: string,
    updatedAt: string,
    codeTableDetailsId?: string | null,
  } | null,
};

export type OnUpdateCodeDetailSubscriptionVariables = {
  filter?: ModelSubscriptionCodeDetailFilterInput | null,
};

export type OnUpdateCodeDetailSubscription = {
  onUpdateCodeDetail?:  {
    __typename: "CodeDetail",
    id: string,
    codeTable?:  {
      __typename: "CodeTable",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    value: string,
    sortOrder: number,
    createdAt: string,
    updatedAt: string,
    codeTableDetailsId?: string | null,
  } | null,
};

export type OnDeleteCodeDetailSubscriptionVariables = {
  filter?: ModelSubscriptionCodeDetailFilterInput | null,
};

export type OnDeleteCodeDetailSubscription = {
  onDeleteCodeDetail?:  {
    __typename: "CodeDetail",
    id: string,
    codeTable?:  {
      __typename: "CodeTable",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    value: string,
    sortOrder: number,
    createdAt: string,
    updatedAt: string,
    codeTableDetailsId?: string | null,
  } | null,
};

export type OnCreateTournamentSubscriptionVariables = {
  filter?: ModelSubscriptionTournamentFilterInput | null,
};

export type OnCreateTournamentSubscription = {
  onCreateTournament?:  {
    __typename: "Tournament",
    id: string,
    title: string,
    location?: string | null,
    eventDate?: string | null,
    dueDate?: string | null,
    rings?: number | null,
    Matches?:  {
      __typename: "ModelMatchConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTournamentSubscriptionVariables = {
  filter?: ModelSubscriptionTournamentFilterInput | null,
};

export type OnUpdateTournamentSubscription = {
  onUpdateTournament?:  {
    __typename: "Tournament",
    id: string,
    title: string,
    location?: string | null,
    eventDate?: string | null,
    dueDate?: string | null,
    rings?: number | null,
    Matches?:  {
      __typename: "ModelMatchConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTournamentSubscriptionVariables = {
  filter?: ModelSubscriptionTournamentFilterInput | null,
};

export type OnDeleteTournamentSubscription = {
  onDeleteTournament?:  {
    __typename: "Tournament",
    id: string,
    title: string,
    location?: string | null,
    eventDate?: string | null,
    dueDate?: string | null,
    rings?: number | null,
    Matches?:  {
      __typename: "ModelMatchConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMatchSubscriptionVariables = {
  filter?: ModelSubscriptionMatchFilterInput | null,
};

export type OnCreateMatchSubscription = {
  onCreateMatch?:  {
    __typename: "Match",
    id: string,
    tournament?:  {
      __typename: "Tournament",
      id: string,
      title: string,
      location?: string | null,
      eventDate?: string | null,
      dueDate?: string | null,
      rings?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    matchType?:  {
      __typename: "CodeDetail",
      id: string,
      name: string,
      value: string,
      sortOrder: number,
      createdAt: string,
      updatedAt: string,
      codeTableDetailsId?: string | null,
    } | null,
    weight: number,
    tournamentType?:  {
      __typename: "CodeDetail",
      id: string,
      name: string,
      value: string,
      sortOrder: number,
      createdAt: string,
      updatedAt: string,
      codeTableDetailsId?: string | null,
    } | null,
    duration?: number | null,
    rounds?: number | null,
    createdAt: string,
    updatedAt: string,
    tournamentMatchesId?: string | null,
    matchMatchTypeId?: string | null,
    matchTournamentTypeId?: string | null,
  } | null,
};

export type OnUpdateMatchSubscriptionVariables = {
  filter?: ModelSubscriptionMatchFilterInput | null,
};

export type OnUpdateMatchSubscription = {
  onUpdateMatch?:  {
    __typename: "Match",
    id: string,
    tournament?:  {
      __typename: "Tournament",
      id: string,
      title: string,
      location?: string | null,
      eventDate?: string | null,
      dueDate?: string | null,
      rings?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    matchType?:  {
      __typename: "CodeDetail",
      id: string,
      name: string,
      value: string,
      sortOrder: number,
      createdAt: string,
      updatedAt: string,
      codeTableDetailsId?: string | null,
    } | null,
    weight: number,
    tournamentType?:  {
      __typename: "CodeDetail",
      id: string,
      name: string,
      value: string,
      sortOrder: number,
      createdAt: string,
      updatedAt: string,
      codeTableDetailsId?: string | null,
    } | null,
    duration?: number | null,
    rounds?: number | null,
    createdAt: string,
    updatedAt: string,
    tournamentMatchesId?: string | null,
    matchMatchTypeId?: string | null,
    matchTournamentTypeId?: string | null,
  } | null,
};

export type OnDeleteMatchSubscriptionVariables = {
  filter?: ModelSubscriptionMatchFilterInput | null,
};

export type OnDeleteMatchSubscription = {
  onDeleteMatch?:  {
    __typename: "Match",
    id: string,
    tournament?:  {
      __typename: "Tournament",
      id: string,
      title: string,
      location?: string | null,
      eventDate?: string | null,
      dueDate?: string | null,
      rings?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    matchType?:  {
      __typename: "CodeDetail",
      id: string,
      name: string,
      value: string,
      sortOrder: number,
      createdAt: string,
      updatedAt: string,
      codeTableDetailsId?: string | null,
    } | null,
    weight: number,
    tournamentType?:  {
      __typename: "CodeDetail",
      id: string,
      name: string,
      value: string,
      sortOrder: number,
      createdAt: string,
      updatedAt: string,
      codeTableDetailsId?: string | null,
    } | null,
    duration?: number | null,
    rounds?: number | null,
    createdAt: string,
    updatedAt: string,
    tournamentMatchesId?: string | null,
    matchMatchTypeId?: string | null,
    matchTournamentTypeId?: string | null,
  } | null,
};
