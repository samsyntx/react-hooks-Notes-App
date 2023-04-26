import {
  CompleteNotesContainer,
  NotesMainHeading,
  NotesTypeFormContainer,
  NoteInputTitle,
  NoteTextArea,
  NotesUnOrderListItem,
  NoteSubmitButton,
} from './styledComponents'

const Notes = () => (
  <CompleteNotesContainer>
    <NotesMainHeading>Notes</NotesMainHeading>
    <NotesTypeFormContainer>
      <NoteInputTitle type="text" placeholder="Title" />
      <NoteTextArea placeholder="Take a Note..." />
      <NoteSubmitButton type="submit">Add</NoteSubmitButton>
    </NotesTypeFormContainer>
    <NotesUnOrderListItem>No Notes</NotesUnOrderListItem>
  </CompleteNotesContainer>
)

export default Notes
