const chalk = require('chalk')
const yargs = require('yargs')
const notes  = require('./notes')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },

    handler(argV) {
       notes.addNote(argV.title, argV.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argV) {
        notes.removeNote(argV.title)
    }
})


// Create List command

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler() {
        notes.listNote()
    }
})

// Create Read command

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Read Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argV) {
        notes.readNote(argV.title)
    }
})

yargs.parse()

//console.log(yargs.argv)




