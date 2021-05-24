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
                reject();
            }
        }, 2000);
    });
    
}

createPost ({title: "post js", description: "this is one"}).then(getPost);

console.log("hello promise");