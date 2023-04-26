import {
  CompleteNoteList,
  NoteItemTitle,
  NoteItemContent,
} from './styledComponents'

const NoteItem = props => {
  const {eachItemDetail} = props
  const {userTitle, userNotes} = eachItemDetail
  return (
    <CompleteNoteList>
      <NoteItemTitle>{userTitle}</NoteItemTitle>
      <NoteItemContent>{userNotes}</NoteItemContent>
    </CompleteNoteList>
  )
}

export default NoteItem
