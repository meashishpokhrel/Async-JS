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


function createPost (post, callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    }, 2000);
}

createPost ({title: "post js", description: "this is one"}, getPost);

console.log("hello");