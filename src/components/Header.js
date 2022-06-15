import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 1rem 0;
  width: 100%;
  height: 5vh;
`

const Head = styled.div`
  padding: 0 1rem;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const ActionContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`
const Action = styled.button`
  margin: 0;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`

const ActionLang = styled.div`
  cursor: pointer;
  span {
    &:after {
      content: '|';
      padding: 0 0.5rem;
    }
    &:last-of-type:after {
      content: '';
    }
  }
`

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: start;
  span:first-of-type {
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
  }
  span:nth-of-type(2) {
    text-transform: uppercase;
    font-weight: 800;
  }
`

const ProffessionContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const AvailContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const lngs = {
  en: { nativeName: 'EN' },
  fr: { nativeName: 'FR' }
}

function Header() {
  const navigateTo = useNavigate()
  const { t, i18n } = useTranslation()
  const returnTo = (loc) => {
    navigateTo(loc)
  }
  return (
    <>
      <HeaderContainer>
        <Head>
          <NameContainer>
            <span>Audric</span>
            <span>Skivée</span>
          </NameContainer>
          <ProffessionContainer>
            <span>Front-End Developer</span>
            <span>In love with React.Js</span>
          </ProffessionContainer>
          <AvailContainer>
            <span>Available right now</span>
            <span>Highly motivated</span>
          </AvailContainer>
          <LocationContainer>
            <span>Belgium</span>
            <span>Liège</span>
          </LocationContainer>
          <ActionContainer>
            <ActionLang>
              {Object.keys(lngs).map((lng) => (
                <span
                  key={lng}
                  style={{
                    fontWeight:
                      i18n.resolvedLanguage === lng ? 'bold' : 'normal'
                  }}
                  type='submit'
                  onClick={() => {
                    i18n.changeLanguage(lng)
                  }}
                >
                  {lngs[lng].nativeName}
                </span>
              ))}
            </ActionLang>
            <Action onClick={() => returnTo('/contact')}>
              {t('menu.contact')}
            </Action>
          </ActionContainer>
        </Head>
      </HeaderContainer>
    </>
  )
}

export default Header
