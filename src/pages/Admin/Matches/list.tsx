import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { generateClient } from '@aws-amplify/api'
import { Match, Tournament } from 'API'
import { getTournament, listMatches } from 'graphql/queries'
import { deleteMatch } from 'graphql/mutations'
import { FcInspection } from 'react-icons/fc'
import { GiBoxingGlove} from 'react-icons/gi'
import { Article, DataTable, showToastMessage } from 'component'
import "configureAmplify"

type ErrorObject = {
  path: null;
  locations: null;
  message: string;
}

type ResponseData = {
  data: null;
  errors: ErrorObject[]
}

const MatchListPage = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [tournament, setTournament] = useState({} as Tournament)
  const [refreshKey, setRefreshKey] = useState(0)

  const columns = [
    { name: 'id', selector: (row: Match) => row.id, omit: true },
    //{ name: 'tournamentId', selector: (row: Match) => row.tournament?.id, omit: true },
    //{ name: '대전 종별', selector: (row: Match) => row.matchType, sortable: true, grow: 1 },
    //{ name: '경기 방식', selector: (row: Match) => row.tournamentType, sortable: true, grow: 1 },
    { name: '체급', selector: (row: Match) => row.weight, sortable: true, grow: 1 },
    { name: '경기 시간', selector: (row: Match) => row.duration, sortable: true, grow: 1 },
    { name: '라운드 횟수', selector: (row: Match) => row.rounds, sortable: true, grow: 1 },
  ]

  const tournamentId = params.id

  const onClickCreateMatch = async() => {
    navigate(`/admin/tournament/matches/new/${tournamentId}`)
  }

  const onEdit = async (values: Match | [Match]) => {
    if (!Array.isArray(values)) {
      navigate(`/admin/tournament/matches/match/${values.id}`)
    }
  }
  
  const onDelete = async (values: Match | [Match]) => {
    if (!Array.isArray(values)) {
      values = [values]
    }
    try {
      const client = generateClient()
      const promises = values.map((async value => {
        return await client.graphql({
          query: deleteMatch,
          variables: { input: {id: value.id} },
          authMode: 'userPool'
        })
      }))
      await Promise.all(promises)
      setRefreshKey(prevKey => prevKey + 1)
    } catch(e) {
      for(const error of (e as ResponseData)?.errors) {
        showToastMessage(error.message, "error")
      }
    }
  }

  const onCancel = async () => {
    navigate(`/admin/tournament/list`)
  }

  const title = "대전 관리"

  useEffect(() => {
    const client = generateClient()
    const getTournamentById = async (id: string) => {
      const tournamentData: any = await client.graphql({
        query: getTournament,
        variables: {id}
      })
      const tournament: Tournament = tournamentData.data.getTournament
      setTournament(tournament)
    }

    if (params !== undefined && params.id !== undefined) {
      getTournamentById(params.id)
    }
  }, [params])

  const buttons = [
    { name: 'createMatch', label: "대전추가", icon: (<GiBoxingGlove />), action: onClickCreateMatch, toggleOnSelect: false },
    { name: 'edit', action: onEdit },
    { name: 'delete', action: onDelete },
    { name: 'cancel', action: onCancel }
  ]
  
  const graphqlOption = {
    query: listMatches,
    options: {
      filter: {
        tournamentMatchesId: {
          eq: tournament.id ?? ""
        }
      }
    },
    name: "listMatches"
  }
  const sortBy = ["matchType","weight"]

  return (
    <main className="main">
      <div className="page-header">
        <div className="page-header__title">
          <FcInspection />
          대전 관리 : {tournament.title}
        </div>
      </div>
      <Article>
        <DataTable
          key={refreshKey}
          title={title}
          columns={columns}
          buttons={buttons}
          graphqlOption={graphqlOption}
          //sortBy={sortBy}
          selectableRowsSingle={false}
        />
      </Article>
    </main>
  )
}

export default MatchListPage