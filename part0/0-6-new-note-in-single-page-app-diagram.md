```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note right of browser: The note is sent as JSON data with content and timestamp
    activate server
    server-->>browser: 201 Created: {"message":"note created"}
    deactivate server
```