import { Route, Routes} from "react-router-dom";
import { 
  SignInPage,
  Layout,
  DashboardPage,
  InstituteListPage,
  InstituteDetailPage,
  MemberListPage,
  MemberDetailPage,
  // TournamentListPage,
  // TournamentDetailPage,
  // MatchListPage,
  // MatchDetailPage,
  // MatchingPage,
  // CreateMatchPage
} from './pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/admin/*" element={<Layout children={undefined} />} >
        <Route path="" element={<DashboardPage />} />
        <Route path="institute/*">
          <Route path="" element={<InstituteListPage/>} /> 
          <Route path=":id/" element={<InstituteDetailPage />} />
        </Route>
        <Route path="member/*">
          <Route path="approved" element={<MemberListPage params={{approved: 'approved'}} key="approved"/>} />
          <Route path="unapproved" element={<MemberListPage params={{approved: 'unapproved'}} key="unapproved" />} />
          <Route path=":id/" element={<MemberDetailPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

/*

        <Route path="member/*">
          <Route path="approved" element={<MemberListPage params={{approved: 'approved'}} key="approved"/>} />
          <Route path="unapproved" element={<MemberListPage params={{approved: 'unapproved'}} key="unapproved" />} />
          <Route path=":id/" element={<MemberDetailPage />} />
        </Route>
        <Route path="tournament/*">
          <Route path="list/" element={<TournamentListPage />} />
          <Route path=":id/" element={<TournamentDetailPage />} />
          <Route path="matches/*">
            <Route path=":id/" element={<MatchListPage />} />
            <Route path="match/:id/" element={<MatchDetailPage />} />
            <Route path="new/:id/" element={<CreateMatchPage />} />
          </Route>
          <Route path="matching/" element={<MatchingPage />} />
        </Route>
*/

export default App;
