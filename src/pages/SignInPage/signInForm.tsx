import React, { KeyboardEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Hub } from 'aws-amplify/utils'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { signIn, resetPassword } from 'aws-amplify/auth'
import anime from 'animejs'
import Swal from 'sweetalert2'
import { ToastContainer, showToastMessage } from 'component/toastMessage'
import { SignInLine } from './signInLine'
import 'configureAmplify'

interface LoginForm {
  email: string,
  password: string
}

export default function SignInForm() {
  const navigate = useNavigate();

  // Confirm sign in
  Hub.listen('auth', ({payload }) => {
    console.log(payload.event);
    if (payload.event === 'signedIn') {
      navigate('/admin')
    }
  })

  // Animation for line on focus
  if (typeof document !== 'undefined') {
    let current: any = null

    document.querySelector('#email')?.addEventListener('focus', (e) => {
      if (current) current.pause()
      current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: 0,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '240 1386',
          duration: 700,
          easing: 'easeOutQuart'
        }
      })
    })
  
    document.querySelector('#password')?.addEventListener('focus', (e) => {
      if (current) current.pause()
      current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: -336,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '240 1386',
          duration: 700,
          easing: 'easeOutQuart'
        }
      });
    });
  
    document.querySelector('#submit')?.addEventListener('focus', (e) => {
      if (current) current.pause();
      current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: -730,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '530 1386',
          duration: 700,
          easing: 'easeOutQuart'
        }
      });
    });
  
    document.querySelector('#submit > input')?.addEventListener('focus', (e) => {
      if (current) current.pause();
      current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: -730,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '530 1386',
          duration: 700,
          easing: 'easeOutQuart'
        }
      });
    });
  }

  // Form related functions  
  const initialValue = {email: '', password: ''}

  const schema = Yup.object().shape({
    email: Yup.string()
      .typeError('')
      .required('사용자 이메일을 입력하세요.')
      .email('이메일 형식으로 입력해주세요.'),
    password: Yup.string()
      .typeError('')
      .required('비밀번호를 입력해주세요.'),
  })

  const submitForm = async (values: LoginForm) => {
    schema.validate(values, {abortEarly: false})
      .then(validData => {
        signInWithEmailAndPassword(validData)
      })
      .catch(error => {
        if (error instanceof Yup.ValidationError) {
          error.inner.forEach(error => {
            showToastMessage(error.message, "error")
          })
        } else {
          console.log(error)
        }
      })
  }

  const signInWithEmailAndPassword = async (values: LoginForm) => {
    try {
      const username = values.email
      const password = values.password
      const { isSignedIn, nextStep } = await signIn({ username, password })
      console.log(isSignedIn, nextStep)
      if (isSignedIn) {
        navigate('/admin')
      } else {
        switch(nextStep.signInStep) {
          case 'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED':
            
        }
      }
    } catch (error) {
      const result = await Swal.fire({
        icon: 'error',
        title: '로그인 오류',
        text: error as string,
        showCancelButton: true,
        cancelButtonText: '패스워드 초기화',
        confirmButtonText: '확인'
      })
      if (!result.isConfirmed) {
        resetPassword({username: values.email})
      }
    }
  }

  return (
    <div>
      <SignInLine />
      <div className="form">
        <Formik
          initialValues={initialValue}
          onSubmit={submitForm}>
          {(formik) => {
            const { values, handleSubmit, handleChange } = formik

            const keyDown = (event: KeyboardEvent) => {
              if (event.code === 'Space') {
                handleSubmit();
              }
            }

            return (
              <form id="signInForm" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={values.email} onChange={handleChange} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={values.password} onChange={handleChange} />
                <div id="submit" tabIndex={0} onKeyDown={keyDown}>
                  <input type="submit" value="Submit" />
                </div>
              </form>
            )
          }}
        </Formik>
        <ToastContainer />
      </div>
    </div>
  )
}