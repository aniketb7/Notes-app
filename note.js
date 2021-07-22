const chalk = require('chalk');
const { NOTIMP } = require('dns');
const fs = require('fs');
const { title } = require('process');


const addNote = (title, body)=> {
    const notes = loadNotes()
    const duplicateNote = notes.find( (note)=> note.title === title) 
   
   
     if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
       saveNotes(notes)
       console.log(chalk.inverse.green('New note added !'))
     }
     else
     {
         console.log(chalk.inverse.red('Note title taken !'))
     }
  
}
const  saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes= ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json') 
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e)
    {
       return []     
    }
}
const removeNote = (title)=>{
    const notes = loadNotes()
    const isPresent =notes.filter((note)=> note.title!==title)
   if(isPresent.length<notes.length)
    {
        console.log(chalk.inverse.green("Note Removed !"))
        saveNotes(isPresent)
    }
    else{
        console.log(chalk.inverse.red("No note found !"))
    }
}


const listNote = ()=>{
    const notes = loadNotes()
    console.log(chalk.inverse.red('Your Notes! '))
   notes.forEach((note) => {
        console.log('Title :' +note.title+' Body :'+note.body)
     });    
    
}

const readNote =(title)=>{
   const notes = loadNotes()
   const readNote = notes.find((note)=> note.title===title)
   if(readNote)
   {
       console.log(chalk.inverse.green(readNote.title+" "+readNote.body))
      
   }
   else{
       console.log(chalk.red('Error !'))
   }
  
     
}
module.exports = {
    addNote : addNote,
    removeNote: removeNote,
    listNote : listNote,
    readNote: readNote
}