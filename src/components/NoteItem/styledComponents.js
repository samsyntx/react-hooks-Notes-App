import styled from 'styled-components'

export const CompleteNoteList = styled.li`
  padding: 20px;
  border: 1px solid #475569;
  border-radius: 10px;
  width: 100%;
  text-align: left;
  max-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media all and (min-width: 768px) {
    width: 280px;
    margin: 5px;
  }
`

export const NoteItemTitle = styled.h1`
  margin: 0px 0px 10px 0px;
  color: #1e293b;
  font-size: 25px;
`

export const NoteItemContent = styled.p`
  color: #334155;
`
