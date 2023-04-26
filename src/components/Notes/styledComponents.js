import styled from 'styled-components'

export const CompleteNotesContainer = styled.div`
  min-height: 100vh;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NotesMainHeading = styled.h1`
  font-family: 'Bree Serif';
  color: #4c63b6;
  margin: 10px 0px 20px 0px;
`

export const NotesTypeFormContainer = styled.form`
  box-shadow: 1px 1px 15px #cbd5e1;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 100%;
  border-radius: 5px;
  @media all and (min-width: 768px) {
    width: 600px;
  }
`

export const NoteInputTitle = styled.input`
  border: none;
  margin: 20px 0px 20px 0px;
  height: 25px;
  outline: none;
  font-weight: bold;
`

export const NoteTextArea = styled.textarea`
  border: none;
  margin: 20px 0px 20px 0px;
  height: 50px;
  outline: none;
  font-weight: bold;
`

export const NoteSubmitButton = styled.button`
  align-self: flex-end;
  margin: 25px 0px 20px 0px;
  background-color: #4c63b6;
  font-weight: bold;
  border: none;
  width: 100px;
  color: white;
  height: 45px;
  border-radius: 5px;
  font-size: 20px;
`

export const NotesUnOrderListItem = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  min-height: 250px;
  width: 100%;
  margin-top: 25px;
  flex-wrap: wrap;
  @media all and (min-width: 768px) {
    width: 600px;
    justify-content: space-around;
  }
`
// No Task Available

export const NoTaskContainer = styled.div`
  width: 100%;
  color: #334155;
`

export const NoTaskImage = styled.img`
  width: 100px;
`

export const NoTaskHeading = styled.h1`
  margin: 15px 0px 15px 0px;
`

export const NoTaskPara = styled.p``
