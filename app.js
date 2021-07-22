const  yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./note.js')
const { argv } = require('yargs')
const note = require('./note.js')


// Customize yargs version

yargs.version('1.1.0')

// Create Add command
 yargs.command({
     command: 'add',
     describe:'Add a new note',
     builder:{
        title:{
            describe:' Note title ',
            demandOption:true,
            type : 'string'
        },
        body:{
            describe : 'Note body ',
            demandOption: true,
            type: 'string'
        }
    },
     handler(argv){
      notes.addNote(argv.title,argv.body)
     }
    })


// Create Removing command
 
 yargs.command({
     command : 'remove',
     describe: 'Remove note',
     builder :{
           title:{
               describe:'Note title',
               demandOption :true,
               type:'string'
           }    
        
     },
     handler (argv){
        notes.removeNote(argv.title)
     }  
 })


// Create List command
 yargs.command({
     command: 'list',
     describe:'list note',
   
     handler(){
        notes.listNote()
     }
 })


// Create read command
 yargs.command({
     command : 'read',
     describe:'read the note',
     builder :{
         title:{
             describe : "Note title",
             demandOption : true,
             type : 'string'
         }
     
     },
    
     handler(argv){
         notes.readNote(argv.title)
     }

})

yargs.parse()