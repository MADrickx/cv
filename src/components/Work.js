import React from 'react'
import styled from 'styled-components'
import { mobile, tablet } from '../responsive'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CategoryIcon from '@mui/icons-material/Category'
import ClassIcon from '@mui/icons-material/Class'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu'
import UpdateIcon from '@mui/icons-material/Update'

const Container = styled.div`
  margin: 0.5rem 0 0.5rem 0;
  width: 12%;
  border-radius: 0.5rem;
  background-color: #353535;
  box-sizing: border-box;
  padding: 1rem;
  border: 1px solid #353535;
  &:last-of-type {
    margin-right: 0;
  }
  &:hover {
    border: 1px solid ${(props) => (props.bool ? 'green' : 'red')};
  }
  ${tablet({ width: '24%', maxWidth: '100%' })};
  ${mobile({ width: '100%', maxWidth: '100%' })};
`

const School = styled.div`
  font-size: 1.5rem;
  color: rgb(255, 165, 0);
  margin-bottom: 1rem;
`

const List = styled.ol`
  width: 100%;
`

const ListItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 0.5rem 0;
  & > svg:first-of-type {
    align-self: start;
    width: 12.5%;
    margin: 0 0.5rem 0 0;
  }
  & > div:first-of-type {
    width: 91.5%;
  }
`

const Text = styled.div``

const Work = ({ work }) => {
  return (
    <>
      <Container>
        <School>{work.school}</School>
        <List>
          <ListItem>
            <LocationOnIcon />
            <Text>{work.city}</Text>
          </ListItem>
          <ListItem>
            <CategoryIcon />
            <Text>{work.level}</Text>
          </ListItem>
          <ListItem>
            <HistoryEduIcon />
            <Text> {work.matter}</Text>
          </ListItem>
          <ListItem>
            <ClassIcon />
            <Text>{work.diploma}</Text>
          </ListItem>
          <ListItem>
            <UpdateIcon />
            <Text>{`${work.startYear} - ${work.endYear}`}</Text>
          </ListItem>
        </List>
      </Container>
    </>
  )
}

export default Work
