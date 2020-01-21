# Homepage 

Will write more of this README later. Using this as a base for technical planning in the meantime; Closer to completion, I'll modify this to be a little less technical and a little more readable. 

## Schema Design 

### Kanban 

#### List of Boards 

This object returns a list of all the boards that I have made. This is queried for whenever I want to switch from board to board and need to see what boards I have made/available. 

This will be modified whenever I add or delete a list. 

```javascript 
{
    "names": [
        String, String, ... 
    ]
}
```

#### Board

This object is a description of all of the contents of a specific board. It is modified whenever I want to change anything on the board.

The first version of the project (the "Minimally Viable Product") will probably modify this entire object with every CRUD operation, but I would like to eventually like to change these to subschemas or find a way to not have to load the entire thing at once, but rather do it incrementally. 

```javascript
{
    "name": String,
    "lists" [
    {
        "name": String, 
        "cards": [
        {
            "text": String, 
            "dueDate": String, // Stored DD/MM/YY
            "isComplete": String // Either Y or N
            // More to be added as I add features 
        }, 
        ... 
    ] 
    ...
}
```

### Calendar

Unless I'm feeling burned out, I don't plan on working on the Calendar portion, other than some high-level planning, until the Kanban portion of the project is minimally viable. 

This section of the readme probably won't see any change until then. 

