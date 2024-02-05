## Exercise 0.6 - New Note In Single Page App

sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: HTTP STATUS 201 Created
    deactivate server

    note right of browser: server sends JSON-data containing the content of the note and timestamp  