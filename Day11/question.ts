// 1. The Generic API Wrapper
// Scenario: You need a reusable function to fetch data that automatically types the response.
// Task: Write a generic function fetchData<T>(url: string): Promise<T>. It should use the fetch API, check if the response is okay, and return the JSON parsed as type T. Test it by creating an Album interface and fetching data from a mock URL.

// Generic API Wrapper
// Generic API Wrapper
async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error('Network request Failed: ' + response.statusText)
    }
    const data: T = await response.json();
    return data;
}

interface Album {
    userId: number,
    id: number,
    title: string
}

async function demo() {
    const url = "https://jsonplaceholder.typicode.com/albums/1";
    const album = await fetchData<Album>(url);

    console.log(`Album ID: ${album.id}`)
    console.log(`Album Title: ${album.title}`)
}

demo();
//2. Record Mapping for Configuration
// Scenario: You are managing feature flags or permissions for specific user roles.
// Task: Define an enum Role { Admin, Editor, Guest }. Use the Record utility type to create a variable PermissionMap where every Role must be mapped to a boolean value. If a role is missing from the object, TypeScript should throw an error.

enum Role{
    Admin ="Admin",
    Editor ="Editor",
    Guest ="Guest"
}
const permissionMap:Record<Role,boolean> ={
    [Role.Admin]:true,
    [Role.Editor]:true,
    [Role.Guest]:false
};
console.log(permissionMap);

// 3. Exhaustiveness Checking (The never Type)
// Scenario: You want to ensure that if a new member is added to a Union, your logic must be updated to handle it.
// Task:
// Create a union type TaskStatus = 'Open' | 'InProgress' | 'Closed'.
// Write a function handleTask(status: TaskStatus) using a switch statement.
// In the default case, assign the status to a variable of type never.
// The Test: Add 'Archived' to the union and verify that the code fails to compile until you add the new case.

type TaskStatus =
    | "Open"
    | "InProgress"
    | "Closed"
    | "Archived";

function handleTask(status: TaskStatus): string {

    switch (status) {

        case "Open":
            return "Task is open";

        case "InProgress":
            return "Task is in progress";

        case "Closed":
            return "Task is closed";

        case "Archived":
            return "Task is archived";

        default: {
            const exhaustiveCheck: never = status;
            return exhaustiveCheck;
        }
    }
}

console.log(handleTask("Open"));
console.log(handleTask("InProgress"));
console.log(handleTask("Closed"));
console.log(handleTask("Archived"));
// 4. Recursive Navigation Type
// Scenario: You are building a tree structure for a file system or a sidebar menu.
// Task: Define a type FolderNode that has a name: string. It should also have an optional files: string[] and an optional subFolders property, which is an array of FolderNode objects.
type FolderNode ={
    name:string;
    files?:string[];
    subFolders?:FolderNode[];
};
const rootFolder:FolderNode={
    name:"Root",
    files:["index.html","app.ts"],
    subFolders:[
        {
            name:"Components",
            files:["Navbar.tsx","Footer.tsx"]
        },
        {
            name:"Assets",
            subFolders:[
                {
                    name:"Images",
                    files:["logo.png",
                        "banner.jpg"]
                }
            ]
        }
    ]

    

};
console.log(rootFolder);

// 5. Template Literal Types for CSS
// Scenario: You are building a UI library and want to strictly enforce unit types for a "spacing" prop.
// Task: Create a type MarginValue that only allows strings ending in "px", "rem", or "vh" (e.g., "10px", "2rem"). Use Template Literal Types to ensure a number must precede the unit.

type MarginValue=
   |`${number}px`
   |`${number}rem`
   |`${number}vh`;
   const margin1: MarginValue = "10px";
   const margin2: MarginValue="2rem";
   const margin3: MarginValue = "50vh";
console.log(margin1);
console.log(margin2);
console.log(margin3);

// 6. Conditional Types & the infer Keyword
// Scenario: You are working with a library that returns data wrapped in a Promise, and you need to extract the underlying type.
// Task: Create a utility type UnwrapPromise<T>. It should check if T is a Promise. If it is, use the infer keyword to return the type the promise resolves to; otherwise, return T itself.

type UnwrapPromise<T> =
 T extends Promise<infer U>
 ? U
 :T;
 type Result1 = UnwrapPromise<Promise<string>>;
  type Result2 = UnwrapPromise<Promise<string>>;
   type Result3 = UnwrapPromise<Promise<string>>;
const value1: Result1 = "Hello";
 const value2: Result1 = "100";
const value3: Result1 = "true";
console.log(value1);
console.log(value2);
console.log(value3);

// 7. The Union Manipulation Puzzle
// Scenario: You have a massive union of possible events but need to categorize them for specific handlers.
// Task: Given type AllEvents = 'click' | 'dbclick' | 'submit' | 'reset' | 'keypress'.
// Use Extract to create MouseEvents (only click and dbclick).
// Use Exclude to create NonFormEvents (everything except submit and reset).
type AllEvents =
    | "click"
    | "dbclick"
    | "submit"
    | "reset"
    | "keypress";
type MouseEvents = Extract<
    AllEvents,
    "click" | "dbclick"
>;
type NonFormEvents = Exclude<
    AllEvents,
    "submit" | "reset"
>;
const mouseEvent: MouseEvents = "click";
const nonFormEvent: NonFormEvents =
    "keypress";
console.log(mouseEvent);
console.log(nonFormEvent);
