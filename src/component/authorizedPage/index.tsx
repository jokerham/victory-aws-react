import { useEffect, PropsWithChildren, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react"
import 'configureAmplify'

function AuthorizedConfirmationPage(props: PropsWithChildren) {
  const children = props.children as ReactNode
  const navigate = useNavigate()
  const { authStatus } = useAuthenticator((context) => [context.authStatus])

  useEffect(() => {
    // Confirm sign in
    if (authStatus === 'unauthenticated') {
      navigate("/")
    }
  }, [authStatus, navigate])

  return (
    <>
      { authStatus === 'authenticated' && children }
    </>
  )
}

export default function AuthorizedPage(props: PropsWithChildren) {
  const children = props.children as ReactNode

  return (
    <Authenticator.Provider>
      <AuthorizedConfirmationPage>
        { children }
      </AuthorizedConfirmationPage>
    </Authenticator.Provider>
  )
}

// https://ui.docs.amplify.aws/react/guides/auth-protected