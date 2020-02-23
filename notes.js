const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => 'Fuck you'

const addNote = (title, body) => {

    const notes = loadNote()

    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {

        notes.push({
            title: title,
            body: body
        }) 
        saveNotes(notes)
        console.log('New note added')
    }
    else {
        console.log('Title already taken')
    }
}

const removeNote = (title) => {

    const notes = loadNote()

    const updatedArray = notes.filter((note) => note.title !== title)

    if (updatedArray.length < notes.length) {

        saveNotes(updatedArray)
        console.log(chalk.green('Note removed'))
    }
    else {
        console.log(chalk.red('Note title does not exist'))
    }

}


const listNote = () => {

    console.log(chalk.inverse('Your notes'))
    
    const notes = loadNote()

    notes.forEach(note => {
        console.log(chalk.blue(note.title))
    })

}

const readNote = (title) => {

    const notes = loadNote()

    const foundNote = notes.find((note) => note.title === title)

    if (foundNote) {

        console.log(chalk.green.bold(foundNote.title))
        console.log(foundNote.body)
    }
    else {
        console.log(chalk.red('No note found'))
    }
}

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.JSON', notesJSON)
}

const loadNote = () => {

    try{
        const dataBuffer = fs.readFileSync('notes.JSON')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    
    catch(e) {
        return []
    }
}


 module.exports = {
     getNotes: getNotes,
     addNote: addNote,
     removeNote: removeNote,
     listNote: listNote,
     readNote: readNote
 }