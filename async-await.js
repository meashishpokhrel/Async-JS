const posts = [
    { title: "post one", description: "this is one"},
    {title: "post two", description: "this is one"}
]

function getPost (){
    setTimeout(()=>{
        let output="";
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML=output;
    }, 1000)
}




function createPost (post){
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            posts.push(post);
            let err =false;

            if (!err){
                resolve();
            }
            else{
                reject("SOmething Wrong");
            }
        }, 2000);
    });
    
}


async function init (){
    await createPost ({title: "post js", description: "this is one"});
    getPost();
}
init();

async function fetchUsers(){
    const res = await fetch ("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()

    console.log(data);
}

fetchUsers();

console.log("hello async await");