import fs  from 'fs';
fs.writeFile("hello.txt", "hello world in india ", function(err) {
    if (err) {
        console.error("Error writing to file:" + err);
    } else {
        console.log("file written successfully");
    }
});

fs.appendFile("hello.txt", " this is my city delhi", function(err) {
    if (err) {
        console.error("Error writing to file:" + err);
    } else {
        console.log("file written successfully");
    }
});

fs.rename("hello.txt", "hey.txt", function(err) {
    if (err) {
        console.error("Error reading file:" + err);
    } else {
        console.log("File content:", data.toString());
    }
});

fs.copyFile("hey.txt", "hey2.txt", function(err){
    if (err) {
        console.error("Error copying file:" + err);
    } else {
        console.log("File copied successfully");
    }
}); 
// it is used to delete the file 
fs.unlink("hey.txt", function(err){
    if (err) {
        console.error("Error deleting file:" + err);
    } else {
        console.log("File deleted successfully");
    }
}); 
