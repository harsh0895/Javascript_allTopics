// Loops with objects:-

const obj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    py: 'python'
}

for( let key in obj ){
    console.log(`value of ${key} = ${obj[key]}`) // print all values
    // console.log(`value of ${key} = ${obj.key}`) // undefined values
}

const arr = [ "js", "cpp", "java", "python" ]
for( let key in arr ){
    console.log(key)
}