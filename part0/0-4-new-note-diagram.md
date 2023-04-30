```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note  
    activate server
    Note right of browser: The form element submits the note via POST
    server-->>browser: 302 Redirect, Location: /exampleapp/notes
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes  
    activate server
    server-->>browser: 200 OK, HTML document
    deactivate server
    Note left of server: The HTML document causes the browser to fetch CSS and JS files

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css  
    activate server
    server-->>browser: 200 OK, CSS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js  
    activate server
    server-->>browser: 200 OK, JavaScript file
    deactivate server
    Note left of server: The JS file causes the browser to make a new request via callback function

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json 
    activate server
    server-->>browser: 200 OK, JSON content
    deactivate server
```
