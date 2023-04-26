import {useState} from 'react'
import {v4 as uuidV4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  CompleteNotesContainer,
  NotesMainHeading,
  NotesTypeFormContainer,
  NoteInputTitle,
  NoteTextArea,
  NotesUnOrderListItem,
  NoteSubmitButton,
  NoTaskContainer,
  NoTaskImage,
  NoTaskHeading,
  NoTaskPara,
} from './styledComponents'

const Notes = () => {
  const [taskList, updateTask] = useState([])

  const [userTitle, updateTitle] = useState('')

  const [userNotes, updateNote] = useState('')

  const clickToChangeTitle = event => {
    updateTitle(event.target.value)
  }

  const clickToChangeNote = event => {
    updateNote(event.target.value)
  }

  const clickToAddNewItem = event => {
    event.preventDefault()

    const newItem = {
      id: uuidV4(),
      userTitle,
      userNotes,
    }
    updateTask(prevState => [...prevState, newItem])
    updateTitle('')
    updateNote('')
  }

  const isTaskAvailable = taskList.length > 0

  return (
    <CompleteNotesContainer>
      <NotesMainHeading>Notes</NotesMainHeading>
      <NotesTypeFormContainer onSubmit={clickToAddNewItem}>
        <NoteInputTitle
          type="text"
          placeholder="Title"
          onChange={clickToChangeTitle}
          value={userTitle}
        />
        <NoteTextArea
          placeholder="Take a Note..."
          onChange={clickToChangeNote}
          value={userNotes}
        />
        <NoteSubmitButton onClick={clickToAddNewItem} type="submit">
          Add
        </NoteSubmitButton>
      </NotesTypeFormContainer>
      <NotesUnOrderListItem>
        {isTaskAvailable ? (
          taskList.map(eachItem => (
            <NoteItem key={eachItem.id} eachItemDetail={eachItem} />
          ))
        ) : (
          <NoTaskContainer>
            <NoTaskImage
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <NoTaskHeading>No Notes Yet</NoTaskHeading>
            <NoTaskPara>Notes you add will appear here</NoTaskPara>
          </NoTaskContainer>
        )}
      </NotesUnOrderListItem>
    </CompleteNotesContainer>
  )
}
export default Notes
